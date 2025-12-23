
import { Member, Invoice, Course, GovernanceMember, Lead, Assembly, News, Survey, Campaign, Commission, RestrictedMaterial, Enrollment, Event } from './types';

export const MOCK_LEADS: Lead[] = [
  { id: 'ld1', name: 'Ana Beatriz Ramos', company: 'Global Tech S.A', email: 'ana.ramos@globaltech.com', phone: '(11) 98877-6655', source: 'LinkedIn', stage: 'Qualificado', score: 85, lastContact: '2024-03-25', expectedValue: 2400 },
  { id: 'ld2', name: 'Felipe Matos', company: 'Banco Horizonte', email: 'felipe@bancohorizonte.br', phone: '(11) 97766-5544', source: 'Evento', stage: 'Negociação', score: 92, lastContact: '2024-03-28', expectedValue: 5000 },
  { id: 'ld3', name: 'Juliana Paes', company: 'Logística Total', email: 'jpaes@logtotal.com', phone: '(21) 96655-4433', source: 'Site', stage: 'Novo', score: 45, lastContact: '2024-03-20', expectedValue: 1200 },
  { id: 'ld4', name: 'Roberto Carlos', company: 'Energia Verde', email: 'rcarlos@everde.com.br', phone: '(11) 95544-3322', source: 'Indicação', stage: 'Proposta', score: 78, lastContact: '2024-03-27', expectedValue: 3500 },
];

export const MOCK_MEMBERS: Member[] = [
  { id: '1', name: 'Dr. Ricardo Almeida', email: 'ricardo@investor.com', status: 'Ativo', category: 'Pleno', personType: 'PF', document: '123.456.789-00', position: 'Diretor de RI', joinDate: '2023-10-12', avatar: 'https://i.pravatar.cc/150?u=ricardo', company: 'Investment Group' },
  { id: '2', name: 'Maria Mendes', email: 'maria@consult.com', status: 'Ativo', category: 'Efetivo', personType: 'PF', document: '987.654.321-11', position: 'Analista Sênior', joinDate: '2024-01-05', avatar: 'https://i.pravatar.cc/150?u=maria', company: 'Consultoria Valor' },
  { id: '3', name: 'Tech Solutions PJ', email: 'adm@techsolutions.com', status: 'Ativo', category: 'Empresa', personType: 'PJ', document: '44.555.666/0001-22', position: 'Sócio-Fundador', joinDate: '2023-05-20', avatar: 'https://i.pravatar.cc/150?u=tech', tradingName: 'Tech Solutions RI', contactPerson: 'Gustavo Lima' },
];

export const MOCK_INVOICES: Invoice[] = [
  { id: 'NF-1001', orderNumber: 'ORD-101', customerName: 'Ricardo Almeida', courseName: 'Certificação CPRI', amount: 2450.00, date: '2024-03-20', status: 'Emitida', type: 'NF-e', protocol: '312204991203001' },
  { id: 'NF-1002', orderNumber: 'ORD-102', customerName: 'Maria Mendes', courseName: 'ESG para RI', amount: 890.00, date: '2024-03-21', status: 'Emitida', type: 'NF-e', protocol: '312204991203002' },
  { id: 'NF-1003', orderNumber: 'ORD-103', customerName: 'Gustavo Lima', courseName: 'Anuário RI 2024', amount: 1500.00, date: '2024-03-25', status: 'Pendente', type: 'Recibo' },
];

export const MOCK_COURSES: Course[] = [
  { id: 'crs1', title: 'Certificação CPRI - Nível 1', category: 'Certificação', price: 2450.00, enrolled: 45, capacity: 60, startDate: '2024-04-15', status: 'Aberto' },
  { id: 'crs2', title: 'ESG e a Nova Regra CVM 193', category: 'Workshop', price: 450.00, enrolled: 120, capacity: 200, startDate: '2024-05-10', status: 'Aberto' },
];

export const MOCK_GOVERNANCE_MEMBERS: GovernanceMember[] = [
  { id: 'gov1', name: 'Dr. Paulo Roberto', role: 'Presidente do Conselho', council: 'Administração', termStart: '2023-01-01', termEnd: '2025-01-01', status: 'Presidente', avatar: 'https://i.pravatar.cc/150?u=paulo', company: 'Holding Invest S.A' },
  { id: 'gov2', name: 'Dra. Helena Vasconcellos', role: 'Conselheira Independente', council: 'Administração', termStart: '2023-01-01', termEnd: '2025-01-01', status: 'Titular', avatar: 'https://i.pravatar.cc/150?u=helena', company: 'Blue Chip Consultoria' },
];

export const MOCK_ASSEMBLIES: Assembly[] = [
  {
    id: 'as1',
    title: 'AGO 2024 - Prestação de Contas Exercício 2023',
    type: 'AGO',
    date: '2024-04-30',
    status: 'Convocada',
    quorum: 0,
    attendeesCount: 0,
    agendaItems: [
      { id: 'i1', description: 'Aprovação das contas do exercício findo em 31/12/2023' },
      { id: 'i2', description: 'Eleição dos membros do Conselho Fiscal para biênio 2024-2026' }
    ],
    documents: [{ title: 'Edital de Convocação', url: '#' }, { title: 'Balanço Patrimonial', url: '#' }]
  }
];

// Added missing mock data exports used by components
export const MOCK_NEWS: News[] = [
  { id: '1', title: 'Novas Normas da CVM para RI em 2024', summary: 'O IBRI discute o impacto das recentes resoluções da CVM na rotina das empresas listadas.', category: 'Regulamentação', date: '25 Mar, 2024', imageUrl: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&w=800&q=80' },
  { id: '2', title: 'O Papel do RI na Estratégia ESG', summary: 'Como os profissionais de Relações com Investidores podem liderar a jornada ESG nas corporações.', category: 'Estratégia', date: '22 Mar, 2024', imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80' },
  { id: '3', title: 'Tendências de RI para o Mercado de Capitais', summary: 'Relatório aponta o crescimento do uso de IA e ferramentas digitais no engajamento de investidores.', category: 'Tendências', date: '18 Mar, 2024', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
];

export const MOCK_SURVEYS: Survey[] = [
  { id: 's1', title: 'Satisfação Associado 2024 Q1', responses: 420 },
  { id: 's2', title: 'Impacto da Resolução CVM 193', responses: 156 },
  { id: 's3', title: 'Interesse em Novos Cursos', responses: 89 },
];

export const MOCK_CAMPAIGNS: Campaign[] = [
  { id: 'c1', subject: 'Convite: Webinar ESG e Transparência', sentDate: '24/03/2024', status: 'Enviada' },
  { id: 'c2', subject: 'Informativo Semanal IBRI - Edição Março', sentDate: '20/03/2024', status: 'Enviada' },
  { id: 'c3', subject: 'Aviso de Renovação de Anuidade', sentDate: '15/03/2024', status: 'Enviada' },
];

export const MOCK_COMMISSIONS: Commission[] = [
  { id: 'cm1', name: 'Comitê de Ética e Conduta', type: 'Comitê', coordinator: 'Beatriz Vasconcelos', memberCount: 12, lastMeeting: '22/03/2024' },
  { id: 'cm2', name: 'Comissão Técnica de RI', type: 'Comissão', coordinator: 'Marcos Silva', memberCount: 18, lastMeeting: '15/03/2024' },
  { id: 'cm3', name: 'Grupo de Trabalho ESG', type: 'Grupo', coordinator: 'Luciana Mello', memberCount: 25, lastMeeting: '20/03/2024' },
];

export const MOCK_RESTRICTED_MATERIALS: RestrictedMaterial[] = [
  { id: 'rm1', title: 'Ata de Reunião - Diretoria Executiva', type: 'PDF', groupName: 'Diretoria', accessLevel: 'Administrador', dateUploaded: '24/03/2024', fileSize: '2.4 MB' },
  { id: 'rm2', title: 'Planilha de Planejamento Orçamentário', type: 'XLS', groupName: 'Financeiro', accessLevel: 'Coordenador', dateUploaded: '20/03/2024', fileSize: '4.8 MB' },
  { id: 'rm3', title: 'Vídeo: Treinamento Interno Compliance', type: 'VIDEO', groupName: 'Compliance', accessLevel: 'Associado', dateUploaded: '15/03/2024', fileSize: '124 MB' },
];

export const MOCK_ENROLLMENTS: Enrollment[] = [
  { id: 'enr1', studentName: 'Ricardo Almeida', courseTitle: 'Certificação CPRI - Nível 1', amountPaid: 2450, memberCategory: 'Pleno', paymentMethod: 'PIX', paymentStatus: 'Pago' },
  { id: 'enr2', studentName: 'Maria Mendes', courseTitle: 'ESG e a Nova Regra CVM 193', amountPaid: 450, memberCategory: 'Efetivo', paymentMethod: 'Cartão', paymentStatus: 'Pago' },
  { id: 'enr3', studentName: 'Gustavo Lima', courseTitle: 'Workshop de RI Estratégico', amountPaid: 890, memberCategory: 'Empresa', paymentMethod: 'Boleto', paymentStatus: 'Pendente' },
];

export const MOCK_EVENTS: Event[] = [
  { id: 'ev1', title: '34º Congresso IBRI', type: 'Congresso', description: 'O maior evento de Relações com Investidores da América Latina chega em sua 34ª edição.', date: '2024-06-15', time: '09:00', isOnline: false, location: 'WTC Events Center, SP', registeredCount: 450, capacity: 600, status: 'Aberto', imageUrl: 'https://images.unsplash.com/photo-1540575861501-7ad05823c23d?auto=format&fit=crop&w=1200&q=80' },
  { id: 'ev2', title: 'Webinar: Resultados do Setor de Varejo', type: 'Webinar', description: 'Análise profunda dos balanços do primeiro trimestre das principais varejistas.', date: '2024-04-10', time: '16:00', isOnline: true, location: 'Plataforma Zoom', registeredCount: 120, capacity: 300, status: 'Aberto', imageUrl: 'https://images.unsplash.com/photo-1591115765373-520b7a2172a7?auto=format&fit=crop&w=1200&q=80' },
];
