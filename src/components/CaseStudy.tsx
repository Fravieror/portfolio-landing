"use client";

import { ArrowRight, Clock, TrendingDown, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CaseStudy() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("case.title")}{" "}
            <span className="text-accent-lime text-glow-lime">{t("case.titleHighlight")}</span>
            {t("case.titleEnd")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("case.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Before Card */}
          <div className="p-8 rounded-xl border border-border bg-card relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-2 bg-red-500/10 text-red-400 text-sm font-medium rounded-bl-xl">
              {t("case.before")}
            </div>
            <h3 className="text-2xl font-bold mb-6 mt-4">
              {t("case.manualProcess")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{t("case.hoursPerReport")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("case.hoursPerReportDesc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <TrendingDown className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{t("case.ftesRequired")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("case.ftesRequiredDesc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <Zap className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{t("case.twoDayTurnaround")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("case.twoDayTurnaroundDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="p-8 rounded-xl border border-accent-lime/30 bg-card relative overflow-hidden glow-lime">
            <div className="absolute top-0 right-0 px-4 py-2 bg-accent-lime/10 text-accent-lime text-sm font-medium rounded-bl-xl">
              {t("case.after")}
            </div>
            <h3 className="text-2xl font-bold mb-6 mt-4">
              {t("case.aiWorkflow")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent-lime/5 border border-accent-lime/10">
                <Clock className="w-5 h-5 text-accent-lime" />
                <div>
                  <p className="font-medium">{t("case.minutesPerReport")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("case.minutesPerReportDesc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent-lime/5 border border-accent-lime/10">
                <TrendingDown className="w-5 h-5 text-accent-lime" />
                <div>
                  <p className="font-medium">{t("case.halfFte")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("case.halfFteDesc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent-lime/5 border border-accent-lime/10">
                <Zap className="w-5 h-5 text-accent-lime" />
                <div>
                  <p className="font-medium">{t("case.sameHour")}</p>
                  <p className="text-sm text-muted-foreground">
                    {t("case.sameHourDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "97%", labelKey: "case.timeSaved" },
            { value: "83%", labelKey: "case.costReduction" },
            { value: "48x", labelKey: "case.fasterOutput" },
            { value: "99.2%", labelKey: "case.accuracyRate" },
          ].map((stat) => (
            <div
              key={stat.labelKey}
              className="p-6 rounded-xl border border-border bg-card text-center"
            >
              <p className="text-3xl font-bold text-accent-blue text-glow-blue">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition-colors"
          >
            {t("case.moreStudies")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
