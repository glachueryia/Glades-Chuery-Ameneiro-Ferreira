
import React, { useState } from 'react';
import { 
  Mail, 
  Plus, 
  BarChart2, 
  ClipboardList, 
  ExternalLink,
  ChevronRight,
  Search,
  Users,
  Zap,
  MousePointer2,
  MessageSquare,
  Smartphone,
  Phone,
  Settings2,
  BellRing,
  Award
} from 'lucide-react';
import { MOCK_SURVEYS, MOCK_CAMPAIGNS } from '../constants';

const MarketingComm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'campaigns' | 'automations' | 'popups'>('campaigns');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Comunicação & Marketing</h1>
          <p className="text-slate-500">Inteligência de engajamento, automação e visibilidade institucional.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1">
             <button 
               onClick={() => setActiveTab('campaigns')}
               className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'campaigns' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               Campanhas
             </button>
             <button 
               onClick={() => setActiveTab('automations')}
               className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'automations' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               Automações
             </button>
             <button 
               onClick={() => setActiveTab('popups')}
               className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'popups' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               Pop-ups Site
             </button>
          </div>
        </div>
      </div>

      {/* Analytics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Base Total</p>
            <h3 className="text-xl font-black text-slate-800">4.820</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <Zap size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Auto-Engajamento</p>
            <h3 className="text-xl font-black text-slate-800">72%</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <MessageSquare size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Feedbacks Mês</p>
            <h3 className="text-xl font-black text-slate-800">142</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <Award size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certificados</p>
            <h3 className="text-xl font-black text-slate-800">856</h3>
          </div>
        </div>
      </div>

      {activeTab === 'campaigns' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-black text-xl text-slate-800">Canais de Preferência</h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Como o associado quer ser ouvido</span>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Mail size={16}/></div>
                       <span className="text-sm font-black text-slate-700">E-mail</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 w-[65%] rounded-full"></div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400">65% dos associados</p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-green-50 text-green-600 rounded-lg"><Smartphone size={16}/></div>
                       <span className="text-sm font-black text-slate-700">WhatsApp</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[28%] rounded-full"></div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400">28% dos associados</p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Phone size={16}/></div>
                       <span className="text-sm font-black text-slate-700">Telefone</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 w-[7%] rounded-full"></div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400">7% dos associados</p>
                 </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-black text-xl text-slate-800">Últimas Newsletters</h3>
                <button className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">Novo Disparo</button>
              </div>
              <div className="divide-y divide-slate-50">
                {MOCK_CAMPAIGNS.map((c) => (
                  <div key={c.id} className="p-6 hover:bg-slate-50 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        c.status === 'Enviada' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 line-clamp-1">{c.subject}</h4>
                        <p className="text-xs text-slate-400 font-medium">{c.sentDate} • {c.status}</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-emerald-500 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-emerald-950 p-8 rounded-[2.5rem] text-white shadow-xl shadow-emerald-900/20">
               <h3 className="text-xl font-black mb-4 tracking-tight">Melhorar Feedback</h3>
               <p className="text-emerald-100/60 text-sm leading-relaxed mb-6">
                 Associados engajam 3x mais quando a pesquisa é enviada via WhatsApp em vez de e-mail.
               </p>
               <button className="w-full bg-emerald-500 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition-all">
                 Ativar Pesquisa Via WhatsApp
               </button>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="font-black text-slate-800 mb-6 flex items-center gap-2">
                <ClipboardList size={20} className="text-emerald-500" /> Pesquisas Ativas
              </h3>
              <div className="space-y-4">
                {MOCK_SURVEYS.map((s) => (
                  <div key={s.id} className="p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-emerald-100 transition-all">
                    <p className="font-black text-slate-800 text-sm mb-1">{s.title}</p>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-bold text-slate-400">{s.responses} respostas</span>
                       <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">NPS: 8.4</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'automations' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {[
             { name: 'Workflow Boas-vindas', trigger: 'Nova Admissão', icon: <Zap/>, color: 'text-blue-600', bg: 'bg-blue-50' },
             { name: 'Lembrete de Renovação', trigger: 'Vencimento Anuidade', icon: <BellRing/>, color: 'text-amber-600', bg: 'bg-amber-50' },
             { name: 'Follow-up de Certificação', trigger: 'Conclusão de Curso', icon: <Award/>, color: 'text-emerald-600', bg: 'bg-emerald-50' },
             { name: 'Pesquisa de Satisfação Post-Evento', trigger: 'Encerramento Evento', icon: <ClipboardList/>, color: 'text-purple-600', bg: 'bg-purple-50' },
           ].map((auto, i) => (
             <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-emerald-200 transition-all group">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl ${auto.bg} ${auto.color} group-hover:scale-110 transition-transform`}>
                         {/* Fix: Added explicit generic type to React.cloneElement to fix 'size' prop type error */}
                         {React.cloneElement(auto.icon as React.ReactElement<any>, { size: 28 })}
                      </div>
                      <div>
                         <h4 className="text-xl font-black text-slate-800 tracking-tight">{auto.name}</h4>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Gatilho: {auto.trigger}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Ativo</span>
                   </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-4">
                   <div className="flex gap-8">
                      <div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase">Enviados</p>
                         <p className="text-lg font-black text-slate-800">1.242</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase">Abertura</p>
                         <p className="text-lg font-black text-slate-800">54%</p>
                      </div>
                   </div>
                   <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-colors">
                      <Settings2 size={20} />
                   </button>
                </div>
             </div>
           ))}
        </div>
      )}

      {activeTab === 'popups' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                 <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="font-black text-xl text-slate-800">Mensagens em Pop-up</h3>
                    <button className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all">Criar Novo Pop-up</button>
                 </div>
                 <div className="p-8 space-y-6">
                    {[
                      { title: 'Aviso: Renovação Antecipada', type: 'Promocional', active: true, clicks: 142 },
                      { title: 'Webinar CVM - Link Direto', type: 'Informativo', active: false, clicks: 89 },
                    ].map((pop, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-transparent hover:border-emerald-100 transition-all">
                         <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-xl text-slate-400 shadow-sm">
                               <MousePointer2 size={24} />
                            </div>
                            <div>
                               <h4 className="font-black text-slate-800 text-lg">{pop.title}</h4>
                               <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{pop.type}</span>
                            </div>
                         </div>
                         <div className="flex items-center gap-8">
                            <div className="text-right">
                               <p className="text-[10px] font-bold text-slate-400 uppercase">Visualizações</p>
                               <p className="text-lg font-black text-slate-800">{pop.clicks}</p>
                            </div>
                            <div className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${pop.active ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                               <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${pop.active ? 'right-1' : 'left-1'}`}></div>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                 <h4 className="font-black text-slate-800 mb-4 tracking-tight">Dicas de Visibilidade</h4>
                 <p className="text-slate-500 text-sm leading-relaxed mb-6">
                   Pop-ups promocionais têm 40% mais cliques quando posicionados no canto inferior esquerdo.
                 </p>
                 <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <p className="text-xs font-black text-emerald-800 uppercase tracking-widest flex items-center gap-2">
                       <Zap size={14} /> Insight IA
                    </p>
                    <p className="text-[11px] text-emerald-700/70 mt-1">Sugerimos ativar um pop-up de "Certificado Disponível" para associados que concluíram o curso CPRI.</p>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default MarketingComm;
