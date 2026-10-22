import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "PT" | "ES" | "EN";

const dict = {
  PT: {
    nav: ["Início", "Sobre", "Projetos", "Serviços", "Contato"],
    waMsg: "Olá, vim pelo site e queria um orçamento!",
    heroA: "Tecnologia em ", heroB: "outro patamar", heroCta: "Iniciar projeto", heroSee: "Ver soluções →",
    heroAlt: "Processador branco com trilhas douradas",
    aboutLabel: "/ 01 — Sobre mim",
    aboutTitleA: "Engenharia de software com ", aboutTitleB: "rigor de ateliê",
    aboutP1: "Sou Christian Izidoro, engenheiro de software e fundador da Izidoro Tech. Desenho e construo sites, sistemas e aplicativos para marcas que não aceitam o comum.",
    aboutP2: "Cada projeto nasce de uma arquitetura pensada para durar: código limpo, performance real, segurança e escalabilidade, com uma camada de design que traduz a essência da sua marca em cada detalhe.",
    aboutP3: "Trabalho com poucos projetos por vez. Assim, cada linha de código e cada pixel recebem a atenção que uma marca de alto padrão exige.",
    aboutRole: "Engenheiro de Software · Fundador",
    projLabel: "/ 02 — Projetos", projA: "Soluções ", projB: "no ar",
    projHint: "Passe o mouse para visualizar · clique para abrir", projOpen: "Visitar site",
    cats: ["Advocacia", "Arquitetura", "Vidraçaria", "Indústria", "Serviços", "Turismo", "Estúdio digital"],
    svcA: "O que ", svcB: "criamos", svcLabel: "/ 03 — Serviços",
    svcs: [["Sites", "Presença digital que transmite autoridade."], ["Sistemas", "Plataformas sob medida para sua operação."], ["Aplicativos", "Apps iOS e Android refinados em cada gesto."]],
    galLabel: "/ 04 — Tecnologia", galA: "Tecnologia ", galB: "com presença",
    ctaLabel: "/ 05 — Essência",
    ctaQuote: "O luxo está nos detalhes que ninguém vê — mas todos sentem.",
    ctaBtn: "Iniciar conversa",
    ctLabel: "/ 06 — Contato", ctA: "Vamos ", ctB: "conversar",
    ctP: "Conte brevemente sobre sua marca e seu momento. Respondo pessoalmente em até um dia útil.",
    fName: "Nome", fNamePh: "Como posso chamar você", fCo: "Marca / Empresa", fCoPh: "Nome da sua marca",
    fSvc: "Natureza do projeto", fSvcPh: "Selecione um serviço",
    fOpts: ["Site Institucional", "Landing Page Premium", "Aplicativo Mobile", "Sistema / Plataforma", "Outro"],
    fMsg: "Conte brevemente", fMsgPh: "Sobre sua marca, momento e visão", fSend: "Enviar mensagem",
    copy: "Copiar", open: "Abrir", notInf: "Não informado", noMsg: "Sem mensagem adicional",
    wName: "Nome", wCo: "Empresa", wSvc: "Serviço", wMsg: "Mensagem",
    ftTag: "Engenharia de software para marcas de alto padrão.", ftContact: "Contato", ftStatus: "Status",
    ftOpen: "Aberto a projetos", ftRights: "Todos os direitos reservados.", ftLine: "Sites · Sistemas · Aplicativos",
  },
  ES: {
    nav: ["Inicio", "Sobre mí", "Proyectos", "Servicios", "Contacto"],
    waMsg: "¡Hola, vengo del sitio web y quisiera un presupuesto!",
    heroA: "Tecnología en ", heroB: "otro nivel", heroCta: "Iniciar proyecto", heroSee: "Ver soluciones →",
    heroAlt: "Procesador blanco con pistas doradas",
    aboutLabel: "/ 01 — Sobre mí",
    aboutTitleA: "Ingeniería de software con ", aboutTitleB: "rigor de atelier",
    aboutP1: "Soy Christian Izidoro, ingeniero de software y fundador de Izidoro Tech. Diseño y construyo sitios, sistemas y aplicaciones para marcas que no aceptan lo común.",
    aboutP2: "Cada proyecto nace de una arquitectura pensada para perdurar: código limpio, rendimiento real, seguridad y escalabilidad, con una capa de diseño que traduce la esencia de tu marca en cada detalle.",
    aboutP3: "Trabajo con pocos proyectos a la vez. Así, cada línea de código y cada píxel reciben la atención que una marca de alto nivel exige.",
    aboutRole: "Ingeniero de Software · Fundador",
    projLabel: "/ 02 — Proyectos", projA: "Soluciones ", projB: "en línea",
    projHint: "Pasa el cursor para ver · haz clic para abrir", projOpen: "Visitar sitio",
    cats: ["Abogacía", "Arquitectura", "Vidriería", "Industria", "Servicios", "Turismo", "Estudio digital"],
    svcA: "Lo que ", svcB: "creamos", svcLabel: "/ 03 — Servicios",
    svcs: [["Sitios web", "Presencia digital que transmite autoridad."], ["Sistemas", "Plataformas a medida para tu operación."], ["Aplicaciones", "Apps iOS y Android refinadas en cada gesto."]],
    galLabel: "/ 04 — Tecnología", galA: "Tecnología ", galB: "con presencia",
    ctaLabel: "/ 05 — Esencia",
    ctaQuote: "El lujo está en los detalles que nadie ve — pero todos sienten.",
    ctaBtn: "Iniciar conversación",
    ctLabel: "/ 06 — Contacto", ctA: "Hablemos", ctB: "",
    ctP: "Cuéntame brevemente sobre tu marca y tu momento. Respondo personalmente en un día hábil.",
    fName: "Nombre", fNamePh: "¿Cómo te llamo?", fCo: "Marca / Empresa", fCoPh: "Nombre de tu marca",
    fSvc: "Tipo de proyecto", fSvcPh: "Selecciona un servicio",
    fOpts: ["Sitio Institucional", "Landing Page Premium", "Aplicación Móvil", "Sistema / Plataforma", "Otro"],
    fMsg: "Cuéntame brevemente", fMsgPh: "Sobre tu marca, momento y visión", fSend: "Enviar mensaje",
    copy: "Copiar", open: "Abrir", notInf: "No informado", noMsg: "Sin mensaje adicional",
    wName: "Nombre", wCo: "Empresa", wSvc: "Servicio", wMsg: "Mensaje",
    ftTag: "Ingeniería de software para marcas de alto nivel.", ftContact: "Contacto", ftStatus: "Estado",
    ftOpen: "Disponible para proyectos", ftRights: "Todos los derechos reservados.", ftLine: "Sitios · Sistemas · Aplicaciones",
  },
  EN: {
    nav: ["Home", "About", "Projects", "Services", "Contact"],
    waMsg: "Hi, I found you through the website and would like a quote!",
    heroA: "Technology on ", heroB: "another level", heroCta: "Start a project", heroSee: "See solutions →",
    heroAlt: "White processor with gold traces",
    aboutLabel: "/ 01 — About me",
    aboutTitleA: "Software engineering with ", aboutTitleB: "atelier-level rigor",
    aboutP1: "I'm Christian Izidoro, software engineer and founder of Izidoro Tech. I design and build websites, systems and apps for brands that refuse the ordinary.",
    aboutP2: "Every project starts from an architecture built to last: clean code, real performance, security and scalability, wrapped in a design layer that translates your brand's essence into every detail.",
    aboutP3: "I take on only a few projects at a time, so every line of code and every pixel gets the attention a high-end brand demands.",
    aboutRole: "Software Engineer · Founder",
    projLabel: "/ 02 — Projects", projA: "Solutions ", projB: "live",
    projHint: "Hover to preview · click to open", projOpen: "Visit site",
    cats: ["Law firm", "Architecture", "Glass works", "Industry", "Services", "Tourism", "Digital studio"],
    svcA: "What we ", svcB: "create", svcLabel: "/ 03 — Services",
    svcs: [["Websites", "Digital presence that conveys authority."], ["Systems", "Tailor-made platforms for your operation."], ["Apps", "iOS and Android apps refined in every gesture."]],
    galLabel: "/ 04 — Technology", galA: "Technology ", galB: "with presence",
    ctaLabel: "/ 05 — Essence",
    ctaQuote: "Luxury lives in the details no one sees — but everyone feels.",
    ctaBtn: "Start a conversation",
    ctLabel: "/ 06 — Contact", ctA: "Let's ", ctB: "talk",
    ctP: "Tell me briefly about your brand and where it stands. I reply personally within one business day.",
    fName: "Name", fNamePh: "What should I call you", fCo: "Brand / Company", fCoPh: "Your brand's name",
    fSvc: "Project type", fSvcPh: "Select a service",
    fOpts: ["Corporate Website", "Premium Landing Page", "Mobile App", "System / Platform", "Other"],
    fMsg: "Tell me briefly", fMsgPh: "About your brand, moment and vision", fSend: "Send message",
    copy: "Copy", open: "Open", notInf: "Not provided", noMsg: "No additional message",
    wName: "Name", wCo: "Company", wSvc: "Service", wMsg: "Message",
    ftTag: "Software engineering for high-end brands.", ftContact: "Contact", ftStatus: "Status",
    ftOpen: "Open for projects", ftRights: "All rights reserved.", ftLine: "Websites · Systems · Apps",
  },
};

export type Dict = (typeof dict)["PT"];
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({ lang: "PT", setLang: () => {}, t: dict.PT });

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "PT");
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "PT" ? "pt-BR" : lang === "ES" ? "es" : "en";
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>{children}</Ctx.Provider>;
};

export const useLang = () => useContext(Ctx);
export const waLink = (t: Dict) => `https://wa.me/5565993381666?text=${encodeURIComponent(t.waMsg)}`;
