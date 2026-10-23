import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "PT" | "ES" | "EN";

const dict = {
  PT: {
    nav: ["Início", "Sobre", "Projetos", "Serviços", "Contato"],
    waMsg: "Olá, vim pelo site e queria um orçamento!",
    heroA: "Tecnologia em ", heroB: "outro patamar", heroCta: "Iniciar projeto", heroSee: "Ver soluções →",
    heroAlt: "Processador branco com trilhas douradas",
    aboutLabel: "/ 01 — Sobre mim",
    aboutTitleA: "Tecnologia que impõe ", aboutTitleB: "presença",
    aboutP1: "A Izidoro Tech une engenharia de software e design para criar sites, sistemas e aplicativos à altura das marcas mais exigentes.",
    aboutP2: "Trabalhamos com arquiteturas sólidas, código limpo, performance extrema e segurança de ponta — tecnologia construída para escalar e para durar.",
    aboutP3: "Cada projeto é tratado como único. O resultado é uma presença digital que não pede atenção: ela se impõe.",
    aboutRole: "Fundador · Izidoro Tech",
    projLabel: "/ 02 — Projetos", projA: "Soluções ", projB: "no ar",
    projHint: "Passe o mouse para visualizar · clique para abrir", projOpen: "Visitar site",
    cats: ["Advocacia", "Arquitetura", "Vidraçaria", "Indústria", "Serviços", "Turismo", "Estúdio digital"],
    svcA: "O que ", svcB: "criamos", svcLabel: "/ 03 — Serviços",
    svcs: [["Sites", "Presença digital que transmite autoridade."], ["Sistemas", "Plataformas sob medida para sua operação."], ["Aplicativos", "Apps iOS e Android refinados em cada gesto."]],
    galLabel: "/ 04 — Tecnologia", galA: "Tecnologia ", galB: "com presença",
    ctaLabel: "/ 05 — Essência",
    ctaQuote: "O futuro não é previsto. É programado.",
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
    aboutTitleA: "Tecnología que impone ", aboutTitleB: "presencia",
    aboutP1: "Izidoro Tech une ingeniería de software y diseño para crear sitios, sistemas y aplicaciones a la altura de las marcas más exigentes.",
    aboutP2: "Trabajamos con arquitecturas sólidas, código limpio, rendimiento extremo y seguridad de punta — tecnología construida para escalar y perdurar.",
    aboutP3: "Cada proyecto es tratado como único. El resultado es una presencia digital que no pide atención: se impone.",
    aboutRole: "Fundador · Izidoro Tech",
    projLabel: "/ 02 — Proyectos", projA: "Soluciones ", projB: "en línea",
    projHint: "Pasa el cursor para ver · haz clic para abrir", projOpen: "Visitar sitio",
    cats: ["Abogacía", "Arquitectura", "Vidriería", "Industria", "Servicios", "Turismo", "Estudio digital"],
    svcA: "Lo que ", svcB: "creamos", svcLabel: "/ 03 — Servicios",
    svcs: [["Sitios web", "Presencia digital que transmite autoridad."], ["Sistemas", "Plataformas a medida para tu operación."], ["Aplicaciones", "Apps iOS y Android refinadas en cada gesto."]],
    galLabel: "/ 04 — Tecnología", galA: "Tecnología ", galB: "con presencia",
    ctaLabel: "/ 05 — Esencia",
    ctaQuote: "El futuro no se predice. Se programa.",
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
    aboutTitleA: "Technology that commands ", aboutTitleB: "presence",
    aboutP1: "Izidoro Tech brings together software engineering and design to build websites, systems and apps worthy of the most demanding brands.",
    aboutP2: "We work with solid architectures, clean code, extreme performance and cutting-edge security — technology built to scale and to last.",
    aboutP3: "Every project is treated as one of a kind. The result is a digital presence that doesn't ask for attention: it commands it.",
    aboutRole: "Founder · Izidoro Tech",
    projLabel: "/ 02 — Projects", projA: "Solutions ", projB: "live",
    projHint: "Hover to preview · click to open", projOpen: "Visit site",
    cats: ["Law firm", "Architecture", "Glass works", "Industry", "Services", "Tourism", "Digital studio"],
    svcA: "What we ", svcB: "create", svcLabel: "/ 03 — Services",
    svcs: [["Websites", "Digital presence that conveys authority."], ["Systems", "Tailor-made platforms for your operation."], ["Apps", "iOS and Android apps refined in every gesture."]],
    galLabel: "/ 04 — Technology", galA: "Technology ", galB: "with presence",
    ctaLabel: "/ 05 — Essence",
    ctaQuote: "The future isn't predicted. It's programmed.",
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
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "PT");
  const setLang = (l: Lang) => {
    setLangState(l);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "PT" ? "pt-BR" : lang === "ES" ? "es" : "en";
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>{children}</Ctx.Provider>;
};

export const useLang = () => useContext(Ctx);
export const waLink = (t: Dict) => `https://wa.me/5565993381666?text=${encodeURIComponent(t.waMsg)}`;
