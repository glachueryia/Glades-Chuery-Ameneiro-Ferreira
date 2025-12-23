
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  FileCheck, 
  GraduationCap,
  ArrowUpRight,
  Target,
  BarChart3
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { MOCK_MEMBERS, MOCK_INVOICES, MOCK_LEADS } from '../constants';

const chartData = [
  { name: 'Jan', revenue: 42000, members: 12, leads: 40 },
  { name: 'Fev', revenue: 38000, members: 18, leads: 35 },
  { name: 'Mar', revenue: 56000, members: 25, leads: 62 },
  { name: 'Abr', revenue: 49000, members: 22, leads: 50 },
  { name: 'Mai', revenue: 61000, members: 30, leads: 58 },
  { name: 'Jun', revenue: 58000, members: 28, leads: 45 },
];

const AdminDashboard: React.FC = () => {
  const totalRevenue = MOCK_INVOICES.reduce((acc, inv) => acc + inv.amount, 0);
  const activeLeads = MOCK_LEADS.length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-black text-slate-800 tracking-tight">Painel Executivo Nexus</h1>
        <p className="text-slate-500 font-medium">Visão holística da saúde institucional e financeira.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
            <Users size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Membros Ativos</p>
            <h3 className="text-3xl font-black text-slate-800">{MOCK_MEMBERS.length}</h3>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
            <TrendingUp size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Receita Mês</p>
            <h3 className="text-3xl font-black text-slate-800">R$ {(totalRevenue/1000).toFixed(1)}k</h3>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl">
            <Target size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pipeline CRM</p>
            <h3 className="text-3xl font-black text-slate-800">{activeLeads}</h3>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
            <BarChart3 size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Conversão</p>
            <h3 className="text-3xl font-black text-slate-800">18%</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
          <h3 className="font-black text-xl text-slate-800 mb-8">Evolução de Receita & Novos Leads</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
          <h3 className="font-black text-xl text-slate-800 mb-8">Performance por Canal</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '20px', border: 'none' }} cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="leads" fill="#3b82f6" radius={[10, 10, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
