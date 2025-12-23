
import React from 'react';
import { ShieldCheck, Gavel, Scale, Fingerprint, Clock, FileText, Download, MoreVertical } from 'lucide-react';
import { MOCK_GOVERNANCE_MEMBERS, MOCK_ASSEMBLIES } from '../constants';

const Governance: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Governança Institucional</h1>
          <p className="text-slate-500 font-medium">Controle estatutário, conselhos e decisões estratégicas.</p>
        </div>
        <button className="bg-emerald-950 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-xl flex items-center gap-2">
          <Gavel size={20} /> Convocar Assembleia
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50">
               <h3 className="font-black text-xl text-slate-800">Conselho de Administração</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
              {MOCK_GOVERNANCE_MEMBERS.map((member) => (
                <div key={member.id} className="bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100 hover:border-emerald-200 transition-all group">
                   <div className="flex items-center gap-6 mb-8">
                      <img src={member.avatar} alt="" className="w-20 h-20 rounded-[1.5rem] object-cover ring-4 ring-white shadow-lg" />
                      <div>
                         <h4 className="font-black text-slate-800 text-lg leading-tight">{member.name}</h4>
                         <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-1">{member.role}</p>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px]">
                         <span className="font-bold text-slate-400 uppercase">Mandato</span>
                         <span className="font-black text-slate-700">2023 - 2025</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                         <span className="font-bold text-slate-400 uppercase">Empresa</span>
                         <span className="font-black text-slate-700">{member.company}</span>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm p-8">
             <h3 className="font-black text-xl text-slate-800 mb-8">Assembleias & Atas</h3>
             <div className="space-y-4">
                {MOCK_ASSEMBLIES.map(assembly => (
                  <div key={assembly.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-transparent hover:border-emerald-100 transition-all group cursor-pointer">
                     <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-emerald-600 shadow-sm transition-colors">
                           <FileText size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{assembly.type} • {assembly.date}</p>
                           <h4 className="font-black text-slate-800 text-lg leading-tight">{assembly.title}</h4>
                        </div>
                     </div>
                     <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                       {assembly.status}
                     </span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <Fingerprint className="text-emerald-400 mb-8" size={40} />
              <h3 className="text-2xl font-black mb-4 tracking-tight">Compliance & LGPD</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-10">
                Nexus Connect utiliza auditoria por Blockchain para garantir a imutabilidade dos votos em assembleias digitais.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <ShieldCheck size={20} className="text-emerald-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Encarregado DPO Ativo</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Clock size={20} className="text-emerald-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Logs de Acesso Verificados</span>
                 </div>
              </div>
              <button className="w-full mt-10 bg-emerald-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all">
                 Painel de Conformidade
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
