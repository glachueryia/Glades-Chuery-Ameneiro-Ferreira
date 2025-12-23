
import React, { useState } from 'react';
import { Bot, Send, Sparkles, X, Loader2, BarChart2 } from 'lucide-react';
import { getBusinessInsights } from '../services/geminiService';
import { MOCK_MEMBERS, MOCK_INVOICES } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    const context = {
      totalMembros: MOCK_MEMBERS.length,
      faturamentoEstimado: MOCK_INVOICES.reduce((acc, inv) => acc + inv.amount, 0),
      nfsEmitidas: MOCK_INVOICES.filter(i => i.status === 'Emitida').length,
      recentes: MOCK_MEMBERS.slice(0, 2).map(m => m.name)
    };

    const insight = await getBusinessInsights(query, context);
    setResponse(insight);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-600 rounded-2xl shadow-2xl flex items-center justify-center text-white hover:bg-emerald-700 hover:rotate-6 transition-all z-[60] group border-4 border-emerald-100"
      >
        <Sparkles className="group-hover:scale-110 transition-transform" />
      </button>

      <div className={`fixed inset-y-0 right-0 w-80 md:w-96 bg-white shadow-2xl border-l border-emerald-100 z-[70] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                <BarChart2 size={24} />
              </div>
              <div>
                <h3 className="font-black text-slate-800 uppercase tracking-tight">IBRI Advisor</h3>
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Sistema Ativo
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-emerald-600 transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            <div className="bg-slate-50 p-6 rounded-2xl text-sm text-slate-600 border border-slate-100 leading-relaxed">
              Olá, sou o **IBRI Advisor**. Como posso auxiliar na gestão institucional hoje? Posso analisar taxas de renovação, prever faturamento de cursos ou sugerir melhorias no CRM.
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <Loader2 className="animate-spin text-emerald-600" size={40} />
                <span className="text-xs font-bold text-emerald-700/50 uppercase tracking-widest">Processando Inteligência...</span>
              </div>
            )}

            {response && (
              <div className="bg-emerald-50 p-6 rounded-2xl text-sm text-emerald-900 border border-emerald-100 animate-in fade-in slide-in-from-top-4 duration-300 shadow-sm leading-relaxed">
                <p className="font-black text-emerald-700 mb-4 flex items-center gap-2">
                  <Sparkles size={16}/> ANÁLISE ESTRATÉGICA:
                </p>
                {response}
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="mt-6 relative">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pergunta estratégica (ex: análise de faturamento)" 
              className="w-full pl-5 pr-14 py-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 text-sm text-emerald-950 outline-none transition-all placeholder:text-emerald-900/30"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="absolute right-2.5 top-2.5 p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 shadow-lg shadow-emerald-500/20"
            >
              <Send size={18} />
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center gap-2">
             <div className="h-[1px] flex-1 bg-emerald-100"></div>
             <span className="text-[9px] text-emerald-700/40 font-bold uppercase tracking-[0.2em]">Google Gemini Engine</span>
             <div className="h-[1px] flex-1 bg-emerald-100"></div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-emerald-950/20 backdrop-blur-md z-[65] animate-in fade-in duration-300"
        />
      )}
    </>
  );
};

export default AIAssistant;
