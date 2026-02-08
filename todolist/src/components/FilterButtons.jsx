export default function FilterButtons({ filter, setFilter }) {
  const filters = [
    { value: 'all', label: 'All Tasks', color: 'indigo' },
    { value: 'active', label: 'Active', color: 'blue' },
    { value: 'completed', label: 'Completed', color: 'green' }
  ];

  return (
    <div className="flex gap-3 justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
            filter === f.value
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105'
              : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
