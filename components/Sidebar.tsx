
import React from 'react';
import { AppView } from '../types';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  GraduationCap, 
  Newspaper,
  ChevronRight,
  Settings,
  LogOut,
  BarChart3,
  Megaphone,
  Briefcase,
  ShieldCheck,
  CalendarDays
} from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems = [
    { id: AppView.ADMIN_DASHBOARD, label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: AppView.MEMBER_LIST, label: 'Associados', icon: <Users size={20} /> },
    { id: AppView.GOVERNANCE, label: 'Governança', icon: <ShieldCheck size={20} /> },
    { id: AppView.COMMISSIONS, label: 'Comitês & Grupos', icon: <Briefcase size={20} /> },
    { id: AppView.EVENTS, label: 'Eventos', icon: <CalendarDays size={20} /> },
    { id: AppView.COURSES, label: 'Cursos & Vendas', icon: <GraduationCap size={20} /> },
    { id: AppView.FINANCE, label: 'Faturamento & NF-e', icon: <FileText size={20} /> },
    { id: AppView.CRM, label: 'Prospecção CRM', icon: <BarChart3 size={20} /> },
    { id: AppView.MARKETING_COMM, label: 'Comunicação & Mkt', icon: <Megaphone size={20} /> },
  ];

  return (
    <div className="w-64 bg-emerald-950 h-full fixed left-0 top-0 text-emerald-100 flex flex-col z-50">
      <div className="p-6 flex flex-col gap-1 border-b border-emerald-900/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/20">I</div>
          <span className="text-xl font-bold text-white tracking-tight">IBRI Portal</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest ml-1">Institucional RI</span>
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2 overflow-y-auto pb-6">
        <p className="text-[10px] font-bold text-emerald-500/70 uppercase tracking-widest px-2 mb-4">Gestão Interna</p>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
              currentView === item.id 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'hover:bg-emerald-900/50 hover:text-white text-emerald-300'
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
            {currentView === item.id && <ChevronRight size={14} />}
          </button>
        ))}

        <div className="pt-8">
           <p className="text-[10px] font-bold text-emerald-500/70 uppercase tracking-widest px-2 mb-4">Portal Público</p>
           <button
             onClick={() => setView(AppView.MEMBER_PORTAL)}
             className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
              currentView === AppView.MEMBER_PORTAL 
                ? 'bg-white text-emerald-900 shadow-lg' 
                : 'hover:bg-emerald-900/50 hover:text-white text-emerald-300'
            }`}
           >
             <Newspaper size={20} />
             <span className="font-medium">Site do Associado</span>
           </button>
        </div>
      </nav>

      <div className="p-4 border-t border-emerald-900/50 mt-auto bg-emerald-950">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-emerald-400 hover:bg-emerald-900/50 hover:text-white">
          <Settings size={20} />
          <span className="font-medium">Configurações</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 mt-1 rounded-lg text-emerald-400 hover:bg-red-900/20 hover:text-red-400">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
