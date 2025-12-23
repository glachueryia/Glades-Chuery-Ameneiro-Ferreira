
import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  Plus, 
  Search, 
  MoreVertical, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  Lock,
  FileLock,
  Download,
  ShieldAlert,
  Eye,
  FileCode
} from 'lucide-react';
import { MOCK_COMMISSIONS, MOCK_RESTRICTED_MATERIALS } from '../constants';

const Commissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'groups' | 'restricted'>('groups');

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileLock className="text-red-500" />;
      case 'XLS': return <FileCode className="text-emerald-600" />;
      case 'VIDEO': return <Eye className="text-blue-500" />;
      default: return <FileText className="text-slate-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Comitês & Grupos Técnicos</h1>
          <p className="text-slate-500">Governança institucional e repositório confidencial.</p>
        </div>
        <div className="flex gap-3">
           <div className="bg-slate-100 p-1.5 rounded-xl flex gap-1">
             <button 
               onClick={() => setActiveTab('groups')}
               className={`px-6 py-2 rounded-lg text-sm font-black transition-all ${activeTab === 'groups' ? 'bg-white text-emerald-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               Grupos Ativos
             </button>
             <button 
               onClick={() => setActiveTab('restricted')}
               className={`px-6 py-2 rounded-lg text-sm font-black transition-all flex items-center gap-2 ${activeTab === 'restricted' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
               <Lock size={14} /> Materiais Restritos
             </button>
           </div>
        </div>
      </div>

      {activeTab === 'groups' ? (
        <>
          {/* Governance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Grupos Ativos</p>
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-black text-slate-800">14</h3>
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Layers size={20} />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Total de Membros</p>
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-black text-slate-800">84</h3>
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <Users size={20} />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Reuniões (Mês)</p>
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-black text-slate-800">22</h3>
                <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <Calendar size={20} />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Pareceres Emitidos</p>
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-black text-slate-800">08</h3>
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                  <FileText size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Pesquisar por nome ou coordenador..." 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 outline-none"
                />
              </div>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all">
                <Plus size={20} /> Novo Grupo
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 divide-x divide-y divide-slate-50">
              {MOCK_COMMISSIONS.map((group) => (
                <div key={group.id} className="p-8 hover:bg-slate-50 transition-all group relative">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${
                        group.type === 'Comitê' ? 'bg-blue-50 text-blue-600' : 
                        group.type === 'Comissão' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {group.type === 'Comitê' ? <ShieldCheck size={24} /> : 
                         group.type === 'Comissão' ? <Layers size={24} /> : <Users size={24} />}
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{group.type}</span>
                        <h4 className="font-black text-xl text-slate-800 tracking-tight group-hover:text-emerald-700 transition-colors">
                          {group.name}
                        </h4>
                      </div>
                    </div>
                    <button className="text-slate-300 hover:text-slate-600">
                      <MoreVertical size={20} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Coordenador</p>
                      <p className="text-sm font-black text-slate-700">{group.coordinator}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Membros</p>
                      <p className="text-sm font-black text-slate-700">{group.memberCount} Profissionais</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <Clock size={14} />
                        <span>Última reunião: {group.lastMeeting}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 font-black text-emerald-600 group-hover:gap-2 transition-all">
                      Ver Detalhes <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-100 p-8 rounded-3xl flex items-center gap-6">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/10">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black text-red-900 mb-1">Zona de Acesso Restrito</h3>
              <p className="text-red-700/70 text-sm max-w-2xl leading-relaxed">
                Estes documentos são confidenciais e destinados exclusivamente aos membros dos comitês correspondentes. 
                Cada download é registrado com marca d'água digital e IP do solicitante para garantir a governança IBRI.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <h3 className="font-black text-xl text-slate-800">Repositório de Documentos</h3>
                   <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                     {MOCK_RESTRICTED_MATERIALS.length} Arquivos
                   </span>
                </div>
                <div className="relative w-64">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                   <input 
                     type="text" 
                     placeholder="Filtrar por nome..." 
                     className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-500/20"
                   />
                </div>
             </div>

             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <tr>
                         <th className="px-8 py-5">Documento</th>
                         <th className="px-8 py-5">Grupo Relacionado</th>
                         <th className="px-8 py-5">Nível de Acesso</th>
                         <th className="px-8 py-5">Data / Tamanho</th>
                         <th className="px-8 py-5 text-right">Ações</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50">
                      {MOCK_RESTRICTED_MATERIALS.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                                    {getFileIcon(item.type)}
                                 </div>
                                 <div>
                                    <h4 className="font-bold text-slate-800 text-sm group-hover:text-emerald-700 transition-colors">
                                       {item.title}
                                    </h4>
                                    <span className="text-[10px] font-black text-slate-400 uppercase">{item.type}</span>
                                 </div>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <span className="text-xs font-medium text-slate-600">{item.groupName}</span>
                           </td>
                           <td className="px-8 py-6">
                              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${
                                item.accessLevel === 'Administrador' ? 'bg-purple-50 text-purple-700' :
                                item.accessLevel === 'Coordenador' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                              }`}>
                                 <Lock size={10} />
                                 <span className="text-[10px] font-black uppercase tracking-widest">{item.accessLevel}</span>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <div className="text-xs font-bold text-slate-700">{item.dateUploaded}</div>
                              <div className="text-[10px] text-slate-400">{item.fileSize}</div>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <div className="flex items-center justify-end gap-2">
                                 <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors hover:bg-emerald-50 rounded-lg">
                                    <Eye size={18} />
                                 </button>
                                 <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors hover:bg-emerald-50 rounded-lg">
                                    <Download size={18} />
                                 </button>
                              </div>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commissions;
