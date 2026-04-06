import { useState } from 'react';

const JobCard = ({ job, onDelete, onStatusUpdate, onSubmitEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ ...job });

    const statusStyles = {
        pending: "bg-blue-100 text-blue-700",
        interview: "bg-green-100 text-green-700",
        rejected: "bg-red-100 text-red-700"
    };

    const handleSave = () => {
        onSubmitEdit(editData);
        setIsEditing(false);
    };

    // Edit Form inside Card
    if (isEditing) {
        return (
            <article className="bg-sky-50 rounded-xl shadow-md p-6 border-2 border-sky-300 transition">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        className="border rounded-lg px-3 py-2 text-sm"
                        value={editData.company}
                        onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                    />
                    <input
                        className="border rounded-lg px-3 py-2 text-sm"
                        value={editData.title}
                        onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                    />
                    <input
                        className="border rounded-lg px-3 py-2 text-sm"
                        value={editData.location}
                        onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                    />
                    <select
                        className="border rounded-lg px-3 py-2 text-sm bg-sky-50"
                        value={editData.type}
                        onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                    >
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Contract">Contract</option>
                    </select>
                    <input
                        className="border rounded-lg px-3 py-2 text-sm"
                        value={editData.salary}
                        onChange={(e) => setEditData({ ...editData, salary: e.target.value })}
                    />
                    <textarea
                        className="border rounded-lg px-3 py-2 text-sm md:col-span-2"
                        value={editData.desc}
                        onChange={(e) => setEditData({ ...editData, desc: e.target.value })}
                    />
                    <div className="md:col-span-2 flex gap-3">
                        <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition">Save</button>
                        <button onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-500 transition">Cancel</button>
                    </div>
                </div>
            </article>
        );
    }

    // Job Card View
    return (
        <article className="bg-white rounded-xl shadow-md p-6 flex justify-between gap-6 transition hover:shadow-lg">
            <div className="space-y-3 w-full">
                <h2 className="text-2xl font-bold text-sky-900">{job.company}</h2>
                <p className="text-gray-500 text-lg font-medium">{job.title}</p>

                <ul className="flex flex-wrap gap-4 text-sm text-gray-400">
                    {job.location && <li><i className="fa-solid fa-location-dot mr-1"></i> {job.location}</li>}
                    {job.type && <li><i className="fa-solid fa-briefcase mr-1"></i> {job.type}</li>}
                    {job.salary && <li><i className="fa-solid fa-money-bill-wave mr-1"></i> {job.salary}</li>}
                </ul>

                <span className={`inline-block px-4 py-1 rounded-full font-semibold text-sm ${statusStyles[job.status]}`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>

                <p className="text-gray-600 leading-relaxed">{job.desc}</p>

                <div className="flex flex-wrap gap-4 mt-4">
                    <button onClick={() => onStatusUpdate(job.id, 'interview')} className="px-4 py-2 rounded-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition font-medium">Interview</button>
                    <button onClick={() => onStatusUpdate(job.id, 'rejected')} className="px-4 py-2 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition font-medium">Rejected</button>
                    <button onClick={() => setIsEditing(true)} className="px-4 py-2 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition font-medium">Edit</button>
                </div>
            </div>

            <div className="flex flex-col justify-start">
                <button onClick={() => onDelete(job.id)} className="p-3 h-12 w-12 rounded-full border border-gray-300 text-gray-400 hover:bg-red-50 hover:text-red-500 transition">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </article>
    );
};

export default JobCard;