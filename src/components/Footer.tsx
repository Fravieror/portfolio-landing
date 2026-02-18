"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">
              <span className="text-accent-blue">Agent</span>Builder
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Fravieror"
              target="_blank"
              className="text-muted-foreground hover:text-accent-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/javier-diaz-8b990b17b/"
              target="_blank"
              className="text-muted-foreground hover:text-accent-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent-blue transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
