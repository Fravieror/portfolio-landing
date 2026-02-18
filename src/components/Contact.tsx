"use client";

import { useState } from "react";
import { Send, Calendar, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - CTA */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t("contact.title")}{" "}
                <span className="text-accent-blue text-glow-blue">
                  {t("contact.titleHighlight")}
                </span>{" "}
                {t("contact.titleEnd")}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t("contact.subtitle")}
              </p>
            </div>

            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-lime text-black font-semibold hover:bg-accent-lime/90 transition-all glow-lime text-lg"
            >
              <Calendar className="w-5 h-5" />
              {t("contact.bookAudit")}
            </a>

            <div className="space-y-4 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {t("contact.reachOut")}
              </p>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-8 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-5 h-5 text-accent-blue" />
              <h3 className="text-xl font-semibold">{t("contact.sendMessage")}</h3>
            </div>

            {submitted ? (
              <div className="p-6 rounded-lg bg-accent-lime/10 border border-accent-lime/20 text-center">
                <p className="text-accent-lime font-medium">
                  {t("contact.thanks")}
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  {t("contact.thanksDesc")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-colors resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-black font-semibold hover:bg-accent-blue/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    t("contact.sending")
                  ) : (
                    <>
                      {t("contact.send")}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
