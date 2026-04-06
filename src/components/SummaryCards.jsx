const SummaryCards = ({ jobs }) => {
  const total = jobs.length;
  const pending = jobs.filter(j => j.status === 'pending').length;
  const interview = jobs.filter(j => j.status === 'interview').length;
  const rejected = jobs.filter(j => j.status === 'rejected').length;

  const stats = [
    { label: "Total Applications", count: total, color: "text-gray-800" },
    { label: "Pending", count: pending, color: "text-yellow-500" },
    { label: "Interview", count: interview, color: "text-green-500" },
    { label: "Rejected", count: rejected, color: "text-red-500" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">{stat.label}</p>
          <h3 className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.count}</h3>
        </div>
      ))}
    </section>
  );
};

export default SummaryCards;