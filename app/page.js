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
      eyebrow: 'Exclusive Women’s Strength Club',
      title: 'Snaga, gracioznost, disciplina.',
      text: 'ÉLAN je privatni prostor za trening namenjen ženama koje žele da grade snagu u mirnom, fokusiranom i prefinjenom okruženju.',
      primary: 'Prijavi se za članstvo',
      secondary: 'Istraži klub',
    },
    statement: {
      kicker: 'ÉLAN metod',
      title: 'Snaga nije glasna. Ona se gradi.',
      text: 'ÉLAN je nastao za žene koje vrednuju disciplinu više od buke, preciznost više od haosa i snagu više od spoljašnjeg utiska. Privatni prostor za fokusiran trening, vođen napredak i visoke standarde.',
      note: 'Ograničeno članstvo. Prefinjen prostor. Ličan pristup.',
    },
    difference: {
      kicker: 'Standard',
      title: 'Drugačiji klub snage.',
      items: [
        {
          eyebrow: 'Exclusive Access',
          title: 'Privatno okruženje',
          text: 'Miran prostor za žene, osmišljen bez gužve, pritiska i ometanja.',
        },
        {
          eyebrow: 'Measured Results',
          title: 'Vođeni trening',
          text: 'Strukturisani treninzi usmereni na tehniku, progresiju i dugoročnu snagu.',
        },
        {
          eyebrow: 'Limited Membership',
          title: 'Ograničeno članstvo',
          text: 'Broj članica je namerno ograničen kako bi se sačuvali kvalitet, privatnost i pažnja.',
        },
        {
          eyebrow: 'Premium Standard',
          title: 'Prefinjeni standardi',
          text: 'Od prostora do pristupa treningu, svaki detalj je izgrađen oko fokusa i doslednosti.',
        },
      ],
    },
    ease: {
      kicker: 'Svakodnevni ritam',
      title: 'Ovde ostatak dana može da sačeka.',
      text: 'ÉLAN je osmišljen za žene koje ne žele da trening bude još jedna obaveza u nizu. Dolazak, termin i vreme oko treninga postaju deo mirnog, privatnog ritma u kome je pažnja vraćena onome što je zaista važno.',
      note: 'Privatno okruženje, promišljena svakodnevica i sistem rezervacija koji poštuje tvoj tempo.',
      items: [
        'Termin se bira jasno i jednostavno',
        'Promene rasporeda ostaju elegantne i nenametljive',
        'Sve oko dolaska podržava osećaj privatnosti i lakoće',
      ],
      locality: [
        {
          eyebrow: 'Dolazak bez zastoja',
          text: 'Do termina se dolazi lako, bez kruženja i traženja mesta za parkiranje',
        },
        {
          eyebrow: 'Sve nadohvat ruke',
          text: 'Posle treninga dan može da se nastavi mirno, bez dodatnog planiranja',
        },
        {
          eyebrow: 'Deo istog rituala',
          text: 'Kratke obaveze, nega i porodični planovi lakše se uklapaju u isti raspored',
        },
      ],
    },
    membership: {
      kicker: 'Private Membership',
      title: 'Opcije članstva',
      note: 'Svi treninzi su isključivo vođeni. Svaki termin ima jasnu strukturu, korekciju tehnike i tempo rada prilagođen članici.',
      highlights: [
        'Svaki termin je vođen sa jasnom namerom',
        'Fokus na tehniku, kontrolu i progresiju',
        'Miran ritam rada u privatnom okruženju',
      ],
      items: [
        {
          name: 'Precision Session',
          detail: '1 trening',
          price: '3.000 RSD',
          description:
            'Jedan individualno vođen termin za upoznavanje sa ÉLAN pristupom, proveru tehnike ili fokusiran rad na određenom cilju. Idealno za prvi susret sa prostorom i metodom rada.',
        },
        {
          name: 'Essential Rhythm',
          detail: '8 treninga',
          price: '20.000 RSD',
          description:
            'Osnovni mesečni ritam za žene koje žele dosledan, ali smiren ulazak u trening. Osam termina pružaju strukturu, tehničku sigurnost i dovoljno prostora za stabilan napredak.',
        },
        {
          name: 'Refined Progress',
          detail: '10 treninga',
          price: '22.000 RSD',
          description:
            'Uravnotežen paket za članice koje žele čvršći kontinuitet i vidljiviji napredak kroz mesec. Deset termina omogućavaju precizniji rad na snazi, tehnici i rutini.',
        },
        {
          name: 'Signature Discipline',
          detail: '12 treninga',
          price: '24.000 RSD',
          description:
            'Najpotpuniji paket za žene koje žele ozbiljan ritam treninga i stalnu podršku. Dvanaest termina mesečno daju najbolju osnovu za disciplinu, progresiju i dugoročnu snagu.',
        },
      ],
    },
    space: {
      kicker: 'The Private Space',
      title: 'Privatno. Fokusirano. Uzvišeno.',
      text: 'ÉLAN je osmišljen kao tiha alternativa tradicionalnoj teretani. Minimalan enterijer, kontrolisana atmosfera i ograničen broj članica stvaraju uslove za ozbiljan, dosledan rad.',
      panel: 'Women’s Strength Private Club',
    },
    audience: {
      kicker: 'For the Intentional',
      title: 'Za žene koje treniraju sa namerom.',
      text: 'ÉLAN je za žene koje žele snagu bez haosa, vođstvo bez pritiska i prostor u kome trening postaje deo smirenijeg, promišljenog načina života.',
      items: [
        'Za početnice koje žele sigurno vođstvo',
        'Za iskusne žene koje žele privatnost',
        'Za one koje biraju strukturu umesto improvizacije',
        'Za žene koje žele rezultat bez buke komercijalne teretane',
      ],
    },
    application: {
      kicker: 'By Application',
      title: 'Prijavi se za članstvo.',
      text: 'Kako bi se očuvali kvalitet prostora i iskustvo treninga, ÉLAN prima članice kroz kratak proces prijave.',
      name: 'Ime',
      email: 'Email',
      phone: 'Telefon',
      focus: 'Trening fokus',
      focusPlaceholder: 'Nisam još odlučila',
      cta: 'Prijavi se',
      submit: 'Zatraži informacije o članstvu',
      success: 'Prijava je poslata.',
      successTitle: 'Prijava je primljena.',
      successText:
        'Hvala na interesovanju za ÉLAN. Javićemo se uskoro sa sledećim koracima.',
      successClose: 'Zatvori',
      error: 'Slanje trenutno nije uspelo.',
      blocked: 'Slanje nije prihvaćeno.',
    },
    footer: {
      line: 'Women’s Strength Private Club',
      addressLabel: 'Adresa',
      address: 'Privatni studio - adresa po prijavi',
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
      eyebrow: 'Women’s Strength Private Club',
      title: 'Strength, Grace, Discipline.',
      text: 'ÉLAN is a private training space for women who want to build strength in a calm, focused and refined environment.',
      primary: 'Apply for Membership',
      secondary: 'Explore the Club',
    },
    statement: {
      kicker: 'ÉLAN Method',
      title: 'Strength is not loud. It is cultivated.',
      text: 'ÉLAN was created for women who value discipline over noise, precision over chaos, and strength over appearance. A private space designed for focused training, guided progress and elevated standards.',
      note: 'Limited membership. Refined space. Personal approach.',
    },
    difference: {
      kicker: 'The Standard',
      title: 'A different kind of strength club.',
      items: [
        {
          eyebrow: 'Exclusive Access',
          title: 'Private Environment',
          text: 'A calm, women-focused space designed without crowding, pressure or distraction.',
        },
        {
          eyebrow: 'Measured Results',
          title: 'Guided Training',
          text: 'Structured sessions focused on technique, progression and long-term strength.',
        },
        {
          eyebrow: 'Limited Membership',
          title: 'Limited Membership',
          text: 'Membership is intentionally limited to preserve quality, privacy and attention.',
        },
        {
          eyebrow: 'Premium Standard',
          title: 'Refined Standards',
          text: 'From the space to the training approach, every detail is built around focus and consistency.',
        },
      ],
    },
    ease: {
      kicker: 'Considered Rhythm',
      title: 'A place where the rest of the day can wait.',
      text: 'ÉLAN is designed for women who do not want training to become another demand on an already full schedule. Arrival, booking and the time around each session are shaped as a calm private ritual, returning attention to what matters.',
      note: 'A discreet setting, refined daily ease and a reservation system built around your rhythm.',
      items: [
        'Appointments are selected with clarity and control',
        'Schedule changes remain quiet and effortless',
        'Every detail around arrival supports privacy and ease',
      ],
      locality: [
        {
          eyebrow: 'Arrival without friction',
          text: 'Arrival is simple, without circling or searching for a place to park',
        },
        {
          eyebrow: 'Within easy reach',
          text: 'After training, the rest of the day can continue calmly, without extra planning',
        },
        {
          eyebrow: 'Part of one ritual',
          text: 'Small errands, personal care and family plans fit more easily into one schedule',
        },
      ],
    },
    membership: {
      kicker: 'Private Membership',
      title: 'Membership Options',
      note: 'All sessions are exclusively guided. Each appointment has a clear structure, technical correction and a pace adapted to the member.',
      highlights: [
        'Every session is guided with clear intention',
        'Focus on technique, control and progression',
        'A calm training rhythm in a private setting',
      ],
      items: [
        {
          name: 'Precision Session',
          detail: '1 session',
          price: '3,000 RSD',
          description:
            'A single guided session for discovering the ÉLAN method, refining technique or focusing on one specific objective. Ideal as a first encounter with the space and training approach.',
        },
        {
          name: 'Essential Rhythm',
          detail: '8 sessions',
          price: '20,000 RSD',
          description:
            'A calm monthly foundation for women who want consistency without excess. Eight sessions provide structure, technical confidence and enough frequency for steady progress.',
        },
        {
          name: 'Refined Progress',
          detail: '10 sessions',
          price: '22,000 RSD',
          description:
            'A balanced package for members who want stronger continuity and more visible monthly progression. Ten sessions support precise work on strength, technique and routine.',
        },
        {
          name: 'Signature Discipline',
          detail: '12 sessions',
          price: '24,000 RSD',
          description:
            'The most complete rhythm for women who want serious training consistency and regular support. Twelve monthly sessions create the strongest base for discipline, progression and long-term strength.',
        },
      ],
    },
    space: {
      kicker: 'The Private Space',
      title: 'Private. Focused. Elevated.',
      text: 'ÉLAN is designed as a quiet alternative to the traditional gym. Minimal interiors, controlled atmosphere and a limited number of members create the conditions for serious, consistent work.',
      panel: 'Women’s Strength Private Club',
    },
    audience: {
      kicker: 'For the Intentional',
      title: 'For women who train with intention.',
      text: 'ÉLAN is for women who want strength without chaos, guidance without pressure, and a space where training becomes part of a more composed lifestyle.',
      items: [
        'For beginners who want safe guidance',
        'For experienced women who want privacy',
        'For those who prefer structure over improvisation',
        'For women who want results without the noise of a commercial gym',
      ],
    },
    application: {
      kicker: 'By Application',
      title: 'Apply for membership.',
      text: 'To preserve the quality of the space and the training experience, ÉLAN accepts members through a short application process.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      focus: 'Training focus',
      focusPlaceholder: 'I have not decided yet',
      cta: 'Apply',
      submit: 'Request Membership Information',
      success: 'Your application has been sent.',
      successTitle: 'Application received.',
      successText:
        'Thank you for your interest in ÉLAN. We will be in touch shortly with the next steps.',
      successClose: 'Close',
      error: 'Sending is currently unavailable.',
      blocked: 'This submission was not accepted.',
    },
    footer: {
      line: 'Women’s Strength Private Club',
      addressLabel: 'Address',
      address: 'Private studio - address by application',
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
            <select name="focus" defaultValue="Essential Rhythm" required>
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
