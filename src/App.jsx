import { useState, useEffect } from "react";
import Header from "./components/Header";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Filter from "./components/Filter";

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
  const [filter, setFilter] = useState("all");

  // LOAD
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("jobs"));
    if (saved && saved.length > 0) {
      setJobs(saved);
    } else {
      setJobs(defaultJobs);
    }
  }, []);

  // SAVE
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // CREATE
  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: Date.now(), status: "pending" }]);
  };

  // DELETE
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // UPDATE STATUS
  const updateStatus = (id, status) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, status } : job
      )
    );
  };

  // EDIT
  const editJob = (updatedJob) => {
    setJobs(
      jobs.map((job) =>
        job.id === updatedJob.id ? updatedJob : job
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Header jobs={jobs} />
      <JobForm addJob={addJob} />
      <Filter setFilter={setFilter} />
      <JobList
        jobs={jobs}
        filter={filter}
        deleteJob={deleteJob}
        updateStatus={updateStatus}
        editJob={editJob}
      />
    </div>
  );
}

export default App;