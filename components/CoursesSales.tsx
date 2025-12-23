
import React from 'react';
import { 
  GraduationCap, 
  CreditCard, 
  Users, 
  TrendingUp, 
  Plus, 
  Search, 
  Filter, 
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  Banknote,
  ArrowUpRight,
  Barcode,
  Zap,
  Building2,
  ChevronRight
} from 'lucide-react';
import { MOCK_COURSES, MOCK_ENROLLMENTS } from '../constants';

const PaymentMethodBadge: React.FC<{ method: string }> = ({ method }) => {
  const configs: Record<string, { icon: React.ReactNode, color: string, bg: string }> = {
    'PIX': { icon: <Zap size={12} />, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    'Cartão': { icon: <CreditCard size={12} />, color: 'text-blue-600', bg: 'bg-blue-50' },
    'Boleto': { icon: <Barcode size={12} />, color: 'text-slate-600', bg: 'bg-slate-50' },
    'Depósito': { icon: <Building2 size={12} />, color: 'text-amber-600', bg: 'bg-amber-50' },
  };

  const config = configs[method] || configs['Boleto'];

  return (
    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${config.bg} ${config.color} border border-current/10 shadow-sm`}>
      {config.icon}
      <span className="text-[10px] font-black uppercase tracking-wider">{method}</span>
    </div>
  );
};

const CoursesSales: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header & Bank Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Gestão de Vendas & Faturamento</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Banco do Brasil (API Ativa)</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest">Gateway Vindi/Cartão OK</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-bounce"></span>
              <p className="text-[10px] font-black text-cyan-700 uppercase tracking-widest">Webhook PIX Sincronizado</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={20} /> Exportar Conciliação
          </button>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
            <Plus size={20} /> Nova Inscrição
          </button>
        </div>
      </div>

      {/* Financial Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Vendas Totais</p>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-800">R$ 142.850</h3>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <TrendingUp size={20} />
            </div>
          </div>
          <p className="text-[10px] text-emerald-600 font-bold mt-2">Destaque: +22% em PIX</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Aguardando Baixa</p>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-800">04</h3>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Clock size={20} />
            </div>
          </div>
          <p className="text-[10px] text-amber-600 font-bold mt-2">Depósitos Identificados</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Volume Boleto</p>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-800">R$ 48.200</h3>
            <div className="p-2 bg-slate-50 text-slate-600 rounded-lg">
              <Barcode size={20} />
            </div>
          </div>
          <p className="text-[10px] text-slate-400 font-bold mt-2">Compensação em D+1</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Checkout Cartão</p>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-800">R$ 82.250</h3>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <CreditCard size={20} />
            </div>
          </div>
          <p className="text-[10px] text-blue-600 font-bold mt-2">Liberação Imediata</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Performance */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-black text-xl text-slate-800">Mix de Receita</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Últimos 30 dias</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            {[
              { label: 'PIX (55%)', color: 'bg-cyan-500', width: 'w-[55%]' },
              { label: 'Cartão (25%)', color: 'bg-blue-500', width: 'w-[25%]' },
              { label: 'Boleto (15%)', color: 'bg-slate-400', width: 'w-[15%]' },
              { label: 'Depósito (5%)', color: 'bg-amber-400', width: 'w-[5%]' },
            ].map(item => (
              <div key={item.label}>
                <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 mb-1.5">
                  <span>{item.label}</span>
                </div>
                <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} ${item.width} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-emerald-950 p-8 rounded-[2rem] text-white">
            <h4 className="font-black text-xl mb-2">Conciliação Pendente</h4>
            <p className="text-emerald-200/60 text-xs mb-6">Existem 4 depósitos identificados que requerem validação manual de comprovante.</p>
            <button className="w-full bg-emerald-500 py-3 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
              Validar Comprovantes
            </button>
          </div>
        </div>

        {/* Ledger Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="font-black text-xl text-slate-800">Transações e Inscrições</h3>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Filtrar transação..." 
                    className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-500/20 w-48"
                  />
                </div>
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-colors">
                  <Filter size={18} />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-8 py-4">Aluno / Curso</th>
                    <th className="px-8 py-4">Valor Pago</th>
                    <th className="px-8 py-4">Método</th>
                    <th className="px-8 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {MOCK_ENROLLMENTS.map(enr => (
                    <tr key={enr.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="font-black text-slate-800 text-sm group-hover:text-emerald-700 transition-colors">{enr.studentName}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate max-w-[200px]">{enr.courseTitle}</div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="text-sm font-black text-slate-700">
                          {enr.amountPaid.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{enr.memberCategory}</div>
                      </td>
                      <td className="px-8 py-5">
                        <PaymentMethodBadge method={enr.paymentMethod} />
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${
                          enr.paymentStatus === 'Pago' ? 'bg-emerald-50 text-emerald-700' : 
                          enr.paymentStatus === 'Pendente' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                        }`}>
                          {enr.paymentStatus === 'Pago' ? <CheckCircle2 size={12} /> : 
                           enr.paymentStatus === 'Pendente' ? <Clock size={12} /> : <AlertCircle size={12} />}
                          <span className="text-[10px] font-black uppercase tracking-widest">{enr.paymentStatus}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Compensado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Aguardando</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-emerald-700 font-black text-[10px] uppercase tracking-widest hover:gap-2 transition-all">
                Ver Log Completo de Transações <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSales;
