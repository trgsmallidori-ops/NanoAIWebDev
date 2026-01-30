"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Lang = "en" | "fr";

const copy = {
  en: {
    badge: "Boutique quality · Accessible pricing",
    headline: "Tailored websites with the precision of a luxury atelier — at budget-friendly rates.",
    heroLead:
      "I craft sites with the obsessive detail of high horology and lean, efficient workflows. Expect elegant visuals inspired by Audemars Piguet and conversion-focused UX — priced to win without cutting corners.",
    ctaQuote: "Get a quote",
    ctaMock: "Request a free mock",
    ribbon: "Free mock website within 48 hours. Only pay when you love it.",
    cards: [
      {
        title: "Priced to win",
        body: "Lean, streamlined production means bespoke builds typically 30-50% below agency rates."
      },
      {
        title: "Automation ready",
        body: "Need forms, scheduling, CRM handoff, or simple automations? I'll wire the essentials so leads flow smoothly."
      },
      {
        title: "Luxury polish",
        body: "Layout cues, typography, and motion borrow from modern luxury — bold hero, precise grids, and warm gold accents."
      }
    ],
    mockTitle: "Free mock website",
    mockLead:
      "I'll design a clickable mock tailored to your brand — no commitment. Use it to align on tone and structure before any build costs start. If you approve it, we ship fast and keep costs predictable.",
    processTitle: "How I work",
    process: [
      {
        title: "01. Discovery & quote",
        body: "Share your goals, budget, and must-haves. I return a scoped quote and timeline within 24 hours."
      },
      {
        title: "02. Design & build sprint",
        body: "Structured sprints combine design craft with fast production to draft copy, variants, and data-informed UX tweaks."
      },
      {
        title: "03. Launch & automation",
        body: "Ship to Vercel, wire SMTP for leads, and add light automations to qualify and route inbound messages."
      }
    ],
    formTitle: "Get a quote",
    formLead: "Tell me about your project. I'll reply with pricing, a delivery window, and a link to your free mock.",
    labels: {
      name: "Name",
      email: "Email",
      budget: "Budget range",
      projectType: "Project type",
      notes: "Project notes"
    },
    placeholders: {
      name: "Ava Martinez",
      email: "you@brand.com",
      notes: "Goals, pages, references, features to include..."
    },
    budgetOptions: ["Under $1,500", "$1,500 – $3,000", "$3,000 – $6,000", "Above $6,000"],
    projectOptions: ["Marketing site", "Ecommerce", "Web app", "Landing page sprint", "Other"],
    submit: "Send quote request",
    submitting: "Sending...",
    statusSuccess: "Sent. I will reply with a scoped price and a free mock link.",
    statusError: "Something went wrong. Try again in a moment.",
    copyright: "© 2026 Spaxio. All rights reserved.",
    nav: {
      hero: "Home",
      process: "Process",
      mock: "Free mock",
      quote: "Quote",
      agent: "Coding agent"
    },
    agentTitle: "Coding agent: Codex",
    agentLead:
      "I use Codex as my primary coding agent to accelerate build quality and consistency. It keeps the stack clean, typed, and ready for Vercel.",
    agentList: [
      "Typesafe Next.js routes and API handlers wired to SMTP.",
      "Automated code reviews to keep performance and accessibility in check.",
      "Fast iteration on UI polish while preserving your brand voice."
    ]
  },
  fr: {
    badge: "Qualité boutique · Prix accessibles",
    headline: "Sites sur mesure avec la précision d'un atelier de luxe — à des tarifs abordables.",
    heroLead:
      "Je conçois des sites avec le souci du détail horloger et des processus efficaces. Attendez-vous à des visuels élégants inspirés d’Audemars Piguet et une UX orientée conversion — sans sacrifier le budget.",
    ctaQuote: "Obtenir une soumission",
    ctaMock: "Demander une maquette gratuite",
    ribbon: "Maquette gratuite en 48 heures. Vous ne payez que si vous l’adoptez.",
    cards: [
      {
        title: "Tarifs avantageux",
        body: "Une production optimisée permet des sites sur mesure souvent 30 à 50 % moins chers qu'en agence."
      },
      {
        title: "Prêt pour l'automatisation",
        body: "Formulaires, prises de rendez-vous, transfert CRM ou petites automatisations : j'installe l'essentiel pour que vos leads circulent sans friction."
      },
      {
        title: "Finition luxe",
        body: "Mise en page, typographie et motion inspirées du luxe moderne — hero audacieux, grilles précises et accents dorés chaleureux."
      }
    ],
    mockTitle: "Maquette gratuite",
    mockLead:
      "Je crée une maquette cliquable adaptée à votre marque — sans engagement. Elle sert à valider le ton et la structure avant tout coût. Si vous l'approuvez, on livre rapidement avec un budget maîtrisé.",
    processTitle: "Ma méthode",
    process: [
      {
        title: "01. Découverte & soumission",
        body: "Vous partagez objectifs, budget et requis. Je renvoie une soumission détaillée et un délai en moins de 24 h."
      },
      {
        title: "02. Sprint design & build",
        body: "Des sprints structurés allient design soigné et production rapide pour rédiger les textes, variantes et ajustements UX."
      },
      {
        title: "03. Mise en ligne & automatisation",
        body: "Mise en ligne sur Vercel, configuration SMTP pour les leads et automatisations légères pour qualifier et router les messages entrants."
      }
    ],
    formTitle: "Obtenir une soumission",
    formLead: "Parlez-moi de votre projet. Je répondrai avec le prix, l’échéancier et un lien vers votre maquette gratuite.",
    labels: {
      name: "Nom",
      email: "Courriel",
      budget: "Fourchette budgétaire",
      projectType: "Type de projet",
      notes: "Notes sur le projet"
    },
    placeholders: {
      name: "Camille Leduc",
      email: "vous@marque.com",
      notes: "Objectifs, pages, références, fonctionnalités à inclure..."
    },
    budgetOptions: ["Moins de 1 500 $", "1 500 $ – 3 000 $", "3 000 $ – 6 000 $", "Plus de 6 000 $"],
    projectOptions: ["Site marketing", "Commerce en ligne", "Application web", "Sprint page d'atterrissage", "Autre"],
    submit: "Envoyer la demande",
    submitting: "Envoi...",
    statusSuccess: "Envoyé. Je répondrai avec un prix détaillé et le lien de maquette gratuite.",
    statusError: "Un problème est survenu. Réessayez dans un instant.",
    copyright: "© 2026 Spaxio. Tous droits réservés.",
    nav: {
      hero: "Accueil",
      process: "Méthode",
      mock: "Maquette",
      quote: "Soumission",
      agent: "Agent de code"
    },
    agentTitle: "Agent de code : Codex",
    agentLead:
      "J'utilise Codex comme agent principal pour garantir rapidité, qualité et cohérence. Le code reste clair, typé et prêt pour Vercel.",
    agentList: [
      "Routes Next.js typées et API SMTP prêtes à l’emploi.",
      "Relectures automatiques pour la performance et l’accessibilité.",
      "Itérations rapides sur l’UI tout en respectant votre ton de marque."
    ]
  }
} satisfies Record<Lang, any>;

const initialForm = {
  name: "",
  email: "",
  budget: "",
  projectType: "",
  message: ""
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const t = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".scroll-image"));
    const onScroll = () => {
      const vh = window.innerHeight || 1;
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const offset = rect.top - vh * 0.5;
        el.style.setProperty("--parallax-offset", `${offset * -0.12}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || t.statusError);
      setStatus(t.statusSuccess);
      setForm(initialForm);
    } catch (err: any) {
      setStatus(err.message || t.statusError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="top-visual">
        <div className="scroll-image top" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80"
            alt=""
            loading="lazy"
          />
        </div>
        <header className="overlay-header">
          <div className="logo-banner">
            <img src="/logo.png" alt="Spaxio logo" />
          </div>
          <div className="nav">
            <a href="#hero">{t.nav.hero}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#mock">{t.nav.mock}</a>
            <a href="#quote">{t.nav.quote}</a>
            <a href="#agent">{t.nav.agent}</a>
            <button
              className="button secondary"
              style={{ padding: "10px 14px", borderRadius: 10 }}
              onClick={() => setLang("en")}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              className="button secondary"
              style={{ padding: "10px 14px", borderRadius: 10 }}
              onClick={() => setLang("fr")}
              aria-label="Passer au français"
            >
              FR
            </button>
          </div>
        </header>
      </section>

      <section className="hero" id="hero">
        <div className="badge">{t.badge}</div>
        <div className="hero-grid">
          <div>
            <h1 className="tagline">{t.headline}</h1>
            <p className="lead">{t.heroLead}</p>
            <div className="cta-row">
              <a className="button" href="#quote">{t.ctaQuote}</a>
              <a className="button secondary" href="#mock">{t.ctaMock}</a>
            </div>
            <div className="ribbon">{t.ribbon}</div>
          </div>
          <div className="cards">
            {t.cards.map((card: any) => (
              <div className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-image" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
          alt=""
          loading="lazy"
        />
      </section>

      <section id="mock">
        <h2>{t.mockTitle}</h2>
        <p className="lead">{t.mockLead}</p>
      </section>

      <section className="scroll-image" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=2000&q=80"
          alt=""
          loading="lazy"
        />
      </section>

      <section id="process">
        <h2>{t.processTitle}</h2>
        <div className="cards">
          {t.process.map((step: any) => (
            <div className="card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote">
        <div className="form-shell">
          <h2>{t.formTitle}</h2>
          <p className="lead">{t.formLead}</p>
          <form onSubmit={handleSubmit}>
            <label>
              {t.labels.name}
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.placeholders.name}
                name="name"
              />
            </label>
            <label>
              {t.labels.email}
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t.placeholders.email}
                name="email"
              />
            </label>
            <label>
              {t.labels.budget}
              <select
                required
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                name="budget"
              >
                <option value="" disabled>
                  {lang === "en" ? "Choose a range" : "Choisissez une fourchette"}
                </option>
                {t.budgetOptions.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {t.labels.projectType}
              <select
                required
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                name="projectType"
              >
                <option value="" disabled>
                  {lang === "en" ? "Select one" : "Sélectionnez"}
                </option>
                {t.projectOptions.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <label className="full">
              {t.labels.notes}
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.placeholders.notes}
                name="message"
              />
            </label>
            <div className="form-footer">
              <button className="button" type="submit" disabled={loading}>
                {loading ? t.submitting : t.submit}
              </button>
              {status && <span className="status">{status}</span>}
            </div>
          </form>
        </div>
      </section>

      <section id="agent">
        <h2>{t.agentTitle}</h2>
        <p className="lead">{t.agentLead}</p>
        <div className="cards">
          {t.agentList.map((item: string) => (
            <div className="card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p style={{ marginTop: "8px", color: "var(--muted)" }}>{t.copyright}</p>
      </footer>
    </main>
  );
}
