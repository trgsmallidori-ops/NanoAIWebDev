"use client";

import { useMemo, useState } from "react";
import { useTheme } from "../useTheme";

type Lang = "en" | "fr";

export default function BlogClient() {
  const [lang, setLang] = useState<Lang>("en");
  const { isDark, toggleTheme } = useTheme();
  const logoSrc = isDark ? "/darkmodelogo.png" : "/logo.png";

  const t = useMemo(() => {
    if (lang === "fr") {
      return {
        badge: "Article",
        title: "Comment Spaxio a commencé",
        lead:
          "Je m’appelle Stefano Polidori, de Montréal, et j’ai lancé Spaxio en janvier 2026 — parce que je voulais créer de meilleurs sites.",
        body: [
          "Je suis Stefano Polidori, basé à Montréal, QC. J’ai créé Spaxio en janvier 2026 après une expérience concrète dans un emploi à temps partiel qui m’a montré ce que les clients attendent vraiment : de la rapidité, de la clarté et un site qui paraît premium sans exploser le budget.",
          "Cet emploi m’a appris le rythme — les délais rapides, les attentes, et l’importance des petits détails. Je voulais offrir ce même niveau de finition à des marques plus petites qui n’y ont pas toujours accès.",
          "Ensuite, je suis devenu très à l’aise pour coder avec l’IA. Pas juste l’utiliser, mais la diriger, corriger, et transformer des idées en sites propres et prêts pour la production. C’est l’ADN de Spaxio aujourd’hui : des builds rapides, des repères visuels premium, et des prix honnêtes.",
          "Si vous êtes une entreprise qui veut un site haut de gamme sans dépasser son budget, j’aimerais collaborer avec vous."
        ],
        ctaPrimary: "Construisons votre site",
        ctaSecondary: "Demander une maquette gratuite",
        footer: "Basé à Montréal, au service de clients partout au Canada et aux États-Unis."
      };
    }
    return {
      badge: "Post",
      title: "How Spaxio Started",
      lead:
        "I’m Stefano Polidori from Montreal, and I started Spaxio in January 2026 — mostly because I got obsessed with building better websites.",
      body: [
        "I’m Stefano Polidori, based in Montreal, QC. I started Spaxio in January 2026 after getting real-world experience at a part-time job that showed me what clients actually want: speed, clarity, and a site that looks premium without feeling overpriced.",
        "That job taught me the flow — the quick turnarounds, the expectations, and how much small details matter. I wanted to bring that same level of polish to smaller brands that usually can’t afford it.",
        "Then I got really good at coding with AI. Not just using it, but knowing how to steer it, fix it, and turn ideas into clean, production-ready sites fast. That’s what Spaxio is today: fast builds, premium design cues, and honest pricing.",
        "If you’re a business owner who wants a site that feels high-end but still fits your budget, I’d love to work with you."
      ],
      ctaPrimary: "Let’s build your site",
      ctaSecondary: "Request a free mock",
      footer: "Montreal-based, working with clients across Canada and the U.S."
    };
  }, [lang]);

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

      <section className="hero" id="blog">
        <div className="badge">{t.badge}</div>
        <div className="hero-grid">
          <div>
            <h1 className="tagline">{t.title}</h1>
            <p className="lead">{t.lead}</p>
            <div className="cta-row">
              <a className="button" href="/#quote">
                {t.ctaPrimary}
              </a>
              <a className="button secondary" href="/#mock">
                {t.ctaSecondary}
              </a>
              <a className="button secondary" href="/">
                {lang === "fr" ? "Retour à l'accueil" : "Back to home"}
              </a>
            </div>
          </div>
          <div className="cards">
            {t.body.slice(0, 2).map((paragraph) => (
              <div className="card" key={paragraph.slice(0, 24)}>
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="cards">
          {t.body.map((paragraph) => (
            <div className="card" key={paragraph.slice(0, 24)}>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p style={{ marginTop: "8px", color: "var(--muted)" }}>{t.footer}</p>
      </footer>
    </>
  );
}
