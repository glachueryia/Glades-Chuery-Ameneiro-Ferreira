
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          <span className={`text-xs font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
