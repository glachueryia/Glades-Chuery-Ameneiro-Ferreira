
import React from 'react';
import { 
  Target, TrendingUp, MessageCircle, MoreVertical, Plus, 
  Search, Filter, Zap, Star, Phone, ArrowRight, MousePointer2 
} from 'lucide-react';
import { MOCK_LEADS } from '../constants';

const CRM: React.FC = () => {
  const stages = ['Novo', 'Qualificado', 'Proposta', 'Negociação'];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Pipeline de Vendas</h1>
          <p className="text-slate-500 font-medium">Gestão inteligente de prospects e parcerias.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
            <Plus size={20} /> Novo Lead
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-x-auto pb-6">
        {stages.map((stage) => (
          <div key={stage} className="min-w-[320px] flex flex-col gap-6">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <h4 className="font-black text-slate-400 uppercase text-xs tracking-[0.2em]">{stage}</h4>
                <span className="bg-slate-200 text-slate-600 text-[10px] font-black px-2.5 py-1 rounded-full">
                  {MOCK_LEADS.filter(l => l.stage === stage).length}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 bg-slate-100/40 p-3 rounded-[2.5rem] border border-slate-100 min-h-[600px]">
              {MOCK_LEADS.filter(l => l.stage === stage).map((lead) => (
                <div key={lead.id} className="bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer border border-transparent hover:border-emerald-100">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-2 rounded-xl ${lead.score > 80 ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-300'}`}>
                      <Star size={18} fill={lead.score > 80 ? "currentColor" : "none"} />
                    </div>
                    <button className="text-slate-300 group-hover:text-slate-500 transition-colors"><MoreVertical size={18} /></button>
                  </div>
                  
                  <h5 className="font-black text-slate-800 text-lg mb-1 leading-tight">{lead.name}</h5>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{lead.company}</p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest">{lead.source}</span>
                    <span className="text-xs font-black text-slate-800">R$ {lead.expectedValue}</span>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex gap-2">
                      <button className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors">
                        <MessageCircle size={16} />
                      </button>
                      <button className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                        <Phone size={16} />
                      </button>
                    </div>
                    <div className="text-right">
                       <p className="text-[8px] font-black text-slate-300 uppercase tracking-tighter">Lead Score</p>
                       <p className="text-sm font-black text-emerald-600">{lead.score}%</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold text-xs hover:border-emerald-300 hover:text-emerald-500 transition-all flex items-center justify-center gap-2">
                 <Plus size={16} /> Adicionar Lead
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRM;
