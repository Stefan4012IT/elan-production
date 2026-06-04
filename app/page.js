'use client';

import { useEffect, useRef, useState } from 'react';

const content = {
  sr: {
    nav: {
      club: 'Klub',
      membership: 'Članstvo',
      apply: 'Prijava',
      label: 'Glavna navigacija',
    },
    hero: {
      eyebrow: 'Women’s Private Gym',
      title: 'A different kind of gym.',
      text: 'ÉLAN je zajednica žena koje ulažu u svoje zdravlje, snagu i kvalitet života.',
      primary: 'Join the Waiting List',
      secondary: 'O ÉLAN',
    },
    statement: {
      kicker: 'Beyond Training',
      title: 'O ÉLAN',
      text: 'ÉLAN je privatna teretana za žene osmišljena kao alternativa tradicionalnim fitness centrima. Prostor u kome su privatnost, kvalitet treninga i atmosfera podjednako važni kao i rezultati.',
      note: 'Bez gužve. Bez čekanja na sprave. Bez univerzalnih programa.',
    },
    difference: {
      kicker: 'The ÉLAN Experience',
      title: 'More focus. Less distraction.',
      items: [
        {
          eyebrow: 'Limited Membership',
          title: 'Ograničen broj članica',
          text: 'Kvalitet treninga počinje kvalitetom okruženja, zato je broj članica namerno ograničen.',
        },
        {
          eyebrow: 'Guided Training',
          title: 'Stručan nadzor',
          text: 'Svi treninzi su vođeni uz prisustvo trenera, sa jasnom strukturom i fokusom na bezbedan napredak.',
        },
        {
          eyebrow: 'Individual Approach',
          title: 'Program prema vama',
          text: 'Plan treninga se prilagođava vašem iskustvu, ciljevima, tempu i individualnim potrebama.',
        },
        {
          eyebrow: 'Boutique Environment',
          title: 'Premium prostor',
          text: 'Savremena oprema, funkcionalan enterijer i atmosfera koja podržava disciplinu, fokus i doslednost.',
        },
      ],
    },
    ease: {
      kicker: 'Booking Policy',
      title: 'Planirano. Fleksibilno. Jednostavno.',
      text: 'Svi paketi važe na mesečnom nivou. Prilikom učlanjenja rezervišu se željeni termini treninga, a organizacija ostaje jasna, pregledna i prilagođena vašem rasporedu.',
      note: 'U slučaju sprečenosti, termin je moguće blagovremeno otkazati putem aplikacije.',
      items: [
        'Blagovremeno otkazani termini neće biti obračunati',
        'Termin se može nadoknaditi u prvom dostupnom terminu',
        'Fleksibilnost za članice uz očuvanje kvaliteta treninga',
      ],
      locality: [
        {
          eyebrow: 'Planned',
          text: 'Željeni termini se rezervišu unapred',
        },
        {
          eyebrow: 'Flexible',
          text: 'Promene rasporeda se rešavaju kroz aplikaciju',
        },
        {
          eyebrow: 'Simple',
          text: 'Organizacija treninga ostaje jasna i nenametljiva',
        },
      ],
    },
    membership: {
      kicker: 'Membership',
      title: 'Limited Membership',
      note: 'Memberships designed around your goals, schedule and progress. Članstvo je dostupno putem prijave.',
      highlights: [
        'Limited membership',
        'Guided training',
        'Individual approach',
      ],
      items: [
        {
          name: 'FOCUS',
          detail: '8 treninga mesečno',
          price: '20.000 RSD',
          description:
            'Za one koje žele kontinuitet i ravnotežu između treninga i svakodnevnih obaveza.',
        },
        {
          name: 'DISCIPLINE',
          detail: '10 treninga mesečno',
          price: '22.000 RSD',
          description:
            'Za one koje veruju da rezultati dolaze kroz doslednost i posvećen rad.',
        },
        {
          name: 'STRENGTH',
          detail: '12 treninga mesečno',
          price: '24.000 RSD',
          description:
            'Za one koje žele maksimalnu podršku, napredak i posvećenost svojim ciljevima.',
        },
        {
          name: 'SINGLE SESSION',
          detail: 'Pojedinačni trening',
          price: '3.000 RSD',
          description:
            'Jedan vođeni trening za upoznavanje sa ÉLAN pristupom ili fokusiran rad na određenom cilju.',
        },
      ],
    },
    space: {
      kicker: 'The Space',
      title: 'Boutique by design.',
      text: 'Svaki detalj prostora pažljivo je biran kako bi stvorio okruženje koje inspiriše disciplinu, fokus i doslednost. Minimalistički enterijer, premium oprema i atmosfera koja omogućava da trening bude upravo ono što treba da bude — vreme posvećeno sebi.',
      panel: 'Boutique Training Environment',
    },
    audience: {
      kicker: 'Training',
      title: 'Designed around women.',
      text: 'Trening programi kreirani su da podrže snagu, zdravlje i dugoročne rezultate. Bez univerzalnih pristupa. Bez fitness trendova. Fokus na ono što funkcioniše.',
      items: [
        'Inicijalne konsultacije za razumevanje ciljeva i polaznog nivoa',
        'Program prilagođen tempu, mogućnostima i željenim rezultatima',
        'Vođeni termini uz stručni nadzor trenera',
        'Kontinuitet, sigurnost i napredak u skladu sa svakom članicom',
      ],
    },
    application: {
      kicker: 'Join the Waiting List',
      title: 'Budite među prvima.',
      text: 'Broj članica je ograničen. Prijavite se na listu zainteresovanih i budite među prvima koje će dobiti informacije o otvaranju i upisu.',
      name: 'Ime',
      email: 'Email',
      phone: 'Telefon',
      focus: 'Trening fokus',
      focusPlaceholder: 'Nisam još odlučila',
      cta: 'Prijavi se',
      submit: 'Join the Waiting List',
      success: 'Prijava je poslata.',
      successTitle: 'Prijava je primljena.',
      successText:
        'Hvala na interesovanju za ÉLAN. Javićemo se uskoro sa sledećim koracima.',
      successClose: 'Zatvori',
      error: 'Slanje trenutno nije uspelo.',
      blocked: 'Slanje nije prihvaćeno.',
    },
    footer: {
      line: 'Women’s Private Gym · Focus · Discipline · Strength',
      addressLabel: 'Location',
      address: 'Ivankovačka 6, Belgrade · Opening soon',
      phoneLabel: 'Telefon',
      phone: 'Kontakt telefon',
      socialLabel: 'Društvene mreže',
    },
  },
  en: {
    nav: {
      club: 'Club',
      membership: 'Membership',
      apply: 'Apply',
      label: 'Main navigation',
    },
    hero: {
      eyebrow: 'Women’s Private Gym',
      title: 'A different kind of gym.',
      text: 'ÉLAN is a community for women who invest in their health, strength and quality of life.',
      primary: 'Join the Waiting List',
      secondary: 'About ÉLAN',
    },
    statement: {
      kicker: 'Beyond Training',
      title: 'About ÉLAN',
      text: 'ÉLAN is a private gym for women, designed as an alternative to traditional fitness centres. A space where privacy, training quality and atmosphere matter as much as results.',
      note: 'No crowding. No waiting for equipment. No generic programs.',
    },
    difference: {
      kicker: 'The ÉLAN Experience',
      title: 'More focus. Less distraction.',
      items: [
        {
          eyebrow: 'Limited Membership',
          title: 'Limited number of members',
          text: 'Training quality begins with the quality of the environment, which is why membership is intentionally limited.',
        },
        {
          eyebrow: 'Guided Training',
          title: 'Guided Training',
          text: 'Every session is guided by a trainer, with clear structure and focus on safe progress.',
        },
        {
          eyebrow: 'Individual Approach',
          title: 'Designed around you',
          text: 'Training plans are adapted to your experience, goals, rhythm and individual needs.',
        },
        {
          eyebrow: 'Boutique Environment',
          title: 'Premium space',
          text: 'Modern equipment, a functional interior and an atmosphere that supports discipline, focus and consistency.',
        },
      ],
    },
    ease: {
      kicker: 'Booking Policy',
      title: 'Planned. Flexible. Simple.',
      text: 'All packages are valid on a monthly basis. Preferred training appointments are reserved upon joining, keeping the rhythm clear, structured and adapted to your schedule.',
      note: 'If you are unable to attend, the appointment can be cancelled in time through the app.',
      items: [
        'Appointments cancelled in time will not be charged',
        'Missed sessions can be made up in the first available appointment',
        'Flexibility for members while preserving training quality',
      ],
      locality: [
        {
          eyebrow: 'Planned',
          text: 'Preferred training appointments are reserved in advance',
        },
        {
          eyebrow: 'Flexible',
          text: 'Schedule changes are handled through the app',
        },
        {
          eyebrow: 'Simple',
          text: 'Training organisation remains clear and effortless',
        },
      ],
    },
    membership: {
      kicker: 'Membership',
      title: 'Limited Membership',
      note: 'Memberships designed around your goals, schedule and progress. Membership is available by application.',
      highlights: [
        'Limited membership',
        'Guided training',
        'Individual approach',
      ],
      items: [
        {
          name: 'FOCUS',
          detail: '8 sessions per month',
          price: '20,000 RSD',
          description:
            'For those who want continuity and balance between training and everyday responsibilities.',
        },
        {
          name: 'DISCIPLINE',
          detail: '10 sessions per month',
          price: '22,000 RSD',
          description:
            'For those who believe results come through consistency and dedicated work.',
        },
        {
          name: 'STRENGTH',
          detail: '12 sessions per month',
          price: '24,000 RSD',
          description:
            'For those who want maximum support, progress and commitment to their goals.',
        },
        {
          name: 'SINGLE SESSION',
          detail: 'Single session',
          price: '3,000 RSD',
          description:
            'One guided session for discovering the ÉLAN approach or focusing on a specific goal.',
        },
      ],
    },
    space: {
      kicker: 'The Space',
      title: 'Boutique by design.',
      text: 'Every detail of the space has been carefully chosen to create an environment that inspires discipline, focus and consistency. Minimal interiors, premium equipment and an atmosphere that allows training to be exactly what it should be — time dedicated to yourself.',
      panel: 'Boutique Training Environment',
    },
    audience: {
      kicker: 'Training',
      title: 'Designed around women.',
      text: 'Training programs are created to support strength, health and long-term results. No generic approach. No fitness trends. Focus on what works.',
      items: [
        'Initial consultation to understand goals and starting level',
        'Programs adapted to your pace, abilities and desired results',
        'Guided appointments with professional trainer supervision',
        'Continuity, safety and progress aligned with each member',
      ],
    },
    application: {
      kicker: 'Join the Waiting List',
      title: 'Be among the first.',
      text: 'The number of members is limited. Join the waiting list and be among the first to receive information about opening and enrolment.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      focus: 'Training focus',
      focusPlaceholder: 'I have not decided yet',
      cta: 'Apply',
      submit: 'Join the Waiting List',
      success: 'Your application has been sent.',
      successTitle: 'Application received.',
      successText:
        'Thank you for your interest in ÉLAN. We will be in touch shortly with the next steps.',
      successClose: 'Close',
      error: 'Sending is currently unavailable.',
      blocked: 'This submission was not accepted.',
    },
    footer: {
      line: 'Women’s Private Gym · Focus · Discipline · Strength',
      addressLabel: 'Location',
      address: 'Ivankovačka 6, Belgrade · Opening soon',
      phoneLabel: 'Phone',
      phone: 'Contact phone',
      socialLabel: 'Social',
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState('sr');
  const [activeMembership, setActiveMembership] = useState(0);
  const [activeSpaceSlide, setActiveSpaceSlide] = useState(0);
  const [submitState, setSubmitState] = useState('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStartedAt] = useState(() => new Date().toISOString());
  const spaceTouchStart = useRef(null);
  const spaceTouchCurrent = useRef(null);
  const copy = content[language];
  const leadsWebAppUrl = process.env.NEXT_PUBLIC_LEADS_WEB_APP_URL;
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const visualImage = `url('${assetBasePath}/elan-visual-reference.jpg')`;
  const heroImage = `url('${assetBasePath}/images/elan-hero-002.png')`;
  const membershipImage = `url('${assetBasePath}/images/membership_img.png')`;
  const applicationImage = `url('${assetBasePath}/images/elan-prostor-6.png')`;
  const spaceSlides = [
    {
      src: `${assetBasePath}/images/elan-prostor-7.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-1.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-2.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-3.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-4.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-5.png`,
      position: 'center',
    },
    {
      src: `${assetBasePath}/images/elan-prostor-6.png`,
      position: 'center',
    },
  ];
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      shiftSpaceSlide(1);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);
  const shiftSpaceSlide = (direction) => {
    setActiveSpaceSlide((current) => {
      const next = current + direction;

      if (next < 0) {
        return spaceSlides.length - 1;
      }

      if (next >= spaceSlides.length) {
        return 0;
      }

      return next;
    });
  };
  const getSpaceSlideOffset = (index) => {
    const rawOffset = index - activeSpaceSlide;

    if (rawOffset === spaceSlides.length - 1) {
      return -1;
    }

    if (rawOffset === -(spaceSlides.length - 1)) {
      return 1;
    }

    return rawOffset;
  };
  const handleSpaceTouchStart = (event) => {
    const touch = event.touches[0];
    spaceTouchStart.current = { x: touch.clientX, y: touch.clientY };
    spaceTouchCurrent.current = { x: touch.clientX, y: touch.clientY };
  };
  const handleSpaceTouchMove = (event) => {
    const touch = event.touches[0];
    spaceTouchCurrent.current = { x: touch.clientX, y: touch.clientY };
  };
  const resetSpaceTouch = () => {
    spaceTouchStart.current = null;
    spaceTouchCurrent.current = null;
  };
  const handleHomeClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSpaceTouchEnd = () => {
    if (!spaceTouchStart.current || !spaceTouchCurrent.current) {
      return;
    }

    const deltaX = spaceTouchCurrent.current.x - spaceTouchStart.current.x;
    const deltaY = spaceTouchCurrent.current.y - spaceTouchStart.current.y;
    const isHorizontalSwipe =
      Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25;

    if (isHorizontalSwipe) {
      shiftSpaceSlide(deltaX < 0 ? 1 : -1);
    }

    resetSpaceTouch();
  };
  const handleApplicationSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = formData.get('website');
    const startedAt = Date.parse(formData.get('formStartedAt'));
    const elapsedMs = Date.now() - startedAt;

    if (honeypot || Number.isNaN(startedAt) || elapsedMs < 2500) {
      setSubmitState('blocked');
      return;
    }

    if (!leadsWebAppUrl) {
      setSubmitState('error');
      return;
    }

    formData.set('userAgent', navigator.userAgent);
    formData.set('ip', '');
    setSubmitState('sending');

    try {
      await fetch(leadsWebAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(formData),
      });

      form.reset();
      setSubmitState('success');
    } catch {
      form.reset();
      setSubmitState('success');
    }
  };

  return (
    <main
      style={{
        '--elan-image': visualImage,
        '--hero-image': heroImage,
        '--membership-image': membershipImage,
        '--application-image': applicationImage,
      }}
    >
      <header className="site-header" aria-label={copy.nav.label}>
        <a
          className="brand-lockup"
          href="#top"
          aria-label="ÉLAN home"
          onClick={handleHomeClick}
        >
          <span className="brand-mark">ÉLAN</span>
          <span className="brand-descriptor">Women’s Strength Club</span>
        </a>
        <div
          className={`header-actions ${isMenuOpen ? 'is-open' : ''}`}
          id="site-navigation"
        >
          <nav>
            <a href="#club" onClick={() => setIsMenuOpen(false)}>
              {copy.nav.club}
            </a>
            <a href="#membership" onClick={() => setIsMenuOpen(false)}>
              {copy.nav.membership}
            </a>
            <a href="#apply" onClick={() => setIsMenuOpen(false)}>
              {copy.nav.apply}
            </a>
          </nav>
        </div>
        <div className="header-controls">
          <div className="language-switch" aria-label="Language switcher">
            <button
              type="button"
              className={language === 'sr' ? 'is-active' : ''}
              onClick={() => {
                setLanguage('sr');
                setIsMenuOpen(false);
              }}
            >
              SR
            </button>
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => {
                setLanguage('en');
                setIsMenuOpen(false);
              }}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero__image" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p>{copy.hero.text}</p>
          <div className="hero__actions">
            <a className="button button--dark" href="#apply">
              {copy.hero.primary}
            </a>
            <a className="button button--light" href="#club">
              {copy.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="statement section-shell" id="club">
        <p className="section-kicker">{copy.statement.kicker}</p>
        <h2>{copy.statement.title}</h2>
        <p>{copy.statement.text}</p>
        <span>{copy.statement.note}</span>
      </section>

      <section className="difference section-shell">
        <div className="section-heading section-heading--centered">
          <p className="section-kicker">{copy.difference.kicker}</p>
          <h2>{copy.difference.title}</h2>
        </div>
        <div className="feature-grid">
          {copy.difference.items.map((item) => (
            <article className="feature-card" key={item.title}>
              <p className="feature-card__eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ease section-shell">
        <div className="ease__image ease__image--left" aria-hidden="true" />
        <div className="ease__content">
          <p className="section-kicker">{copy.ease.kicker}</p>
          <h2>{copy.ease.title}</h2>
          <p>{copy.ease.text}</p>
          <span>{copy.ease.note}</span>
          <ul>
            {copy.ease.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="ease__locality">
            {copy.ease.locality.map((item) => (
              <li key={item.text}>
                <span>{item.eyebrow}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="ease__image ease__image--right" aria-hidden="true" />
      </section>

      <section className="membership section-shell" id="membership">
        <div className="membership__intro">
          <p className="section-kicker">{copy.membership.kicker}</p>
          <h2>{copy.membership.title}</h2>
          <p>{copy.membership.note}</p>
          <ul className="membership-highlights">
            {copy.membership.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="button button--dark" href="#apply">
            {copy.application.cta}
          </a>
          <div className="membership__image" aria-hidden="true" />
        </div>
        <div className="membership-list">
          {copy.membership.items.map((item, index) => {
            const isOpen = activeMembership === index;
            const panelId = `membership-panel-${index}`;

            return (
              <article className="membership-row" key={item.name}>
                <button
                  type="button"
                  className="membership-row__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActiveMembership(isOpen ? null : index)}
                >
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <span className="membership-row__meta">
                    <strong>{item.price}</strong>
                    <span className="membership-row__arrow" aria-hidden="true" />
                  </span>
                </button>
                <div
                  className="membership-row__content"
                  id={panelId}
                  hidden={!isOpen}
                >
                  <p>{item.description}</p>
                </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="space">
        <div className="space__copy">
          <p className="section-kicker">{copy.space.kicker}</p>
          <h2>{copy.space.title}</h2>
          <p>{copy.space.text}</p>
        </div>
        <div
          className="space__panel"
          aria-label={copy.space.panel}
          onTouchStart={handleSpaceTouchStart}
          onTouchMove={handleSpaceTouchMove}
          onTouchEnd={handleSpaceTouchEnd}
          onTouchCancel={resetSpaceTouch}
        >
          <div className="space-carousel">
            {spaceSlides.map((slide, index) => {
              const isActive = activeSpaceSlide === index;

              return (
                <div
                  className={`space-carousel__slide ${isActive ? 'is-active' : ''}`}
                  key={`${slide.src}-${index}`}
                  style={{
                    '--slide-image': `url('${slide.src}')`,
                    '--slide-position': slide.position,
                    '--slide-index': index,
                    '--slide-offset': getSpaceSlideOffset(index),
                  }}
                />
              );
            })}
          </div>
          <span>ÉLAN</span>
          <small>{copy.space.panel}</small>
        </div>
      </section>

      <section className="audience section-shell">
        <div className="section-heading">
          <p className="section-kicker">{copy.audience.kicker}</p>
          <h2>{copy.audience.title}</h2>
          <p>{copy.audience.text}</p>
        </div>
        <ul>
          {copy.audience.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="application" id="apply">
        <div className="application__copy">
          <p className="section-kicker">{copy.application.kicker}</p>
          <h2>{copy.application.title}</h2>
          <p>{copy.application.text}</p>
        </div>
        <form className="application-form" onSubmit={handleApplicationSubmit}>
          <label className="form-field--hidden" aria-hidden="true">
            Website
            <input
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
            />
          </label>
          <input type="hidden" name="formStartedAt" value={formStartedAt} />
          <input type="hidden" name="source" value="elan-membership-application" />
          <input type="hidden" name="language" value={language} />
          <input type="hidden" name="ip" value="" />
          <input type="hidden" name="userAgent" value="" />
          <label>
            {copy.application.name}
            <input
              type="text"
              name="name"
              autoComplete="name"
              minLength="2"
              maxLength="80"
              required
            />
          </label>
          <label>
            {copy.application.email}
            <input
              type="email"
              name="email"
              autoComplete="email"
              maxLength="120"
              required
            />
          </label>
          <label>
            {copy.application.phone}
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              minLength="6"
              maxLength="32"
              required
            />
          </label>
          <label>
            {copy.application.focus}
            <select name="focus" defaultValue={copy.application.focusPlaceholder} required>
              <option value={copy.application.focusPlaceholder}>
                {copy.application.focusPlaceholder}
              </option>
              {copy.membership.items.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} - {item.detail}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" disabled={submitState === 'sending'}>
            {copy.application.submit}
          </button>
          <p className="form-status" role="status">
            {submitState === 'error' && copy.application.error}
            {submitState === 'blocked' && copy.application.blocked}
          </p>
        </form>
      </section>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <span className="brand-mark">ÉLAN</span>
          <p>{copy.footer.line}</p>
        </div>
        <div className="site-footer__details">
          <div>
            <p className="site-footer__label">{copy.footer.addressLabel}</p>
            <p>{copy.footer.address}</p>
          </div>
          <div>
            <p className="site-footer__label">{copy.footer.phoneLabel}</p>
            <p>{copy.footer.phone}</p>
          </div>
          <div>
            <p className="site-footer__label">{copy.footer.socialLabel}</p>
            <div className="site-footer__socials">
              <a href="#" aria-label="ÉLAN Facebook">
                FB
              </a>
              <a href="#" aria-label="ÉLAN Instagram">
                IG
              </a>
            </div>
          </div>
        </div>
      </footer>

      {submitState === 'success' && (
        <div
          className="success-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div
            className="success-modal__backdrop"
            onClick={() => setSubmitState('idle')}
            aria-hidden="true"
          />
          <div className="success-modal__panel">
            <p className="section-kicker">{copy.application.success}</p>
            <h2 id="success-modal-title">{copy.application.successTitle}</h2>
            <p>{copy.application.successText}</p>
            <button type="button" onClick={() => setSubmitState('idle')}>
              {copy.application.successClose}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
