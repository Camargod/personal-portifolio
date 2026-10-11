export interface Bi {
  pt: string;
  en: string;
}

export interface Person {
  name: string;
  initials: string;
  linkedin: string;
  email: string;
  location: Bi;
  headline: Bi;
}

export interface Role {
  title: Bi;
  period: Bi;
  location: Bi;
  summary: Bi;
  highlights: Bi[];
}

export interface Company {
  name: string;
  initials: string;
  accent: string;
  period: Bi;
  roles: Role[];
  stack: string[];
}

export interface SkillGroup {
  key: string;
  accent: string;
  items: string[];
}

export interface Project {
  id: string;
  tag: Bi;
  title: Bi;
  description: Bi;
  stack: string[];
  accent: string;
  link?: string;
}

export const PERSON: Person = {
  name: 'Gabriel Camargo',
  initials: 'GC',
  linkedin: 'https://www.linkedin.com/in/gabriel-camargo-21aa12174/',
  email: '',
  location: { pt: 'Santo André, SP — Brasil', en: 'Santo André, SP — Brazil' },
  headline: {
    pt: 'Arquiteto de Soluções Sênior | Java, Go, Angular, GCP | Cloud Architecture & DevOps | Microservices',
    en: 'Senior Solutions Architect | Java, Go, Angular, GCP | Cloud Architecture & DevOps | Microservices',
  },
};

export const HERO_STATS: { valueKey: string; labelKey: string }[] = [
  { valueKey: 'hero.statYearsValue', labelKey: 'hero.statYearsLabel' },
  { valueKey: 'hero.statMicroValue', labelKey: 'hero.statMicroLabel' },
  { valueKey: 'hero.statCloudValue', labelKey: 'hero.statCloudLabel' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    key: 'skills.languages',
    accent: 'from-violet-500 to-fuchsia-500',
    items: ['Java', 'Go', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    key: 'skills.frontend',
    accent: 'from-fuchsia-500 to-pink-500',
    items: ['Angular', 'RxJS', 'HTML5', 'CSS3', 'Tailwind CSS', 'Signals'],
  },
  {
    key: 'skills.cloud',
    accent: 'from-cyan-500 to-sky-500',
    items: ['Google Cloud (GCP)', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    key: 'skills.architecture',
    accent: 'from-emerald-500 to-teal-500',
    items: ['Microsserviços', 'Event-Driven', 'REST', 'gRPC', 'GraphQL', 'DDD'],
  },
  {
    key: 'skills.devops',
    accent: 'from-amber-500 to-orange-500',
    items: ['CI/CD', 'Jenkins', 'Tekton', 'Dynatrace', 'Grafana', 'Git'],
  },
];

export const COMPANIES: Company[] = [
  {
    name: 'Logistics Reply BR',
    initials: 'LR',
    accent: 'from-cyan-400 to-sky-600',
    period: { pt: 'jan 2026 — Presente', en: 'Jan 2026 — Present' },
    roles: [
      {
        title: { pt: 'Arquiteto de Soluções Sênior', en: 'Senior Solutions Architect' },
        period: { pt: 'jan 2026 — Presente', en: 'Jan 2026 — Present' },
        location: { pt: 'Santo André, SP · Remoto', en: 'Santo André, SP · Remote' },
        summary: {
          pt: 'Arquitetura de soluções em colaboração com o cliente Georgia-Pacific (GP), automatizando operações de Veículos Autônomos (AGV) em armazéns.',
          en: 'Solution architecture in collaboration with client Georgia-Pacific (GP), automating Autonomous Vehicle (AGV) warehouse operations.',
        },
        highlights: [
          {
            pt: 'Desenho de arquitetura para automação de AGVs em operações de armazém',
            en: 'Architecture design for AGV automation in warehouse operations',
          },
          {
            pt: 'Integração entre sistemas de warehouse e plataformas cloud',
            en: 'Integration between warehouse systems and cloud platforms',
          },
        ],
      },
    ],
    stack: ['Go', 'Java', 'GCP', 'Kubernetes', 'Microsserviços'],
  },
  {
    name: 'Ford Motor Company',
    initials: 'Ford',
    accent: 'from-blue-400 to-indigo-600',
    period: { pt: '2021 — 2025', en: '2021 — 2025' },
    roles: [
      {
        title: {
          pt: 'Software Development Analyst Senior / Tech Lead',
          en: 'Software Development Analyst Senior / Tech Lead',
        },
        period: { pt: '2025 — 2025', en: '2025 — 2025' },
        location: { pt: 'São Paulo, SP · Híbrido', en: 'São Paulo, SP · Hybrid' },
        summary: {
          pt: 'Liderança técnica do WMS (Warehouse Management System), um ecossistema global de 11 microsserviços, definindo a arquitetura para garantir escalabilidade e alta disponibilidade.',
          en: 'Technical lead of the WMS (Warehouse Management System), a global ecosystem of 11 microservices, defining the architecture to ensure scalability and high availability.',
        },
        highlights: [
          {
            pt: 'Arquitetura de um ecossistema global de 11 microsserviços',
            en: 'Architecture of a global ecosystem of 11 microservices',
          },
          {
            pt: 'Liderança técnica de squad e definição de padrões de engenharia',
            en: 'Squad technical leadership and engineering standards definition',
          },
        ],
      },
      {
        title: { pt: 'Analista de Desenvolvimento Sênior', en: 'Senior Development Analyst' },
        period: { pt: 'out 2021 — jan 2025', en: 'Oct 2021 — Jan 2025' },
        location: { pt: 'Brasil · Contrato Indireto', en: 'Brazil · Indirect Contract' },
        summary: {
          pt: 'Desenvolvimento backend, gestão de qualidade e automação de builds e pipelines de entrega.',
          en: 'Backend development, quality management and build/delivery pipeline automation.',
        },
        highlights: [
          { pt: 'Tech lead e gestão de qualidade (Jenkins, Tekton)', en: 'Tech lead and quality management (Jenkins, Tekton)' },
          { pt: 'Automação de CI/CD e observabilidade com Dynatrace', en: 'CI/CD automation and observability with Dynatrace' },
        ],
      },
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Dynatrace', 'CI/CD'],
  },
  {
    name: 'Valemobi',
    initials: 'VM',
    accent: 'from-violet-400 to-purple-600',
    period: { pt: '2020 — 2021', en: '2020 — 2021' },
    roles: [
      {
        title: { pt: 'Analista Desenvolvedor', en: 'Developer Analyst' },
        period: { pt: 'jan 2021 — mai 2021', en: 'Jan 2021 — May 2021' },
        location: { pt: 'São Paulo, SP', en: 'São Paulo, SP' },
        summary: {
          pt: 'Desenvolvimento de telas com grande volume de dados e gráficos e scraper de dados da B3.',
          en: 'Development of screens with a large volume of data and charts, plus a B3 data scraper.',
        },
        highlights: [
          { pt: 'Data scraper de dados de mercado da B3', en: 'B3 market data scraper' },
          { pt: 'Telas com alto volume de dados e gráficos', en: 'Screens with high-volume data and charts' },
        ],
      },
      {
        title: { pt: 'Estagiário de TI', en: 'IT Intern' },
        period: { pt: 'jun 2020 — jan 2021', en: 'Jun 2020 — Jan 2021' },
        location: { pt: 'São Paulo, SP', en: 'São Paulo, SP' },
        summary: {
          pt: 'Apoio ao desenvolvimento de features e manutenção de aplicações internas.',
          en: 'Support in feature development and maintenance of internal applications.',
        },
        highlights: [
          { pt: 'Desenvolvimento de features em Java e JavaScript', en: 'Feature development in Java and JavaScript' },
        ],
      },
    ],
    stack: ['Java', 'JavaScript', 'Data Scraping', 'Charts'],
  },
  {
    name: 'Atirador',
    initials: 'AT',
    accent: 'from-amber-400 to-orange-600',
    period: { pt: '2020', en: '2020' },
    roles: [
      {
        title: { pt: 'Estagiário', en: 'Intern' },
        period: { pt: 'mar 2020 — dez 2020', en: 'Mar 2020 — Dec 2020' },
        location: { pt: 'Santo André, SP', en: 'Santo André, SP' },
        summary: {
          pt: 'Atuação em projetos de tecnologia e apoio à operação.',
          en: 'Worked on technology projects and operational support.',
        },
        highlights: [
          { pt: 'Suporte a projetos internos de tecnologia', en: 'Support on internal technology projects' },
        ],
      },
    ],
    stack: ['JavaScript', 'Node.js'],
  },
  {
    name: 'Integração de APIs & Cloud',
    initials: 'API',
    accent: 'from-emerald-400 to-teal-600',
    period: { pt: '2019', en: '2019' },
    roles: [
      {
        title: { pt: 'Estagiário — Plataforma Cloud', en: 'Intern — Cloud Platform' },
        period: { pt: 'jun 2019 — dez 2019', en: 'Jun 2019 — Dec 2019' },
        location: { pt: 'São Caetano do Sul, SP', en: 'São Caetano do Sul, SP' },
        summary: {
          pt: 'Plataforma baseada em cloud para integrar APIs, Sistemas e Dados.',
          en: 'Cloud-based platform to integrate APIs, Systems and Data.',
        },
        highlights: [
          { pt: 'Integração de APIs e fontes de dados', en: 'API and data source integration' },
        ],
      },
    ],
    stack: ['JavaScript', 'CSS', 'APIs', 'Cloud'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'wms',
    tag: { pt: 'Plataforma', en: 'Platform' },
    title: { pt: 'WMS Global — 11 microsserviços', en: 'Global WMS — 11 microservices' },
    description: {
      pt: 'Sistema de Gestão de Armazém (WMS) de escala global desenhado como um ecossistema de 11 microsserviços, com foco em escalabilidade e alta disponibilidade para operações logísticas.',
      en: 'A globally scaled Warehouse Management System (WMS) designed as an ecosystem of 11 microservices, focused on scalability and high availability for logistics operations.',
    },
    stack: ['Java', 'Spring Boot', 'AWS', 'Microsserviços', 'Dynatrace'],
    accent: 'from-blue-500 via-indigo-500 to-violet-500',
  },
  {
    id: 'agv',
    tag: { pt: 'Arquitetura', en: 'Architecture' },
    title: { pt: 'Automação de AGVs em armazém', en: 'AGV automation in warehouses' },
    description: {
      pt: 'Arquitetura de soluções para automatizar Veículos Autônomos Guiados (AGVs) em operações de armazém, integrando sistemas de chão de fábrica a plataformas cloud.',
      en: 'Solution architecture to automate Automated Guided Vehicles (AGVs) in warehouse operations, integrating shop-floor systems with cloud platforms.',
    },
    stack: ['Go', 'GCP', 'Kubernetes', 'Integração de Sistemas'],
    accent: 'from-cyan-500 via-sky-500 to-emerald-500',
  },
  {
    id: 'ai-platform',
    tag: { pt: 'Artigo', en: 'Article' },
    title: { pt: 'AI in Platform Engineering', en: 'AI in Platform Engineering' },
    description: {
      pt: 'Artigo sobre como a Inteligência Artificial está moldando a engenharia de plataforma — uma visão sobre automação, produtividade e o futuro das equipes de plataforma.',
      en: 'An article on how Artificial Intelligence is shaping platform engineering — a view on automation, productivity and the future of platform teams.',
    },
    stack: ['AI', 'Platform Engineering', 'DevOps'],
    accent: 'from-fuchsia-500 via-pink-500 to-rose-500',
    link: 'https://www.linkedin.com/pulse/ai-platform-engineering-glimpse-our-progress-gabriel-camargo-q6eaf/',
  },
];
