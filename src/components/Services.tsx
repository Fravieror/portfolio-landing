"use client";

import { Search, Bot, Database, Workflow, Zap, Shield, LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceData {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  accent: string;
  size: string;
}

const servicesConfig: ServiceData[] = [
  {
    icon: Search,
    titleKey: "services.workflowAudits",
    descKey: "services.workflowAuditsDesc",
    accent: "accent-blue",
    size: "large",
  },
  {
    icon: Bot,
    titleKey: "services.agentDev",
    descKey: "services.agentDevDesc",
    accent: "accent-lime",
    size: "large",
  },
  {
    icon: Database,
    titleKey: "services.infrastructure",
    descKey: "services.infrastructureDesc",
    accent: "accent-blue",
    size: "medium",
  },
  {
    icon: Workflow,
    titleKey: "services.orchestration",
    descKey: "services.orchestrationDesc",
    accent: "accent-lime",
    size: "medium",
  },
  {
    icon: Zap,
    titleKey: "services.performance",
    descKey: "services.performanceDesc",
    accent: "accent-blue",
    size: "small",
  },
  {
    icon: Shield,
    titleKey: "services.security",
    descKey: "services.securityDesc",
    accent: "accent-lime",
    size: "small",
  },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("services.title")}{" "}
            <span className="text-accent-blue text-glow-blue">{t("services.titleHighlight")}</span>{" "}
            {t("services.titleEnd")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large Cards - First Row */}
          <div className="lg:col-span-2 group">
            <ServiceCard service={servicesConfig[0]} />
          </div>
          <div className="lg:col-span-2 group">
            <ServiceCard service={servicesConfig[1]} />
          </div>

          {/* Medium Cards - Second Row */}
          <div className="lg:col-span-2 group">
            <ServiceCard service={servicesConfig[2]} />
          </div>
          <div className="lg:col-span-2 group">
            <ServiceCard service={servicesConfig[3]} />
          </div>

          {/* Small Cards - Third Row */}
          <div className="md:col-span-1 lg:col-span-2 group">
            <ServiceCard service={servicesConfig[4]} />
          </div>
          <div className="md:col-span-1 lg:col-span-2 group">
            <ServiceCard service={servicesConfig[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceData }) {
  const { t } = useLanguage();
  const Icon = service.icon;
  const isBlue = service.accent === "accent-blue";

  return (
    <div
      className={`h-full p-6 rounded-xl border border-border bg-card hover:border-${service.accent}/50 transition-all duration-300 group-hover:shadow-lg ${
        isBlue ? "group-hover:glow-blue" : "group-hover:glow-lime"
      }`}
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
          isBlue ? "bg-accent-blue/10" : "bg-accent-lime/10"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            isBlue ? "text-accent-blue" : "text-accent-lime"
          }`}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{t(service.titleKey)}</h3>
      <p className="text-muted-foreground">{t(service.descKey)}</p>
    </div>
  );
}
