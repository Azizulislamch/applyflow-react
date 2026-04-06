import JobCard from "./JobCard";

function JobList({ jobs, filter, deleteJob, updateStatus, editJob }) {
  const filtered =
    filter === "all"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  return (
    <div className="space-y-6">
      {filtered.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          deleteJob={deleteJob}
          updateStatus={updateStatus}
          editJob={editJob}
        />
      ))}
    </div>
  );
}

export default JobList;