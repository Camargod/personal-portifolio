import type { Lang } from './i18n.service';

type Entry = Record<Lang, string>;

export const TRANSLATIONS: Record<string, Entry> = {
  'nav.about': { pt: 'Sobre', en: 'About' },
  'nav.skills': { pt: 'Skills', en: 'Skills' },
  'nav.experience': { pt: 'Experiência', en: 'Experience' },
  'nav.projects': { pt: 'Projetos', en: 'Projects' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },
  'nav.cta': { pt: 'Vamos conversar', en: "Let's talk" },

  'hero.greeting': { pt: 'Olá, eu sou', en: "Hi, I'm" },
  'hero.role': { pt: 'Arquiteto de Soluções', en: 'Solutions Architect' },
  'hero.tagline': {
    pt: 'Arquiteto de Soluções Sênior focado em Java, Go, Angular e Google Cloud. Transformo problemas complexos em soluções simples, escaláveis e eficientes.',
    en: 'Senior Solutions Architect focused on Java, Go, Angular and Google Cloud. I turn complex problems into simple, scalable and efficient solutions.',
  },
  'hero.available': { pt: 'Disponível para conversar', en: 'Open to chat' },
  'hero.location': { pt: 'Santo André, SP — Brasil', en: 'Santo André, SP — Brazil' },
  'hero.viewExperience': { pt: 'Ver experiência', en: 'View experience' },
  'hero.getInTouch': { pt: 'Entrar em contato', en: 'Get in touch' },
  'hero.scroll': { pt: 'Role para explorar', en: 'Scroll to explore' },
  'hero.statYearsValue': { pt: '6+', en: '6+' },
  'hero.statYearsLabel': { pt: 'anos de experiência', en: 'years of experience' },
  'hero.statMicroValue': { pt: '11', en: '11' },
  'hero.statMicroLabel': { pt: 'microsserviços no WMS', en: 'microservices in the WMS' },
  'hero.statCloudValue': { pt: 'GCP + AWS', en: 'GCP + AWS' },
  'hero.statCloudLabel': { pt: 'cloud & DevOps', en: 'cloud & DevOps' },

  'about.title': { pt: 'Sobre mim', en: 'About me' },
  'about.kicker': { pt: 'Quem está por trás do código', en: 'The person behind the code' },
  'about.p1': {
    pt: 'Sou Tech Lead e desenvolvedor Full-stack com 6 anos de experiência, apaixonado por transformar problemas complexos em soluções simples e eficientes.',
    en: 'I am a Tech Lead and Full-stack developer with 6 years of experience, passionate about turning complex problems into simple and efficient solutions.',
  },
  'about.p2': {
    pt: 'Atuo liderando por meios tecnológicos: arquitetando ecossistemas de microsserviços, modernizando sistemas legados e construindo plataformas cloud escaláveis de ponta a ponta.',
    en: 'I lead through technology: architecting microservices ecosystems, modernizing legacy systems and building scalable cloud platforms end to end.',
  },
  'about.p3': {
    pt: 'Gosto de trabalhar próximo do time, com código limpo, boas práticas de engenharia e foco em gerar valor real para o negócio.',
    en: 'I enjoy working close to the team, with clean code, solid engineering practices and a focus on creating real business value.',
  },
  'about.highlights': { pt: 'Destaques', en: 'Highlights' },
  'about.h1': { pt: 'Liderança técnica de squads', en: 'Technical leadership of squads' },
  'about.h2': { pt: 'Arquitetura de microsserviços', en: 'Microservices architecture' },
  'about.h3': { pt: 'Cloud (GCP & AWS) e DevOps', en: 'Cloud (GCP & AWS) and DevOps' },
  'about.h4': { pt: 'Modernização de legado', en: 'Legacy modernization' },

  'skills.title': { pt: 'Skills & Ferramentas', en: 'Skills & Tools' },
  'skills.kicker': { pt: 'Meu stack do dia a dia', en: 'My everyday stack' },
  'skills.languages': { pt: 'Linguagens', en: 'Languages' },
  'skills.frontend': { pt: 'Frontend', en: 'Frontend' },
  'skills.cloud': { pt: 'Cloud & Infra', en: 'Cloud & Infra' },
  'skills.architecture': { pt: 'Arquitetura', en: 'Architecture' },
  'skills.devops': { pt: 'DevOps & Observabilidade', en: 'DevOps & Observability' },

  'experience.title': { pt: 'Experiência', en: 'Experience' },
  'experience.kicker': { pt: 'Minha trajetória profissional', en: 'My professional journey' },
  'experience.present': { pt: 'Presente', en: 'Present' },
  'experience.stack': { pt: 'Stack', en: 'Stack' },

  'projects.title': { pt: 'Projetos & Destaques', en: 'Projects & Highlights' },
  'projects.kicker': { pt: 'Coisas que construí', en: 'Things I have built' },
  'projects.readMore': { pt: 'Ler mais', en: 'Read more' },

  'contact.title': { pt: 'Vamos conversar?', en: "Let's talk?" },
  'contact.kicker': { pt: 'Bora trocar uma ideia', en: "Let's connect" },
  'contact.cta': {
    pt: 'Estou sempre aberto a trocar ideias sobre arquitetura, cloud e boas práticas de engenharia. Me chama no LinkedIn!',
    en: 'I am always open to exchanging ideas about architecture, cloud and engineering best practices. Reach me on LinkedIn!',
  },
  'contact.linkedin': { pt: 'Conectar no LinkedIn', en: 'Connect on LinkedIn' },
  'contact.email': { pt: 'Enviar e-mail', en: 'Send email' },
  'contact.location': { pt: 'Localização', en: 'Location' },

  'footer.builtWith': { pt: 'Feito com Angular e muito café', en: 'Built with Angular and lots of coffee' },
  'footer.rights': { pt: 'Todos os direitos reservados', en: 'All rights reserved' },
  'footer.backTop': { pt: 'Voltar ao topo', en: 'Back to top' },
};
