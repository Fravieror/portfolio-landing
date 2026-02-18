"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-bold text-xl">
            <span className="text-accent-blue">Agent</span>Builder
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:border-accent-blue/50 transition-colors text-sm"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </button>

            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-accent-blue text-black font-medium hover:bg-accent-blue/90 transition-colors"
            >
              {t("nav.bookCall")}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-accent-blue/50 transition-colors text-sm w-fit"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase font-medium">{language === "en" ? "Español" : "English"}</span>
              </button>

              <a
                href={siteConfig.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-accent-blue text-black font-medium hover:bg-accent-blue/90 transition-colors text-center"
              >
                {t("nav.bookCall")}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
