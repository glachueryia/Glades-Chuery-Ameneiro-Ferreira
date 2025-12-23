
import React from 'react';
import { 
  FileText, TrendingUp, Clock, CheckCircle2, AlertCircle, Stamp, 
  Download, Calculator, RefreshCw, BadgePercent, Trash2, Plus
} from 'lucide-react';
import { MOCK_INVOICES } from '../constants';

const Finance: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Financeiro & Fiscal</h1>
          <p className="text-slate-500 font-medium">Controle de faturamento, emissão de NF-e e recebíveis.</p>
        </div>
        <button className="bg-emerald-950 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-xl flex items-center gap-2">
          <Calculator size={20} /> Relatório de Conciliação
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-black text-xl text-slate-800">Faturas & Documentos</h3>
            <button className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl hover:bg-emerald-100 transition-all">
              <Plus size={20} />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-10 py-5">Cliente / Descrição</th>
                  <th className="px-10 py-5">Valor</th>
                  <th className="px-10 py-5">Status Fiscal</th>
                  <th className="px-10 py-5 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_INVOICES.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50/50 transition-all group">
                    <td className="px-10 py-8">
                      <div className="font-black text-slate-800 text-sm mb-1">{inv.customerName}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{inv.courseName}</div>
                    </td>
                    <td className="px-10 py-8 font-black text-slate-700 text-sm">
                      R$ {inv.amount.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-10 py-8">
                      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${
                        inv.status === 'Emitida' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {inv.status === 'Emitida' ? <CheckCircle2 size={14} /> : <RefreshCw size={14} className="animate-spin" />}
                        <span className="text-[10px] font-black uppercase tracking-widest">{inv.status}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8 text-right">
                      <div className="flex justify-end gap-3 opacity-40 group-hover:opacity-100 transition-all">
                        <button className="p-2 text-slate-500 hover:text-emerald-600"><Download size={20} /></button>
                        <button className="p-2 text-slate-500 hover:text-blue-600"><Stamp size={20} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-emerald-950 p-10 rounded-[3rem] text-white shadow-2xl shadow-emerald-950/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full -mr-16 -mt-16 opacity-30"></div>
            <h3 className="text-2xl font-black mb-6 tracking-tight leading-tight">Consolidação<br/>Financeira</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-emerald-900 pb-4">
                <span className="text-emerald-400/60 text-xs font-black uppercase">Vendas Hoje</span>
                <span className="text-2xl font-black">R$ 12.450</span>
              </div>
              <div className="flex justify-between items-end border-b border-emerald-900 pb-4">
                <span className="text-emerald-400/60 text-xs font-black uppercase">Recebido (PIX)</span>
                <span className="text-2xl font-black">R$ 8.200</span>
              </div>
              <div className="flex justify-between items-end border-b border-emerald-900 pb-4">
                <span className="text-emerald-400/60 text-xs font-black uppercase">Pendentes</span>
                <span className="text-2xl font-black text-amber-400">R$ 4.250</span>
              </div>
            </div>
            <button className="w-full mt-10 bg-emerald-500 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition-all">
              Ver Extrato Completo
            </button>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h4 className="font-black text-slate-800 mb-6 flex items-center gap-2">
                <AlertCircle size={20} className="text-amber-500" /> Pendências Fiscais
             </h4>
             <div className="space-y-4">
                <div className="p-5 bg-amber-50 rounded-[1.5rem] border border-amber-100">
                   <p className="text-xs font-black text-amber-800 uppercase tracking-widest mb-1">NF-e Processando</p>
                   <p className="text-[11px] text-amber-700/70 font-medium">3 notas estão aguardando retorno do WebService da Prefeitura.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
