import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  suffix?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, icon, suffix = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4 shadow-lg hover:border-blue-500/30 transition-all duration-200"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-lg flex-shrink-0">
          <div className="text-cyan-400 w-5 h-5 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xl font-bold text-white mb-0.5">
            {value.toLocaleString()}{suffix}
          </p>
          <p className="text-gray-400 text-xs truncate">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};