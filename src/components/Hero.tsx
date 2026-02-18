"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Terminal } from "./Terminal";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50">
              <Sparkles className="w-4 h-4 text-accent-lime" />
              <span className="text-sm text-muted-foreground">
                {t("hero.badge")}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {t("hero.title1")}{" "}
              <span className="text-accent-blue text-glow-blue">{t("hero.title2")}</span>{" "}
              {t("hero.title3")}{" "}
              <span className="text-accent-lime text-glow-lime">{t("hero.title4")}</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-black font-semibold hover:bg-accent-blue/90 transition-all glow-blue"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-accent-blue/50 hover:bg-muted transition-all"
              >
                {t("hero.cta2")}
              </a>
            </div>
          </div>
          
          {/* Right Column - Terminal */}
          <div className="lg:pl-8">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
