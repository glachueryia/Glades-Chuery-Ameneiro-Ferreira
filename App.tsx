
import React, { useState } from 'react';
import { AppView } from './types';
import Sidebar from './components/Sidebar';
import AdminDashboard from './components/AdminDashboard';
import MemberPortal from './components/MemberPortal';
import MemberList from './components/MemberList';
import AIAssistant from './components/AIAssistant';
import MarketingComm from './components/MarketingComm';
import Commissions from './components/Commissions';
import CoursesSales from './components/CoursesSales';
import Governance from './components/Governance';
import Finance from './components/Finance';
import Events from './components/Events';
import CRM from './components/CRM';
import { Bell, Search, Globe, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.ADMIN_DASHBOARD);

  const renderContent = () => {
    switch (currentView) {
      case AppView.ADMIN_DASHBOARD: return <AdminDashboard />;
      case AppView.MEMBER_LIST: return <MemberList />;
      case AppView.CRM: return <CRM />;
      case AppView.FINANCE: return <Finance />;
      case AppView.GOVERNANCE: return <Governance />;
      case AppView.MEMBER_PORTAL: return <MemberPortal />;
      case AppView.MARKETING_COMM: return <MarketingComm />;
      case AppView.COMMISSIONS: return <Commissions />;
      case AppView.COURSES: return <CoursesSales />;
      case AppView.EVENTS: return <Events />;
      default: return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-1 ml-64 min-h-screen relative transition-all">
        <header className="h-24 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-12 sticky top-0 z-40">
          <div className="relative w-96 max-w-full group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Pesquisar em toda a plataforma..." 
              className="w-full pl-16 pr-6 py-4 bg-slate-100/50 border-none rounded-2xl text-sm focus:outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/5 transition-all"
            />
          </div>

          <div className="flex items-center gap-10">
            <div className="hidden xl:flex items-center gap-3 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer">
               <Globe size={20} />
               <span className="text-xs font-black uppercase tracking-widest">Global Ops</span>
               <ChevronDown size={14} />
            </div>

            <button className="relative p-3 text-slate-400 hover:text-emerald-600 transition-all hover:bg-emerald-50 rounded-2xl">
              <Bell size={24} />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-10 w-[1px] bg-slate-100 mx-2"></div>

            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-800 group-hover:text-emerald-600 transition-colors">Nexus Master</p>
                <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">Administrador Global</p>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 border-2 border-white shadow-xl shadow-emerald-500/10 flex items-center justify-center text-emerald-600 overflow-hidden group-hover:scale-105 transition-all ring-4 ring-transparent hover:ring-emerald-50">
                <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-12 max-w-[1800px] mx-auto pb-32">
          {renderContent()}
        </div>
      </main>

      <AIAssistant />
    </div>
  );
};

export default App;
