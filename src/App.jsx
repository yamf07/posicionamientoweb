import { useState, useEffect } from 'react';

// --- CONFIGURACIÓN ---
const GOOGLE_FORM_URL = "https://forms.gle/wqYTp9rsayfqM3tx9";
const WHATSAPP_URL = "https://wa.me/584142589521";
const PROFILE_IMAGE_URL = "perfil@2x.jpg";

// --- NAV LINKS ---
const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Contacto', href: '#contacto' },
];

// --- PAIN POINTS ---
const painPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    color: '#2563eb',
    bg: '#eff6ff',
    title: 'Visibilidad Móvil',
    desc: 'Hoy en día, casi todas las decisiones de compra empiezan en la pantalla de un celular. Si tu cliente ideal busca lo que vendes y no te ve de primero, simplemente no existes.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: '#ef4444',
    bg: '#fef2f2',
    title: 'Posicionamiento Local',
    desc: 'Domina tu zona geográfica. Un perfil sin horarios ni dirección exacta es una venta perdida que se va directo a tu competencia. Posiciónate donde te buscan.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: '#d97706',
    bg: '#fffbeb',
    title: 'Reputación Digital',
    desc: 'Las reseñas son la moneda del siglo XXI. Construimos una imagen de confianza total. No solo te encuentran, confían en ti desde el primer clic.'
  },
];

// --- SERVICES ---
const services = [
  {
    emoji: '🔍',
    title: 'SEO On-Page',
    desc: 'Optimización técnica profunda: velocidad, estructura, etiquetas y contenido que Google premia con posiciones top.',
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    emoji: '📍',
    title: 'Google My Business',
    desc: 'Domina el mapa de Google. Perfil optimizado, reseñas gestionadas y horarios perfectos para atraer clientes locales.',
    color: '#ef4444',
    bg: '#fef2f2',
  },
  {
    emoji: '📝',
    title: 'Contenido SEO',
    desc: 'Artículos y páginas construidas estratégicamente para capturar las búsquedas exactas de tu sector y convertir.',
    color: '#059669',
    bg: '#f0fdf4',
  },
  {
    emoji: '🔗',
    title: 'Link Building',
    desc: 'Construcción de autoridad y backlinks de calidad que impulsan tu dominio al tope de los resultados de búsqueda.',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    emoji: '📊',
    title: 'Auditoría de Visibilidad',
    desc: 'Diagnóstico completo y gratuito de dónde estás y exactamente qué necesitas para dominar tu nicho local.',
    color: '#d97706',
    bg: '#fffbeb',
  },
  {
    emoji: '🌐',
    title: 'Sitios Web Optimizados',
    desc: 'Diseño y desarrollo web con SEO integrado desde el primer día. Rápido, bonito y construido para convertir.',
    color: '#0891b2',
    bg: '#ecfeff',
  },
];

// --- PROCESS STEPS ---
const steps = [
  { num: '01', title: 'Auditoría Gratuita', desc: 'Analizamos tu negocio sin costo. Detectamos fugas de tráfico y oportunidades de crecimiento reales.' },
  { num: '02', title: 'Estrategia a Medida', desc: 'Diseñamos un plan personalizado de palabras clave y técnico adaptado a tu sector y zona.' },
  { num: '03', title: 'Implementación', desc: 'Ejecutamos con precisión y velocidad. Cambios técnicos, contenido y perfil Google optimizados.' },
  { num: '04', title: 'Resultados Medibles', desc: 'Reportes claros y transparentes. Ves exactamente cómo crece tu visibilidad cada semana.' },
];

// --- METRICS ---
const metrics = [
  { value: '+340%', label: 'Aumento en visibilidad orgánica', sub: 'promedio en 6 meses' },
  { value: 'Top 3', label: 'Posición en Google Maps', sub: 'resultado promedio' },
  { value: '+180', label: 'Días de seguimiento continuo', sub: 'sin abandonarte' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [showWA, setShowWA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleScroll = () => {
      // Detectamos si el scroll ha pasado los 400px (aprox el final del hero)
      if (window.scrollY > 400) {
        setShowWA(true);
      } else {
        setShowWA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCta = () => window.open(GOOGLE_FORM_URL, '_blank');
  const handleWhatsApp = () => window.open(WHATSAPP_URL, '_blank');

  return (
    <div className="seo-app">
      {/* ======================== NAVBAR ======================== */}
      <header className={`seo-nav ${scrolled ? 'seo-nav--scrolled' : ''}`}>
        <div className="seo-nav__inner">
          <a href="#inicio" className="seo-nav__logo" onClick={() => setMenuOpen(false)}>
            <div className="seo-nav__logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="seo-nav__logo-text">
              <span className="seo-nav__brand">SEO ESTRATÉGICO</span>
              <span className="seo-nav__tagline">Servicios Digitales</span>
            </div>
          </a>

          <nav className="seo-nav__links hide-mobile">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={() => setActiveSection(link.href.replace('#', ''))}
              >
                {link.label}
              </a>
            ))}
            <button id="nav-cta-btn" className="seo-nav__cta animate-pulse-glow" onClick={handleCta}>
              Diagnóstico Gratis
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>
          </nav>

          <button
            id="mobile-menu-btn"
            className="seo-nav__hamburger hide-desktop"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="seo-nav__mobile-menu">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button id="mobile-cta-btn" className="seo-nav__cta" onClick={() => { handleCta(); setMenuOpen(false); }}>
              Diagnóstico Gratis
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>
          </div>
        )}
      </header>

      <main>
        {/* ======================== HERO ======================== */}
        <section id="inicio" className="section seo-hero-section">
          <div className="section-inner">
            <div className="seo-hero-card animate-slide-up">
              {/* Decorative blobs */}
              <div className="seo-hero__blob seo-hero__blob--1"></div>
              <div className="seo-hero__blob seo-hero__blob--2"></div>

              <div className="seo-hero__content">
                <div className="badge animate-fade-in">
                  <span className="badge-dot"></span>
                  Agenda tu consultoría hoy — Sin compromiso
                </div>

                <h1 className="seo-hero__title">
                  Tu negocio merece ser el{' '}
                  <span className="gradient-text">Número 1</span>
                  {' '}en Google
                </h1>

                <p className="seo-hero__subtitle">
                  Aparece primero cuando tus clientes te buscan. Optimización SEO local, Google Maps
                  y presencia digital que convierte visitas en clientes reales y ventas concretas.
                </p>

                <div className="seo-hero__actions">
                  <a id="hero-ver-servicios-btn" href="#servicios" className="btn-cta">
                    Ver Servicios
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </a>
                  <button id="hero-diagnostico-btn" className="btn-secondary" onClick={handleCta}>
                    Obtén tu Diagnóstico Gratis
                  </button>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="seo-hero__stats">
                <div className="seo-stat-card animate-float">
                  <span className="seo-stat-card__value gradient-text">+340%</span>
                  <span className="seo-stat-card__label">Visibilidad</span>
                </div>
                <div className="seo-stat-card animate-float-delay">
                  <span className="seo-stat-card__value gradient-text">Top 3</span>
                  <span className="seo-stat-card__label">Google Maps</span>
                </div>
                <div className="seo-stat-card animate-float-delay-2">
                  <span className="seo-stat-card__value gradient-text">97%</span>
                  <span className="seo-stat-card__label">Satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================== PAIN POINTS ======================== */}
        <section className="section">
          <div className="section-inner">
            <div className="seo-section-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 className="section-title" style={{ color: '#0f172a' }}>¿Por qué necesitas SEO?</h2>
              <p className="section-subtitle" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
                Sin visibilidad digital, tu negocio es invisible para miles de clientes potenciales que buscan exactamente lo que ofreces.
              </p>
            </div>
            <div className="grid-3">
              {painPoints.map((p, i) => (
                <div key={i} className="seo-pain-card card-hover">
                  <div className="seo-pain-card__icon" style={{ background: p.bg, color: p.color }}>
                    {p.icon}
                  </div>
                  <h3 className="seo-pain-card__title">{p.title}</h3>
                  <p className="seo-pain-card__desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================== SERVICES ======================== */}
        <section id="servicios" className="section" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="section-inner">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="seo-eyebrow">Estrategia Completa</div>
              <h2 className="section-title" style={{ color: '#0f172a', marginTop: '0.75rem' }}>Servicios de SEO Diseñados para Ganar</h2>
              <p className="section-subtitle" style={{ maxWidth: '620px', margin: '1rem auto 0' }}>
                Soluciones 360° para que tu negocio no solo aparezca en Google, sino que lo domine.
              </p>
            </div>
            <div className="grid-3">
              {services.map((s, i) => (
                <div key={i} className="seo-service-card card-hover">
                  <div className="seo-service-card__emoji-box" style={{ background: s.bg, color: s.color }}>
                    <span className="seo-service-card__emoji">{s.emoji}</span>
                  </div>
                  <h3 className="seo-service-card__title">{s.title}</h3>
                  <p className="seo-service-card__desc">{s.desc}</p>
                  <button
                    id={`service-cta-${i}-btn`}
                    className="seo-service-card__link"
                    style={{ color: s.color }}
                    onClick={handleCta}
                  >
                    Quiero este servicio
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================== PROCESS ======================== */}
        <section id="proceso" className="section">
          <div className="section-inner">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="seo-eyebrow">Metodología Probada</div>
              <h2 className="section-title" style={{ color: '#0f172a', marginTop: '0.75rem' }}>Cómo Trabajamos</h2>
              <p className="section-subtitle" style={{ maxWidth: '560px', margin: '1rem auto 0' }}>
                Un proceso claro, transparente y enfocado en resultados medibles desde el día uno.
              </p>
            </div>
            <div className="seo-process-grid">
              {steps.map((step, i) => (
                <div key={i} className="seo-process-step">
                  <div className="seo-process-step__num">{step.num}</div>
                  {i < steps.length - 1 && <div className="seo-process-step__line hide-mobile"></div>}
                  <div className="seo-process-step__body">
                    <h4 className="seo-process-step__title">{step.title}</h4>
                    <p className="seo-process-step__desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================== RESULTS ======================== */}
        <section id="resultados" className="section seo-results-section">
          <div className="section-inner">
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="seo-eyebrow" style={{ color: '#60a5fa', borderColor: 'rgba(96,165,250,0.3)' }}>Prueba Social</div>
              <h2 className="section-title shimmer-text" style={{ marginTop: '0.75rem' }}>Resultados que Hablan</h2>
              <p className="section-subtitle" style={{ maxWidth: '540px', margin: '1rem auto 0', color: '#94a3b8' }}>
                Negocios como el tuyo que confiaron en la estrategia correcta y cambiaron su historia digital.
              </p>
            </div>

            <div className="grid-3" style={{ marginBottom: '3rem' }}>
              {metrics.map((m, i) => (
                <div key={i} className="seo-metric-card glass">
                  <span className="seo-metric-card__value gradient-text animate-count-up">{m.value}</span>
                  <span className="seo-metric-card__label">{m.label}</span>
                  <span className="seo-metric-card__sub">{m.sub}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="seo-testimonial glass">
              <div className="seo-testimonial__quote-icon">"</div>
              <p className="seo-testimonial__text">
                Tener el negocio en el mapa no servía de nada si nadie nos encontraba al buscar 'cerca de mí'. Entendimos que estar en Google es una cosa, pero posicionarse para ganar es otra muy distinta. Gracias al plan estratégico, pasamos de ser una opción más a ser la primera llamada que hacen nuestros clientes locales.
              </p>
              <div className="seo-testimonial__author">
                <div className="seo-testimonial__avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div>
                  <strong style={{ color: '#fff', display: 'block' }}>Cliente Satisfecho</strong>
                  <span style={{ color: '#60a5fa', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Negocio Local · Venezuela</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================== MAIN CTA ======================== */}
        <section className="section seo-cta-section">
          <div className="section-inner" style={{ textAlign: 'center' }}>
            <div className="seo-cta-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
            </div>
            <h2 className="section-title" style={{ color: '#0f172a', marginBottom: '1.25rem' }}>
              ¿Hacemos brillar tu negocio en Google?
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              No dejes que los nuevos consumidores pasen de largo. Las nuevas generaciones dependen cada vez más de internet.
              Obtén tu diagnóstico de visibilidad gratuito y personalizado hoy mismo.
            </p>
            <button id="main-cta-btn" className="seo-main-cta-btn glow-blue" onClick={handleCta}>
              ¡Consulta Gratis Ahora!
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </button>
            <p style={{ marginTop: '1rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600 }}>
              Sin compromisos · Respuesta en 24 horas · 100% Gratuito
            </p>
          </div>
        </section>
        <div>
          <a href={WHATSAPP_URL} className={`whatsapp-float ${showWA ? 'whatsapp-float--visible' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-float__icon">
              <img width="32" height="32" src="https://img.icons8.com/badges/48/whatsapp.png" alt="whatsapp" />
            </span>
            <span class="whatsapp-float__text">¿Hablamos?</span>
          </a>
        </div>
      </main>

      {/* ======================== FOOTER ======================== */}
      <footer id="contacto" className="seo-footer">
        <div className="seo-footer__glow"></div>
        <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="seo-footer__grid">
            {/* Profile / About */}
            <div className="seo-footer__about">
              <div className="seo-footer__profile">
                <div className="seo-footer__avatar">
                  <img src={PROFILE_IMAGE_URL} alt="Yeirinson Mejias" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h4 className="seo-footer__name">Yeirinson Mejias</h4>
                  <span className="seo-footer__role">Estratega y Diseñador Digital</span>
                </div>
              </div>
              <p className="seo-footer__bio">
                Servicios de desarrollo web e identidad visual. Transformo negocios a través de diseño moderno,
                optimización SEO y estrategias de conversión en Google Maps.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <a href="#servicios" className="nav-link" style={{ color: '#94a3b8' }}>Servicios</a>
                <a href="#proceso" className="nav-link" style={{ color: '#94a3b8' }}>Proceso</a>
                <a href="#resultados" className="nav-link" style={{ color: '#94a3b8' }}>Resultados</a>
              </div>
            </div>

            {/* Contact */}
            <div className="seo-footer__contact">
              <button id="whatsapp-btn" className="seo-whatsapp-btn" onClick={handleWhatsApp}>
                <div className="seo-whatsapp-btn__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>WhatsApp Directo</p>
                  <p style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 900, margin: 0 }}>+58 414 2589521</p>
                </div>
              </button>

              <button id="footer-diagnostico-btn" className="seo-footer__cta-outline" onClick={handleCta}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                Diagnóstico Gratuito
              </button>
            </div>
          </div>

          <div className="seo-footer__bottom">
            <span>SEO Estratégico en Venezuela &copy; 2026</span>
            <span style={{ color: '#334155', fontSize: '0.8rem' }}>Diseño web · SEO Local · Google Maps</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
