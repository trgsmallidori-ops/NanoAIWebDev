"use client";

import { useMemo, useState } from "react";
import { useTheme } from "../useTheme";

export type FaqItem = {
  question: string;
  answer: string;
};

type Lang = "en" | "fr";

const faqsFr: FaqItem[] = [
  {
    question: "Comment sont fixés les prix ?",
    answer:
      "Le prix dépend de la taille du site, du nombre de pages, et des fonctionnalités ou automatisations nécessaires."
  },
  {
    question: "Quel est le délai moyen ?",
    answer:
      "La plupart des sites sont prêts en une semaine, selon la taille, la complexité et la rapidité des retours."
  },
  {
    question: "Est-ce que je reçois une maquette gratuite ?",
    answer:
      "Oui. Vous recevez une maquette cliquable pour valider la direction avant tout coût de production."
  },
  {
    question: "De quoi avez-vous besoin pour démarrer ?",
    answer:
      "Vos objectifs, des références visuelles, une structure de pages, et vos éléments de marque existants."
  },
  {
    question: "Pouvez-vous gérer le texte et les visuels ?",
    answer:
      "Oui. Je peux rédiger un texte orienté conversion et sélectionner des visuels premium."
  },
  {
    question: "Sur quelles technologies construisez-vous ?",
    answer:
      "Je développe avec Next.js et déploie sur Vercel pour des performances rapides et stables."
  },
  {
    question: "Les révisions sont-elles incluses ?",
    answer:
      "Oui. Les révisions sont incluses durant le sprint design et build."
  },
  {
    question: "Pouvez-vous ajouter des formulaires et automatisations ?",
    answer:
      "Absolument. Je connecte les formulaires à vos emails, CRM ou outils de prise de rendez-vous."
  }
];

export default function FaqClient({ faqs }: { faqs: FaqItem[] }) {
  const [lang, setLang] = useState<Lang>("en");
  const { isDark, toggleTheme } = useTheme();
  const logoSrc = isDark ? "/darkmodelogo.png" : "/logo.png";

  const t = useMemo(() => {
    if (lang === "fr") {
      return {
        badge: "FAQ",
        title: "Questions fréquentes",
        lead: "Réponses rapides sur les prix, les délais, le process et la collaboration.",
        ctaPrimary: "Obtenir une soumission",
        ctaSecondary: "Retour à l'accueil"
      };
    }
    return {
      badge: "FAQ",
      title: "Frequently asked questions",
      lead: "Quick answers about pricing, timelines, process, and what it’s like to work together.",
      ctaPrimary: "Get a quote",
      ctaSecondary: "Back to home"
    };
  }, [lang]);

  const visibleFaqs = lang === "fr" ? faqsFr : faqs;

  return (
    <>
      <header className="overlay-header faq-header">
        <div className="logo-banner">
          <img src={logoSrc} alt="Spaxio logo" />
        </div>
        <div className="nav" aria-label="Language switcher">
          <button
            className="button secondary"
            style={{ padding: "10px 14px", borderRadius: 10 }}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <button
            className="button secondary"
            style={{ padding: "10px 14px", borderRadius: 10 }}
            onClick={() => setLang("fr")}
            aria-pressed={lang === "fr"}
          >
            FR
          </button>
          <button
            className="button secondary"
            style={{ padding: "10px 14px", borderRadius: 10 }}
            onClick={toggleTheme}
            aria-pressed={isDark}
          >
            {lang === "fr" ? (isDark ? "Mode clair" : "Mode sombre") : isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </header>
      <section className="hero" id="faq">
        <div className="badge">{t.badge}</div>
        <div className="hero-grid">
          <div>
            <h1 className="tagline">{t.title}</h1>
            <p className="lead">{t.lead}</p>
            <div className="cta-row">
              <a className="button" href="/#quote">
                {t.ctaPrimary}
              </a>
              <a className="button secondary" href="/">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="cards">
            {visibleFaqs.slice(0, 3).map((item) => (
              <div className="card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="cards">
          {visibleFaqs.map((item) => (
            <div className="card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
