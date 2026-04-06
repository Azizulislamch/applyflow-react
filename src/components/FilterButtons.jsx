const FilterButtons = ({ activeFilter, setFilter }) => {
  const filters = ["All", "Pending", "Interview", "Rejected"];

  return (
    <section className="flex flex-wrap gap-3 mb-8">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-xl font-medium shadow transition ${
            activeFilter === f
              ? "bg-sky-500 text-white"
              : "bg-white text-gray-500 hover:bg-sky-100"
          }`}
        >
          {f}
        </button>
      ))}
    </section>
  );
};

export default FilterButtons;