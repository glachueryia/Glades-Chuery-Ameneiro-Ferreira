
import React, { useState } from 'react';
import { 
  UserCircle, Building2, Search, Filter, Plus, MoreVertical, 
  BadgeCheck, Briefcase, Mail, FileText 
} from 'lucide-react';
import { MOCK_MEMBERS } from '../constants';

const MemberList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PF' | 'PJ'>('PF');
  const filteredMembers = MOCK_MEMBERS.filter(m => m.personType === activeTab);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Quadro Social</h1>
          <p className="text-slate-500 font-medium">Gestão de associados e base cadastral corporativa.</p>
        </div>
        <div className="flex bg-slate-100 p-2 rounded-2xl">
          <button 
            onClick={() => setActiveTab('PF')}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'PF' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <UserCircle size={18} /> Pessoas Físicas
          </button>
          <button 
            onClick={() => setActiveTab('PJ')}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'PJ' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Building2 size={18} /> Pessoas Jurídicas
          </button>
        </div>
      </header>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-10 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="relative flex-1 max-w-lg group">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={20} />
             <input 
               type="text" 
               placeholder={`Buscar por nome, documento ou cargo...`}
               className="w-full pl-16 pr-6 py-4 bg-slate-50/50 border-none rounded-[1.5rem] text-sm focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
             />
           </div>
           <button className="bg-emerald-600 text-white px-8 py-4 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
             <Plus size={20} /> Novo Registro
           </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-10 py-6">Associado</th>
                <th className="px-10 py-6">Categoria</th>
                <th className="px-10 py-6">Status</th>
                <th className="px-10 py-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50/50 transition-all group">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-[1.5rem] bg-slate-100 border border-slate-200 overflow-hidden ring-4 ring-white shadow-sm">
                        <img src={member.avatar} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-black text-slate-800 text-lg flex items-center gap-2 mb-1">
                          {member.name}
                          {member.status === 'Ativo' && <BadgeCheck size={16} className="text-blue-500" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase size={12} className="text-slate-400" />
                          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.1em]">{member.position}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-[10px] font-bold text-slate-400 tracking-widest">{member.document}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {member.category}
                    </span>
                  </td>
                  <td className="px-10 py-8">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${
                      member.status === 'Ativo' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${member.status === 'Ativo' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{member.status}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-20 group-hover:opacity-100 transition-all">
                       <button className="p-3 bg-white text-slate-400 hover:text-emerald-600 rounded-xl shadow-sm"><Mail size={20} /></button>
                       <button className="p-3 bg-white text-slate-400 hover:text-blue-600 rounded-xl shadow-sm"><FileText size={20} /></button>
                       <button className="p-3 bg-white text-slate-400 hover:text-slate-800 rounded-xl shadow-sm"><MoreVertical size={20} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
