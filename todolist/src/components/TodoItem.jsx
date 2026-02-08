import { useState } from 'react';
import { Check, Trash2, Edit2, Circle } from 'lucide-react';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  return (
    <div className={`group flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border-2 transition-all duration-200 ${
      todo.completed 
        ? 'border-green-200 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10' 
        : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/10'
    }`}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          todo.completed
            ? 'bg-gradient-to-br from-green-400 to-emerald-500 border-green-500 shadow-lg shadow-green-500/30'
            : 'border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 hover:scale-110'
        }`}
      >
        {todo.completed ? <Check className="w-4 h-4 text-white" strokeWidth={3} /> : <Circle className="w-3 h-3 text-gray-400" />}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          className="flex-1 px-3 py-2 border-2 border-purple-500 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none shadow-lg"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 text-base transition-all ${
            todo.completed 
              ? 'line-through text-gray-400 dark:text-gray-500' 
              : 'text-gray-700 dark:text-gray-200 font-medium'
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {!isEditing && !todo.completed && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-all hover:scale-110"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all hover:scale-110"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
