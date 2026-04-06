import { useState, useEffect } from 'react';

const JobForm = ({ onSubmit, editingJob, setEditingJob }) => {
    const [formData, setFormData] = useState({
        company: '', title: '', location: '', type: '', salary: '', desc: ''
    });

    
    useEffect(() => {
        if (editingJob) setFormData(editingJob);
    }, [editingJob]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ company: '', title: '', location: '', type: '', salary: '', desc: '' });
    };

    return (
        <section className="bg-white rounded-xl shadow p-6 mb-10">
            <h2 className="text-xl font-bold text-sky-900 mb-4">
                {editingJob ? "Edit Job" : "Add New Job"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    type="text" placeholder="Company Name" className="border rounded-lg px-4 py-2" required
                />
                <input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    type="text" placeholder="Job Title" className="border rounded-lg px-4 py-2" required
                />
                <textarea
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    placeholder="Job Description" className="border rounded-lg px-4 py-2 md:col-span-2"
                ></textarea>
                <button type="submit" className="md:col-span-2 bg-sky-500 text-white py-2 rounded-xl font-medium hover:bg-sky-600 transition">
                    {editingJob ? "Update Job" : "Add Job"}
                </button>
                {editingJob && (
                    <button type="button" onClick={() => setEditingJob(null)} className="md:col-span-2 text-gray-500 underline">Cancel Edit</button>
                )}
            </form>
        </section>
    );
};
export default JobForm;