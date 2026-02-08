import { ListTodo, CheckCircle2, Circle } from 'lucide-react';

export default function TaskCounter({ total, completed }) {
  const active = total - completed;
  
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-2xl border border-indigo-200 dark:border-indigo-800">
        <div className="flex items-center gap-2 mb-1">
          <ListTodo className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">Total</span>
        </div>
        <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{total}</p>
      </div>
      
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-2xl border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-xs font-medium text-green-600 dark:text-green-400">Completed</span>
        </div>
        <p className="text-2xl font-bold text-green-700 dark:text-green-300">{completed}</p>
      </div>
      
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-2xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-1">
          <Circle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Active</span>
        </div>
        <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{active}</p>
      </div>
    </div>
  );
}
