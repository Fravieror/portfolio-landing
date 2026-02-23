"use client";

import { useLanguage } from "@/context/LanguageContext";

const technologies = [
  { name: "Python", icon: "🐍" },
  { name: "LangChain", icon: "🦜" },
  { name: "LangGraph", icon: "🔗" },
  { name: "OpenAI", icon: "🤖" },
  { name: "CrewAI", icon: "👥" },
  { name: "Pinecone", icon: "🌲" },
  { name: "Docker", icon: "🐳" },
  { name: "Cloudflare", icon: "☁️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Redis", icon: "🔴" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
];

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-16 overflow-hidden border-y border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider">
          {t("tech.title")}
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee Track */}
        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 px-8 py-4 mx-2 rounded-lg border border-border bg-card hover:border-accent-blue/30 transition-colors flex-shrink-0"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-foreground font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
