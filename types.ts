
export enum AppView {
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD',
  MEMBER_LIST = 'MEMBER_LIST',
  FINANCE = 'FINANCE',
  CRM = 'CRM',
  MEMBER_PORTAL = 'MEMBER_PORTAL',
  COURSES = 'COURSES',
  MARKETING_COMM = 'MARKETING_COMM',
  COMMISSIONS = 'COMMISSIONS',
  GOVERNANCE = 'GOVERNANCE',
  EVENTS = 'EVENTS'
}

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: 'Site' | 'Evento' | 'Indicação' | 'LinkedIn';
  stage: 'Novo' | 'Qualificado' | 'Proposta' | 'Negociação';
  score: number; 
  lastContact: string;
  expectedValue: number;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  status: 'Ativo' | 'Pendente' | 'Inativo';
  category: 'Efetivo' | 'Pleno' | 'Empresa' | 'Patrocinador' | 'Estudante';
  personType: 'PF' | 'PJ';
  document: string; 
  position: string; 
  joinDate: string;
  avatar: string;
  company?: string;
  communicationPreference?: 'Email' | 'WhatsApp' | 'Telefone';
  isAnnuityExempt?: boolean;
  tradingName?: string;
  contactPerson?: string;
}

export interface Invoice {
  id: string;
  orderNumber: string;
  customerName: string;
  courseName: string;
  amount: number;
  date: string;
  status: 'Emitida' | 'Processando' | 'Falha' | 'Pendente';
  type: 'NF-e' | 'Recibo';
  protocol?: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'Certificação' | 'Workshop' | 'Especialização';
  price: number;
  enrolled: number;
  capacity: number;
  startDate: string;
  status: 'Aberto' | 'Em Andamento' | 'Concluído';
}

export interface GovernanceMember {
  id: string;
  name: string;
  role: string;
  council: 'Administração' | 'Fiscal';
  termStart: string;
  termEnd: string;
  status: 'Titular' | 'Suplente' | 'Presidente';
  avatar: string;
  company: string;
}

export interface Assembly {
  id: string;
  title: string;
  type: 'AGO' | 'AGE';
  date: string;
  status: 'Convocada' | 'Em Andamento' | 'Encerrada' | 'Cancelada';
  quorum: number;
  attendeesCount: number;
  agendaItems: { id: string, description: string, votesFor?: number, votesAgainst?: number, abstentions?: number }[];
  documents: { title: string, url: string }[];
}

// Added interfaces for missing mock data
export interface News {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl: string;
}

export interface Survey {
  id: string;
  title: string;
  responses: number;
}

export interface Campaign {
  id: string;
  subject: string;
  sentDate: string;
  status: 'Enviada' | 'Programada' | 'Rascunho';
}

export interface Commission {
  id: string;
  name: string;
  type: 'Comitê' | 'Comissão' | 'Grupo';
  coordinator: string;
  memberCount: number;
  lastMeeting: string;
}

export interface RestrictedMaterial {
  id: string;
  title: string;
  type: 'PDF' | 'XLS' | 'VIDEO' | 'DOC';
  groupName: string;
  accessLevel: 'Administrador' | 'Coordenador' | 'Associado';
  dateUploaded: string;
  fileSize: string;
}

export interface Enrollment {
  id: string;
  studentName: string;
  courseTitle: string;
  amountPaid: number;
  memberCategory: string;
  paymentMethod: 'PIX' | 'Cartão' | 'Boleto' | 'Depósito';
  paymentStatus: 'Pago' | 'Pendente' | 'Falha';
}

export interface Event {
  id: string;
  title: string;
  type: 'Congresso' | 'Webinar' | 'Networking' | 'Workshop';
  description: string;
  date: string;
  time: string;
  isOnline: boolean;
  location: string;
  registeredCount: number;
  capacity: number;
  status: 'Aberto' | 'Encerrado' | 'Cancelado';
  imageUrl: string;
}
