
import React, { useState } from 'react';
import { 
  CalendarDays, 
  MapPin, 
  Video, 
  Users, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  ChevronRight,
  Clock,
  Ticket,
  Share2,
  Trash2,
  ArrowUpRight
} from 'lucide-react';
import { MOCK_EVENTS } from '../constants';

const Events: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('Todos');

  const filteredEvents = filterType === 'Todos' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(ev => ev.type === filterType);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Gestão de Eventos</h1>
          <p className="text-slate-500">Planejamento, inscrições e logística de encontros IBRI.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
            <Plus size={20} /> Criar Novo Evento
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <CalendarDays size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Eventos este Ano</p>
            <h3 className="text-2xl font-black text-slate-800">24</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inscritos Ativos</p>
            <h3 className="text-2xl font-black text-slate-800">1.240</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <Ticket size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Taxa de Presença</p>
            <h3 className="text-2xl font-black text-slate-800">78%</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0">
            {['Todos', 'Congresso', 'Webinar', 'Networking', 'Workshop'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                  filterType === type ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Pesquisar evento..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-slate-50">
          {filteredEvents.map((event) => (
            <div key={event.id} className="p-8 hover:bg-slate-50/80 transition-all flex flex-col lg:flex-row gap-8 group">
              <div className="w-full lg:w-72 h-48 rounded-3xl overflow-hidden shrink-0 shadow-lg shadow-slate-200">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] ${
                      event.type === 'Congresso' ? 'bg-purple-100 text-purple-700' :
                      event.type === 'Webinar' ? 'bg-blue-100 text-blue-700' :
                      event.type === 'Networking' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {event.type}
                    </span>
                    <div className="flex items-center gap-1.5">
                       <span className={`w-1.5 h-1.5 rounded-full ${event.status === 'Aberto' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></span>
                       <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{event.status}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-6 max-w-2xl leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
                    <div className="flex items-center gap-3 text-slate-600">
                       <CalendarDays size={18} className="text-emerald-500" />
                       <div>
                          <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">DATA</p>
                          <p className="text-sm font-bold">{new Date(event.date).toLocaleDateString('pt-BR')}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                       <Clock size={18} className="text-emerald-500" />
                       <div>
                          <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">HORÁRIO</p>
                          <p className="text-sm font-bold">{event.time}h</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                       {event.isOnline ? <Video size={18} className="text-blue-500" /> : <MapPin size={18} className="text-red-500" />}
                       <div className="max-w-[150px]">
                          <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">LOCALIZAÇÃO</p>
                          <p className="text-sm font-bold truncate">{event.location}</p>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                   <div className="flex items-center gap-6">
                      <div className="flex flex-col">
                         <span className="text-[9px] font-black text-slate-400 uppercase mb-1">Inscritos</span>
                         <div className="flex items-center gap-2">
                           <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-emerald-500 rounded-full" 
                                style={{ width: `${(event.registeredCount / event.capacity) * 100}%` }}
                              ></div>
                           </div>
                           <span className="text-xs font-black text-slate-700">{event.registeredCount}/{event.capacity}</span>
                         </div>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-3">
                      <button className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                        <Share2 size={18} />
                      </button>
                      <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-slate-50 transition-all flex items-center gap-2">
                         Gerenciar Lista <Users size={16} />
                      </button>
                      <button className="bg-emerald-950 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-emerald-900 transition-all flex items-center gap-2">
                         Detalhes <ArrowUpRight size={16} />
                      </button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
