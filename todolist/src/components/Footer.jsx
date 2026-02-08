import { Mail, MapPin, CheckSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <CheckSquare className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Join millions of people who organize</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">work and life with TaskMaster</p>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
          
          <div>
            <div className="text-gray-700 dark:text-gray-300 font-medium mb-2">Developer</div>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <p className="font-semibold">Sujan Bharati</p>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:sujanbharati306@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  sujanbharati306@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
