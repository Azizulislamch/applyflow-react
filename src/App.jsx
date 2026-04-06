import { useState, useEffect } from 'react';
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobCard from "./components/JobCard";
import FilterButtons from "./components/FilterButtons";
import SummaryCards from "./components/SummaryCards";


const defaultJobs = [
  {
    id: 1,
    company: "TechNova Solutions",
    title: "Full Stack Developer",
    location: "Dhaka",
    type: "Full Time",
    salary: "$80k – $110k",
    desc: "Build scalable apps",
    status: "pending",
  },
  {
    id: 2,
    company: "NextGen Labs",
    title: "MERN Developer",
    location: "Remote",
    type: "Full Time",
    salary: "$60k – $80k",
    desc: "Work with MERN stack",
    status: "pending",
  },
];

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editingJob, setEditingJob] = useState(null);

  // Load Data from Local Storage
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs'));
    
    if (savedJobs && savedJobs.length > 0) {
      setJobs(savedJobs);
    } else {
      setJobs(defaultJobs);
    }
  }, []);

  // Save Data in Local Storage 
  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }
  }, [jobs]);

  // Create & Update
  const addOrUpdateJob = (jobData) => {
    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? { ...jobData, id: job.id } : job));
      setEditingJob(null);
    } else {
      const newJob = { ...jobData, id: Date.now(), status: 'pending' };
      setJobs([newJob, ...jobs]);
    }
  };

  // Status Update
  const updateStatus = (id, newStatus) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: newStatus } : job));
  };

  // Job Delete
  const deleteJob = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter(job => job.id !== id));
    }
  };

  // Filter Jobs
  const filteredJobs = jobs.filter(job => 
    filter === 'All' ? true : job.status.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Header />
      
      <SummaryCards jobs={jobs} />
      
      <JobForm 
        onSubmit={addOrUpdateJob} 
        editingJob={editingJob} 
        setEditingJob={setEditingJob} 
      />

      <FilterButtons activeFilter={filter} setFilter={setFilter} />

      <main className="space-y-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              onDelete={deleteJob} 
              onStatusUpdate={updateStatus} 
              onEdit={() => setEditingJob(job)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">No jobs found in this category.</p>
        )}
      </main>
    </div>
  );
}

export default App;