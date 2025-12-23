
import React, { useState, useEffect } from 'react';
import { MOCK_NEWS } from '../constants';
import { 
  BookOpen, 
  Newspaper, 
  Award, 
  HelpCircle, 
  Mail, 
  Download, 
  MessageCircle, 
  X, 
  BellRing,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  FileBadge
} from 'lucide-react';

const MemberPortal: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [commPref, setCommPref] = useState<'Email' | 'WhatsApp' | 'Telefone'>('Email');

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in slide-in-from-bottom duration-700 pb-20 relative">
      
      {/* Smart Pop-up Notification */}
      {showPopup && (
        <div className="fixed bottom-32 left-8 z-[100] animate-in slide-in-from-left duration-500">
           <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-emerald-100 w-80 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-slate-300 hover:text-slate-600 transition-colors"
              >
                 <X size={18} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                    <BellRing size={20} className="animate-bounce" />
                 </div>
                 <h4 className="font-black text-slate-800 text-xs uppercase tracking-widest">Novidade IBRI</h4>
              </div>
              <p className="text-sm font-bold text-slate-700 leading-tight mb-4">
                Sua certificação CPRI Nível 1 está disponível para download!
              </p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-700 transition-all">
                Acessar Certificado
              </button>
           </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-[100] group flex items-center gap-4"
      >
        <div className="bg-white px-6 py-3 rounded-2xl shadow-xl border border-green-50 text-green-700 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
          Fale conosco
        </div>
        <div className="w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-green-600 transition-all hover:scale-110 active:scale-95 border-4 border-white">
          <MessageCircle size={32} />
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative h-[500px] rounded-[3rem] overflow-hidden bg-emerald-950 flex items-center px-12 text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent"></div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest">Portal IBRI Nexus</span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
          </div>
          <h1 className="text-7xl font-black mb-6 leading-none tracking-tighter">Conectando o Futuro do RI</h1>
          <p className="text-xl text-emerald-100/70 mb-10 font-medium leading-relaxed max-w-lg">
            Plataforma exclusiva para associados IBRI: Educação Continuada, Networking de Elite e Governança Verificada.
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20">
              Associe-se Agora
            </button>
            <button className="bg-emerald-800/40 backdrop-blur-md border border-emerald-700/50 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-800/60 transition-all">
              Catálogo de Cursos
            </button>
          </div>
        </div>
      </section>

      {/* Meus Certificados & Preferências */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 text-emerald-50 opacity-10 group-hover:opacity-20 transition-opacity">
               <Award size={180} />
            </div>
            <div className="relative z-10">
               <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Meus Certificados</h3>
               <p className="text-slate-500 mb-10 text-lg">Suas conquistas acadêmicas validadas pelo IBRI.</p>
               <div className="space-y-4">
                  {[
                    { title: 'Certificação CPRI - Nível 1', date: 'Março 2024', status: 'Emitido' },
                    { title: 'Workshop ESG para RI', date: 'Janeiro 2024', status: 'Emitido' },
                    { title: 'Análise de Balanços 2024', date: 'Pendente', status: 'Aguardando' }
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-emerald-100 transition-all">
                       <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${cert.status === 'Emitido' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-400'}`}>
                             <FileBadge size={24} />
                          </div>
                          <div>
                             <p className="font-black text-slate-800">{cert.title}</p>
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cert.date}</p>
                          </div>
                       </div>
                       {cert.status === 'Emitido' ? (
                         <button className="bg-white p-3 rounded-xl shadow-sm text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all">
                            <Download size={20} />
                         </button>
                       ) : (
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">{cert.status}</span>
                       )}
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full -mr-16 -mt-16 opacity-20"></div>
            <div>
               <h3 className="text-2xl font-black mb-6 tracking-tight flex items-center gap-3">
                  <Smartphone className="text-emerald-500" /> Preferências
               </h3>
               <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Desejamos que nossa comunicação seja assertiva. Como você prefere receber nossas atualizações?
               </p>
               <div className="space-y-3">
                  {['Email', 'WhatsApp', 'Telefone'].map((pref) => (
                    <button 
                      key={pref}
                      onClick={() => setCommPref(pref as any)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
                        commPref === pref ? 'bg-emerald-600 border-emerald-500 shadow-xl shadow-emerald-600/20' : 'bg-slate-800 border-slate-700 hover:bg-slate-800/80'
                      }`}
                    >
                       <span className="text-sm font-black uppercase tracking-widest">{pref}</span>
                       {commPref === pref && <CheckCircle2 size={18} />}
                    </button>
                  ))}
               </div>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-8 text-center">Configurações salvas automaticamente</p>
         </div>
      </section>

      {/* News Feed */}
      <section>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Insights do IBRI</h2>
            <p className="text-slate-500 text-xl font-medium mt-2">O pulsar do mercado de RI em tempo real.</p>
          </div>
          <button className="group flex items-center gap-3 text-emerald-600 font-black text-sm uppercase tracking-widest hover:gap-5 transition-all">
            Ver clipping completo <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {MOCK_NEWS.map((news) => (
            <div key={news.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={news.imageUrl} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={news.title} 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-2xl shadow-xl">
                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">{news.category}</span>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">{news.date}</span>
                <h3 className="font-black text-2xl text-slate-800 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                  {news.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-10 leading-relaxed font-medium">
                  {news.summary}
                </p>
                <div className="mt-auto">
                   <button className="text-emerald-950 font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                     Ler Conteúdo <span className="text-emerald-500 text-2xl leading-none">→</span>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Feedback Footer */}
      <footer className="bg-emerald-50 rounded-[4rem] p-20 text-center border border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 rounded-full -ml-32 -mt-32 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full -mr-48 -mb-48 opacity-10"></div>
        
        <div className="relative z-10">
           <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-emerald-500/30">
             <HelpCircle size={40} />
           </div>
           <h2 className="text-5xl font-black text-emerald-950 mb-6 tracking-tighter">Sua opinião constrói o IBRI</h2>
           <p className="text-emerald-700/60 mb-12 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
             Queremos ouvir você. Como podemos melhorar sua experiência profissional na plataforma Nexus?
           </p>
           <div className="flex max-w-lg mx-auto gap-4">
             <input 
               type="text" 
               placeholder="Sua sugestão ou feedback..." 
               className="flex-1 px-8 py-5 rounded-2xl border-none outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all shadow-inner bg-white text-emerald-950 font-medium"
             />
             <button className="bg-emerald-950 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-950/20">
               Enviar
             </button>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default MemberPortal;
