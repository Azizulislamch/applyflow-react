const JobCard = ({ job, onDelete, onStatusUpdate, onEdit }) => {
    const statusStyles = {
        pending: "bg-blue-100 text-blue-700",
        interview: "bg-green-100 text-green-700",
        rejected: "bg-red-100 text-red-700"
    };

    return (
        <article className="bg-white rounded-xl shadow-md p-6 flex justify-between gap-6 transition hover:shadow-lg">
            <div className="space-y-3">
                <h2 className="text-2xl font-bold text-sky-900">{job.company}</h2>
                <p className="text-gray-500 text-lg">{job.title}</p>
                <span className={`inline-block px-4 py-1 rounded-full font-semibold text-sm ${statusStyles[job.status]}`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
                <p className="text-gray-500">{job.desc}</p>

                <div className="flex flex-wrap gap-4 mt-3">
                    <button onClick={() => onStatusUpdate(job.id, 'interview')} className="px-4 py-2 rounded-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">Interview</button>
                    <button onClick={() => onStatusUpdate(job.id, 'rejected')} className="px-4 py-2 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">Rejected</button>
                    <button onClick={onEdit} className="px-4 py-2 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">Edit</button>
                </div>
            </div>
            <button onClick={() => onDelete(job.id)} className="p-3 h-12 w-12 rounded-full border border-gray-300 text-gray-400 hover:bg-red-50 hover:text-red-500 transition">
                <i className="fa-solid fa-trash"></i>
            </button>
        </article>
    );
};
export default JobCard;