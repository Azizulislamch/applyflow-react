import { useState, useEffect } from 'react';

const JobForm = ({ onSubmit, editingJob, setEditingJob }) => {
    
    const initialState = {
        company: '',
        title: '',
        location: '',
        type: 'Full Time',
        salary: '',
        desc: ''
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (editingJob) setFormData(editingJob);
    }, [editingJob]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formData);

        setFormData(initialState);

        if (editingJob) setEditingJob(null);
    };

    return (
        <section className="bg-white rounded-xl shadow p-6 mb-10 border border-gray-100">
            <h2 className="text-xl font-bold text-sky-900 mb-4">
                {editingJob ? "📝 Edit Job Details" : "➕ Add New Job"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    type="text" placeholder="Company Name" className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none" required
                />
                <input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    type="text" placeholder="Job Title" className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none" required
                />
                <input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    type="text" placeholder="Location" className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
                />

                {/* Dropdown for Job Type */}
                <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="border rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-sky-500 outline-none"
                >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Contract">Contract</option>
                </select>

                <input
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    type="text" placeholder="Salary Range" className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
                />
                <textarea
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    placeholder="Short Description" className="border rounded-lg px-4 py-2 md:col-span-2 focus:ring-2 focus:ring-sky-500 outline-none"
                ></textarea>

                <button type="submit" className="md:col-span-2 bg-sky-500 text-white py-2 rounded-xl font-bold hover:bg-sky-600 transition shadow-md">
                    {editingJob ? "Update Job Info" : "Add Job to List"}
                </button>
            </form>
        </section>
    );
};

export default JobForm;