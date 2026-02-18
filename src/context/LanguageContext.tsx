"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.bookCall": "Book a Call",

    // Hero
    "hero.badge": "Software Engineer & Agentic Workflow Builder",
    "hero.title1": "I Build",
    "hero.title2": "AI Agents",
    "hero.title3": "That Actually",
    "hero.title4": "Do The Work.",
    "hero.subtitle":
      "Specializing in multi-agent orchestration systems using LangChain, CrewAI, and custom agentic workflows that automate complex business processes.",
    "hero.cta1": "Book a 15-min Audit",
    "hero.cta2": "View Services",

    // Tech Stack
    "tech.title": "Tech Stack & Tools",

    // Services
    "services.title": "Services That",
    "services.titleHighlight": "Transform",
    "services.titleEnd": "Your Workflows",
    "services.subtitle":
      "From audit to implementation, I help businesses leverage AI agents to automate complex processes and unlock new efficiencies.",
    "services.workflowAudits": "Workflow Audits",
    "services.workflowAuditsDesc":
      "Deep-dive analysis of your current processes to identify automation opportunities and bottlenecks that are costing you time and money.",
    "services.agentDev": "Custom Agent Development",
    "services.agentDevDesc":
      "Multi-agent orchestration systems tailored to your specific business needs. From research agents to content generators.",
    "services.infrastructure": "Infrastructure for LLMs",
    "services.infrastructureDesc":
      "Vector databases, RAG pipelines, and production-ready LLM infrastructure using Pinecone, Weaviate, and custom solutions.",
    "services.orchestration": "Agent Orchestration",
    "services.orchestrationDesc":
      "Design and implement complex multi-agent workflows using LangChain, CrewAI, and AutoGen frameworks.",
    "services.performance": "Performance Optimization",
    "services.performanceDesc":
      "Optimize your existing AI workflows for speed, cost-efficiency, and reliability at scale.",
    "services.security": "Security & Compliance",
    "services.securityDesc":
      "Ensure your AI agents operate within security boundaries and compliance requirements.",

    // Case Study
    "case.title": "Real",
    "case.titleHighlight": "Results",
    "case.titleEnd": ", Real Impact",
    "case.subtitle":
      "See how AI-powered workflow automation transforms business operations.",
    "case.before": "BEFORE",
    "case.after": "AFTER",
    "case.manualProcess": "Manual Research Process",
    "case.aiWorkflow": "AI Agent Workflow",
    "case.hoursPerReport": "8+ Hours Per Report",
    "case.hoursPerReportDesc": "Manual data collection and analysis",
    "case.ftesRequired": "3 FTEs Required",
    "case.ftesRequiredDesc": "Dedicated research team",
    "case.twoDayTurnaround": "2-Day Turnaround",
    "case.twoDayTurnaroundDesc": "From request to delivery",
    "case.minutesPerReport": "15 Minutes Per Report",
    "case.minutesPerReportDesc": "Automated data pipeline",
    "case.halfFte": "0.5 FTE Oversight",
    "case.halfFteDesc": "Human-in-the-loop review only",
    "case.sameHour": "Same-Hour Delivery",
    "case.sameHourDesc": "On-demand report generation",
    "case.timeSaved": "Time Saved",
    "case.costReduction": "Cost Reduction",
    "case.fasterOutput": "Faster Output",
    "case.accuracyRate": "Accuracy Rate",
    "case.moreStudies": "See More Case Studies",

    // Contact
    "contact.title": "Ready to",
    "contact.titleHighlight": "Automate",
    "contact.titleEnd": "Your Workflows?",
    "contact.subtitle":
      "Book a free 15-minute workflow audit call. I'll analyze your current processes and show you exactly where AI agents can make the biggest impact.",
    "contact.bookAudit": "Book a 15-min Workflow Audit",
    "contact.reachOut": "Or reach out directly:",
    "contact.sendMessage": "Send a Message",
    "contact.thanks": "Thanks for reaching out!",
    "contact.thanksDesc": "I'll get back to you within 24 hours.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your workflow challenges...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",

    // Footer
    "footer.tagline": "Building AI agents that actually do the work.",
    "footer.rights": "All rights reserved. Built with Next.js & Tailwind CSS.",
  },
  es: {
    // Header
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "nav.bookCall": "Agendar Llamada",

    // Hero
    "hero.badge": "Ingeniero de Software & Constructor de Flujos Agénticos",
    "hero.title1": "Construyo",
    "hero.title2": "Agentes IA",
    "hero.title3": "Que Realmente",
    "hero.title4": "Hacen El Trabajo.",
    "hero.subtitle":
      "Especializado en sistemas de orquestación multi-agente usando LangChain, CrewAI, y flujos de trabajo agénticos personalizados que automatizan procesos empresariales complejos.",
    "hero.cta1": "Agendar Auditoría de 15 min",
    "hero.cta2": "Ver Servicios",

    // Tech Stack
    "tech.title": "Stack Tecnológico & Herramientas",

    // Services
    "services.title": "Servicios Que",
    "services.titleHighlight": "Transforman",
    "services.titleEnd": "Tus Flujos de Trabajo",
    "services.subtitle":
      "Desde auditoría hasta implementación, ayudo a empresas a aprovechar agentes IA para automatizar procesos complejos y desbloquear nuevas eficiencias.",
    "services.workflowAudits": "Auditorías de Flujos",
    "services.workflowAuditsDesc":
      "Análisis profundo de tus procesos actuales para identificar oportunidades de automatización y cuellos de botella que te cuestan tiempo y dinero.",
    "services.agentDev": "Desarrollo de Agentes Personalizados",
    "services.agentDevDesc":
      "Sistemas de orquestación multi-agente adaptados a tus necesidades específicas. Desde agentes de investigación hasta generadores de contenido.",
    "services.infrastructure": "Infraestructura para LLMs",
    "services.infrastructureDesc":
      "Bases de datos vectoriales, pipelines RAG e infraestructura LLM lista para producción usando Pinecone, Weaviate y soluciones personalizadas.",
    "services.orchestration": "Orquestación de Agentes",
    "services.orchestrationDesc":
      "Diseño e implementación de flujos de trabajo multi-agente complejos usando frameworks LangChain, CrewAI y AutoGen.",
    "services.performance": "Optimización de Rendimiento",
    "services.performanceDesc":
      "Optimiza tus flujos de trabajo IA existentes para velocidad, eficiencia de costos y confiabilidad a escala.",
    "services.security": "Seguridad y Cumplimiento",
    "services.securityDesc":
      "Asegura que tus agentes IA operen dentro de los límites de seguridad y requisitos de cumplimiento.",

    // Case Study
    "case.title": "Resultados",
    "case.titleHighlight": "Reales",
    "case.titleEnd": ", Impacto Real",
    "case.subtitle":
      "Mira cómo la automatización de flujos de trabajo impulsada por IA transforma las operaciones empresariales.",
    "case.before": "ANTES",
    "case.after": "DESPUÉS",
    "case.manualProcess": "Proceso de Investigación Manual",
    "case.aiWorkflow": "Flujo de Trabajo con Agentes IA",
    "case.hoursPerReport": "8+ Horas Por Informe",
    "case.hoursPerReportDesc": "Recolección y análisis manual de datos",
    "case.ftesRequired": "3 Empleados Requeridos",
    "case.ftesRequiredDesc": "Equipo de investigación dedicado",
    "case.twoDayTurnaround": "Entrega en 2 Días",
    "case.twoDayTurnaroundDesc": "Desde solicitud hasta entrega",
    "case.minutesPerReport": "15 Minutos Por Informe",
    "case.minutesPerReportDesc": "Pipeline de datos automatizado",
    "case.halfFte": "0.5 Empleado de Supervisión",
    "case.halfFteDesc": "Solo revisión humana en el proceso",
    "case.sameHour": "Entrega en la Misma Hora",
    "case.sameHourDesc": "Generación de informes bajo demanda",
    "case.timeSaved": "Tiempo Ahorrado",
    "case.costReduction": "Reducción de Costos",
    "case.fasterOutput": "Salida Más Rápida",
    "case.accuracyRate": "Tasa de Precisión",
    "case.moreStudies": "Ver Más Casos de Estudio",

    // Contact
    "contact.title": "¿Listo para",
    "contact.titleHighlight": "Automatizar",
    "contact.titleEnd": "Tus Flujos de Trabajo?",
    "contact.subtitle":
      "Agenda una llamada gratuita de auditoría de 15 minutos. Analizaré tus procesos actuales y te mostraré exactamente dónde los agentes IA pueden tener el mayor impacto.",
    "contact.bookAudit": "Agendar Auditoría de 15 min",
    "contact.reachOut": "O contáctame directamente:",
    "contact.sendMessage": "Enviar un Mensaje",
    "contact.thanks": "¡Gracias por contactarme!",
    "contact.thanksDesc": "Te responderé dentro de 24 horas.",
    "contact.name": "Nombre",
    "contact.namePlaceholder": "Tu nombre",
    "contact.email": "Correo",
    "contact.emailPlaceholder": "tu@correo.com",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder":
      "Cuéntame sobre los desafíos de tu flujo de trabajo...",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",

    // Footer
    "footer.tagline": "Construyendo agentes IA que realmente hacen el trabajo.",
    "footer.rights":
      "Todos los derechos reservados. Construido con Next.js y Tailwind CSS.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
