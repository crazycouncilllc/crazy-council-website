import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Flame,
  Handshake,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Truck,
  Wrench,
} from 'lucide-react';
import { motion } from 'framer-motion';

const contactEmail = 'support@crazycouncilllc.com';
const contactPhoneDisplay = '352-723-7893';
const contactPhoneHref = 'tel:3527237893';

// Embedded preview image. For the deployed site, you can replace this with '/header.png'
// after placing the full-size image at public/header.png.
const HEADER_IMAGE = 'data:image/webp;base64,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';

const services = [
  {
    icon: <PackageCheck />,
    title: 'Retail Products',
    text: 'Customer-focused retail built around dependable products, practical value, and a brand that stands out.',
  },
  {
    icon: <Truck />,
    title: 'Sourcing & Fulfillment',
    text: 'A growing retail operation focused on finding products, managing suppliers, and serving customers with consistency.',
  },
  {
    icon: <Wrench />,
    title: 'IT Services',
    text: 'Crazy Council works alongside Gator-IT to help you find technology solutions, IT support, and services that fit your needs.',
  },
  {
    icon: <Handshake />,
    title: 'Custom Orders',
    text: 'Need something different? Send the idea, and Crazy Council can help bring bold custom merchandise concepts to life.',
  },
];

const steps = [
  'Build a strong retail foundation.',
  'Create a bold, recognizable brand.',
  'Serve customers with straight answers and dependable support.',
  'Work alongside Gator-IT to help provide IT solutions and services.',
];

export function runContentTests() {
  const failures = [];

  if (!contactEmail.includes('@')) failures.push('Contact email should contain @.');
  if (contactPhoneDisplay !== '352-723-7893') failures.push('Phone display should be formatted correctly.');
  if (!contactPhoneHref.startsWith('tel:')) failures.push('Phone link should use tel:.');
  if (services.length < 4) failures.push('Expected at least four service cards.');
  if (!services.some((service) => service.title === 'IT Services')) failures.push('Expected an IT Services card.');
  if (!steps.some((step) => step.includes('Gator-IT'))) failures.push('Expected process steps to mention Gator-IT.');
  if (!HEADER_IMAGE.startsWith('data:image/')) failures.push('Header image should be embedded for preview.');

  return { passed: failures.length === 0, failures };
}

function SiteStyles() {
  return (
    <style>{`
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; background: #120c07; }
      .site-shell {
        min-height: 100vh;
        color: #fff8ec;
        background:
          radial-gradient(circle at top left, rgba(180, 83, 9, .28), transparent 36%),
          radial-gradient(circle at 80% 20%, rgba(127, 29, 29, .22), transparent 30%),
          linear-gradient(135deg, #120c07 0%, #23150b 46%, #0d0b09 100%);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      .site-header {
        background: #100b07;
        border-bottom: 1px solid rgba(255, 248, 236, .12);
      }
      .header-art-wrap {
        position: relative;
        overflow: hidden;
        min-height: clamp(260px, 42vw, 620px);
        background:
          linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.1), rgba(0,0,0,.72)),
          radial-gradient(circle at 50% 10%, rgba(245, 158, 11, .32), transparent 35%),
          linear-gradient(135deg, #2a1208, #0a0705 58%, #3b1609);
      }
      .header-art-wrap::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: .2;
        background-image:
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px);
        background-size: 34px 34px;
      }
      .header-art {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        background: transparent;
      }
      .fallback-header {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        padding: 34px;
        text-align: center;
      }
      .fallback-header-inner {
        max-width: 1100px;
        width: min(100%, 1100px);
        padding: clamp(28px, 6vw, 76px) clamp(18px, 5vw, 60px);
        border: 2px solid rgba(245, 158, 11, .45);
        border-radius: 28px;
        background:
          linear-gradient(145deg, rgba(0,0,0,.62), rgba(120, 53, 15, .42)),
          repeating-linear-gradient(0deg, rgba(255,255,255,.04), rgba(255,255,255,.04) 1px, transparent 1px, transparent 7px);
        box-shadow: 0 28px 90px rgba(0,0,0,.5), inset 0 0 0 1px rgba(255,255,255,.08);
      }
      .fallback-kicker {
        color: #dc2626;
        letter-spacing: .22em;
        font-weight: 950;
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      .fallback-title {
        font-size: clamp(54px, 12vw, 160px);
        line-height: .78;
        letter-spacing: -.08em;
        font-weight: 1000;
        color: #d7c2a0;
        text-shadow: 0 8px 0 rgba(0,0,0,.45), 0 0 28px rgba(245,158,11,.18);
      }
      .fallback-subtitle {
        margin-top: 18px;
        color: #fbbf24;
        font-weight: 950;
        letter-spacing: .16em;
        text-transform: uppercase;
      }
      .fallback-tagline {
        margin: 18px auto 0;
        max-width: 680px;
        color: #fff8ec;
        font-size: clamp(16px, 2.4vw, 22px);
        font-weight: 900;
      }
      .topbar {
        position: sticky;
        top: 0;
        z-index: 30;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 16px clamp(18px, 4vw, 54px);
        border-top: 1px solid rgba(255, 248, 236, .12);
        border-bottom: 1px solid rgba(255, 248, 236, .12);
        background: rgba(16, 11, 7, .96);
        backdrop-filter: blur(14px);
      }
      .header-contact {
        display: flex;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
      }
      .header-contact a {
        color: #fff8ec;
        text-decoration: none;
        font-weight: 900;
        display: inline-flex;
        align-items: center;
        gap: 9px;
        font-size: 14px;
      }
      .header-contact a:hover { color: #fbbf24; }
      nav { display: flex; align-items: center; gap: 26px; }
      nav a { color: #e7d8bf; text-decoration: none; font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: .08em; }
      nav a:hover { color: #fbbf24; }
      .primary, .secondary, .dark-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 999px;
        text-decoration: none;
        font-weight: 950;
        transition: transform .18s ease, background .18s ease, border-color .18s ease;
      }
      .primary:hover, .secondary:hover, .dark-button:hover { transform: translateY(-2px); }
      .hero {
        position: relative;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1.1fr .9fr;
        gap: clamp(30px, 5vw, 70px);
        align-items: center;
        padding: clamp(72px, 10vw, 130px) clamp(18px, 4vw, 54px);
      }
      .grain {
        position: absolute;
        inset: 0;
        opacity: .16;
        pointer-events: none;
        background-image:
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px);
        background-size: 28px 28px;
        mask-image: radial-gradient(circle at center, black, transparent 75%);
      }
      .hero-copy, .hero-card { position: relative; z-index: 1; }
      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        color: #fbbf24;
        background: rgba(245, 158, 11, .12);
        border: 1px solid rgba(245, 158, 11, .32);
        border-radius: 999px;
        padding: 10px 14px;
        font-weight: 900;
        margin-bottom: 24px;
      }
      h1, h2, h3, p { margin-top: 0; }
      h1 {
        max-width: 760px;
        font-size: clamp(48px, 8vw, 96px);
        line-height: .92;
        letter-spacing: -.07em;
        margin-bottom: 26px;
      }
      .hero-copy > p {
        max-width: 710px;
        color: #e7d8bf;
        font-size: clamp(18px, 2vw, 22px);
        line-height: 1.7;
        margin-bottom: 34px;
      }
      .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }
      .primary {
        border: 0;
        background: #f59e0b;
        color: #1b1008;
        padding: 16px 24px;
        cursor: pointer;
        font-size: 15px;
      }
      .secondary {
        color: #fff8ec;
        border: 1px solid rgba(255, 248, 236, .24);
        background: rgba(255,255,255,.06);
        padding: 16px 24px;
      }
      .hero-card {
        border: 1px solid rgba(255, 248, 236, .14);
        border-radius: 34px;
        padding: clamp(26px, 4vw, 42px);
        background: linear-gradient(145deg, rgba(120, 53, 15, .54), rgba(28, 18, 10, .72));
        box-shadow: 0 24px 80px rgba(0,0,0,.42), inset 0 0 0 1px rgba(255,255,255,.05);
      }
      .mini-logo {
        display: grid;
        place-items: center;
        width: 112px;
        height: 112px;
        margin-bottom: 24px;
        border: 3px solid #f59e0b;
        border-radius: 50%;
        color: #fbbf24;
        font-weight: 950;
        font-size: 34px;
        letter-spacing: -9px;
        transform: rotate(-8deg);
        background: rgba(0,0,0,.36);
      }
      .hero-card h2 { font-size: clamp(28px, 3.4vw, 44px); line-height: 1; margin-bottom: 22px; }
      .hero-card ul { padding: 0; margin: 0; list-style: none; display: grid; gap: 16px; }
      .hero-card li { display: flex; align-items: center; gap: 12px; color: #f5ead7; font-weight: 700; }
      .hero-card svg { color: #fbbf24; min-width: 22px; }
      .section, .split, .contact-section, .cta-block, footer {
        margin-inline: auto;
        width: min(1180px, calc(100% - 36px));
      }
      .section { padding: 86px 0; }
      .section-title { max-width: 760px; margin-bottom: 34px; }
      .section-title p, .label {
        color: #fbbf24;
        text-transform: uppercase;
        letter-spacing: .28em;
        font-size: 13px;
        font-weight: 950;
        margin-bottom: 10px;
      }
      .section-title h2, .split h2, .contact-copy h2, .cta-block h2 {
        font-size: clamp(36px, 5vw, 62px);
        line-height: 1;
        letter-spacing: -.05em;
        margin-bottom: 0;
      }
      .grid.four { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
      .service-card {
        border: 1px solid rgba(255, 248, 236, .12);
        border-radius: 28px;
        background: rgba(255,255,255,.055);
        padding: 28px;
        min-height: 285px;
      }
      .service-card .icon {
        width: 58px;
        height: 58px;
        display: grid;
        place-items: center;
        border-radius: 18px;
        background: #f59e0b;
        color: #1b1008;
        margin-bottom: 22px;
      }
      .service-card h3 { font-size: 22px; margin-bottom: 12px; }
      .service-card p, .copy p, .contact-copy p, .cta-block p, .small-note { color: #e7d8bf; line-height: 1.72; }
      .split {
        display: grid;
        grid-template-columns: .9fr 1.1fr;
        gap: 48px;
        padding: 74px clamp(22px, 4vw, 46px);
        border: 1px solid rgba(255, 248, 236, .12);
        border-radius: 34px;
        background: rgba(255,255,255,.045);
      }
      .copy { font-size: 18px; }
      .steps { display: grid; gap: 16px; }
      .step {
        display: flex;
        align-items: center;
        gap: 18px;
        border: 1px solid rgba(255, 248, 236, .12);
        border-radius: 24px;
        background: rgba(255,255,255,.05);
        padding: 20px;
      }
      .step span {
        width: 48px;
        height: 48px;
        display: grid;
        place-items: center;
        border-radius: 16px;
        background: #f59e0b;
        color: #1b1008;
        font-weight: 950;
        flex: 0 0 auto;
      }
      .step p { margin: 0; color: #fff8ec; font-weight: 800; font-size: 18px; }
      .cta-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 28px;
        padding: clamp(28px, 5vw, 50px);
        border-radius: 34px;
        background: linear-gradient(145deg, #f59e0b, #b45309);
        color: #1b1008;
        box-shadow: 0 24px 70px rgba(0,0,0,.34);
      }
      .cta-block svg { width: 40px; height: 40px; margin-bottom: 12px; }
      .cta-block p { color: rgba(27, 16, 8, .82); font-weight: 700; max-width: 760px; margin-bottom: 0; }
      .dark-button { background: #140f0a; color: #fff8ec; padding: 16px 24px; white-space: nowrap; }
      .contact-section {
        display: grid;
        grid-template-columns: .9fr 1.1fr;
        gap: 42px;
        padding: 90px 0;
        align-items: start;
      }
      .contact-lines { margin-top: 26px; display: grid; gap: 12px; }
      .contact-lines p { display: flex; align-items: center; gap: 12px; margin: 0; color: #fff8ec; font-weight: 800; }
      .contact-lines svg { color: #fbbf24; width: 20px; }
      .contact-card {
        border: 1px solid rgba(255, 248, 236, .12);
        border-radius: 34px;
        padding: clamp(24px, 4vw, 38px);
        background: rgba(255,255,255,.06);
        display: grid;
        gap: 18px;
      }
      label { display: grid; gap: 8px; color: #fff8ec; font-weight: 900; }
      input, textarea {
        width: 100%;
        border: 1px solid rgba(255, 248, 236, .16);
        border-radius: 18px;
        padding: 14px 16px;
        background: rgba(10, 8, 6, .76);
        color: #fff8ec;
        font: inherit;
        outline: none;
      }
      input:focus, textarea:focus { border-color: #f59e0b; box-shadow: 0 0 0 3px rgba(245,158,11,.16); }
      textarea { min-height: 132px; resize: vertical; }
      .full { width: 100%; }
      .small-note { margin: 0; font-size: 12px; }
      footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 28px 0 42px;
        color: #e7d8bf;
        border-top: 1px solid rgba(255, 248, 236, .1);
      }
      .footer-brand { font-weight: 950; font-size: 24px; letter-spacing: -.04em; }
      footer p { margin: 0; color: #e7d8bf; }
      @media (max-width: 980px) {
        .topbar { align-items: flex-start; flex-direction: column; }
        .header-contact { width: 100%; justify-content: space-between; }
        nav { display: none; }
        .hero, .split, .contact-section { grid-template-columns: 1fr; }
        .grid.four { grid-template-columns: repeat(2, 1fr); }
        .cta-block { align-items: flex-start; flex-direction: column; }
      }
      @media (max-width: 640px) {
        .header-art-wrap { min-height: 280px; }
        .header-contact { align-items: flex-start; flex-direction: column; gap: 10px; }
        .topbar { align-items: flex-start; flex-direction: column; }
        .grid.four { grid-template-columns: 1fr; }
        .hero { padding-top: 54px; }
        footer { align-items: flex-start; flex-direction: column; }
      }
    `}</style>
  );
}

function HeaderArtwork() {
  const handleImageError = (event) => {
    event.currentTarget.style.display = 'none';
  };

  return (
    <div className="header-art-wrap" aria-label="Crazy Council LLC rustic outlaw header">
      <div className="fallback-header" aria-hidden="true">
        <div className="fallback-header-inner">
          <div className="fallback-kicker">Crazy Council LLC</div>
          <div className="fallback-title">CRAZY<br />COUNCIL</div>
          <div className="fallback-subtitle">Rustic Retail & Merchandise</div>
          <div className="fallback-tagline">We’re not normal. Neither is our merch.</div>
        </div>
      </div>
      <img className="header-art" src={HEADER_IMAGE} alt="Crazy Council LLC rustic outlaw header" onError={handleImageError} />
    </div>
  );
}

function ContactForm() {
  const web3FormsKey =
    typeof import.meta !== 'undefined' && import.meta.env
      ? import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
      : '';
  const formAction = web3FormsKey ? 'https://api.web3forms.com/submit' : `mailto:${contactEmail}`;

  return (
    <form className="contact-card" action={formAction} method="POST">
      {web3FormsKey && <input type="hidden" name="access_key" value={web3FormsKey} />}
      <input type="hidden" name="subject" value="New Crazy Council LLC Website Lead" />
      <input type="hidden" name="from_name" value="Crazy Council LLC Website" />

      <label>
        Name
        <input name="name" required placeholder="Your name" />
      </label>

      <label>
        Email
        <input name="email" type="email" required placeholder="you@example.com" />
      </label>

      <label>
        Phone
        <input name="phone" placeholder="Optional phone number" />
      </label>

      <label>
        What are you looking for?
        <textarea name="message" required placeholder="Tell us what product, service, or IT need you have." />
      </label>

      <button className="primary full" type="submit">Send Message</button>

      <p className="small-note">
        To send directly to your Microsoft 365 mailbox, add a Web3Forms access key to Cloudflare Pages as VITE_WEB3FORMS_ACCESS_KEY.
      </p>
    </form>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <SiteStyles />

      <header className="site-header">
        <HeaderArtwork />
        <div className="topbar">
          <div className="header-contact">
            <a href={`mailto:${contactEmail}`}><Mail size={18} /> {contactEmail}</a>
            <a href={contactPhoneHref}><Phone size={18} /> {contactPhoneDisplay}</a>
          </div>

          <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#services">Shop</a>
            <a href="#about">About Us</a>
            <a href="#process">Custom Orders</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="grain" />

          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow"><Flame size={18} /> Rustic retail with an outlaw edge</div>
            <h1>Built Different. Driven Forward.</h1>
            <p>
              Crazy Council LLC is a retail-focused company built around quality products, honest service, and practical solutions. We also work alongside Gator-IT to help customers find the right IT services for their needs.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#contact">Contact Crazy Council <ArrowRight size={18} /></a>
              <a className="secondary" href="#services">See What We Do</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="mini-logo"><span>C</span><span>C</span></div>
            <h2>Retail today. Services that grow with you.</h2>
            <ul>
              <li><CheckCircle2 /> Retail products and customer support</li>
              <li><CheckCircle2 /> Product sourcing and brand growth</li>
              <li><CheckCircle2 /> IT service support alongside Gator-IT</li>
              <li><CheckCircle2 /> Built for future online store expansion</li>
            </ul>
          </motion.div>
        </section>

        <section className="section" id="services">
          <div className="section-title">
            <p>Services</p>
            <h2>A retail brand with real-world solutions.</h2>
          </div>
          <div className="grid four">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split" id="about">
          <div>
            <p className="label">About</p>
            <h2>Bold, practical, and built to grow.</h2>
          </div>
          <div className="copy">
            <p>Crazy Council LLC is creating a retail presence with a strong identity and room to expand. The company is designed around product sales, customer relationships, and practical service connections.</p>
            <p>For technology needs, Crazy Council works alongside Gator-IT to help connect customers with dependable IT support, business technology solutions, and guidance that fits their situation.</p>
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-title">
            <p>Our Direction</p>
            <h2>Simple steps. Strong foundation.</h2>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-block">
          <div>
            <BadgeCheck />
            <h2>Need products, support, or IT direction?</h2>
            <p>Start with Crazy Council. For technology needs, we work alongside Gator-IT to help find the right path forward.</p>
          </div>
          <a className="dark-button" href="#contact">Start the Conversation</a>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="label">Contact</p>
            <h2>Connect with Crazy Council LLC.</h2>
            <p>The form is ready to connect to your Microsoft 365 inbox using a Web3Forms key in Cloudflare Pages.</p>
            <div className="contact-lines">
              <p><Phone /> {contactPhoneDisplay}</p>
              <p><Mail /> {contactEmail}</p>
              <p><MapPin /> Serving customers across Florida and beyond</p>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer>
        <div className="footer-brand">Crazy Council LLC</div>
        <p>© {new Date().getFullYear()} Crazy Council LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
