/**
 * ============================================================
 * INNOVENT CLUB — MAIN SCRIPT
 * ============================================================
 * Responsibilities:
 *  1. Read CONTENT from data/content.js and render all sections
 *  2. Navbar scroll + mobile menu
 *  3. Smooth active link tracking (IntersectionObserver)
 *  4. Scroll-reveal animations (IntersectionObserver)
 *  5. Animated counter stats
 *  6. Lazy image loading
 *  7. Scroll-to-top button
 * ============================================================
 */

'use strict';

/* ============================================================
   1. HELPERS
   ============================================================ */

/**
 * Resolve a potential "registrationLink" alias to the actual URL.
 * Any href value set to "registrationLink" automatically uses SITE_CONFIG.registrationLink.
 */
function resolveHref(href) {
  if (href === 'registrationLink') return CONTENT.SITE_CONFIG.registrationLink;
  return href;
}

/** Safely create an element with attributes */
function el(tag, attrs = {}, ...children) {
  const elem = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'className') elem.className = v;
    else if (k === 'innerHTML') elem.innerHTML = v;
    else elem.setAttribute(k, v);
  }
  for (const child of children) {
    if (typeof child === 'string') elem.insertAdjacentHTML('beforeend', child);
    else if (child) elem.appendChild(child);
  }
  return elem;
}

/** Sanitize text for innerHTML insertion */
function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ============================================================
   2. NAVBAR
   ============================================================ */
function buildNavbar() {
  const { links, ctaLabel } = CONTENT.NAVBAR;
  const { logoText, registrationLink } = CONTENT.SITE_CONFIG;

  // Desktop links
  const linksHtml = links.map(({ label, href }) =>
    `<li><a href="${href}" class="navbar__link" data-nav-link>${esc(label)}</a></li>`
  ).join('');

  // Mobile links
  const mobileLinksHtml = links.map(({ label, href }) =>
    `<a href="${href}" class="navbar__mobile-link" data-mobile-link>${esc(label)}</a>`
  ).join('');

  document.getElementById('navbar').innerHTML = `
    <div class="container">
      <div class="navbar__inner">
        <!-- Logo -->
        <a href="#home" class="navbar__logo" aria-label="${esc(logoText)} homepage">
          <span class="navbar__logo-dot"></span>
          <span class="navbar__logo-text">${esc(logoText)}</span>
        </a>

        <!-- Desktop navigation -->
        <nav aria-label="Main navigation">
          <ul class="navbar__links">${linksHtml}</ul>
        </nav>

        <!-- CTA + hamburger -->
        <div style="display:flex;align-items:center;gap:1rem;">
          <a href="${registrationLink}" target="_blank" rel="noopener noreferrer"
             class="btn btn--primary navbar__cta" aria-label="Open registration form">
            ${esc(ctaLabel)}
          </a>
          <button class="navbar__toggle" id="menuToggle"
                  aria-label="Toggle mobile menu" aria-expanded="false"
                  aria-controls="mobileMenu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu overlay -->
    <nav id="mobileMenu" class="navbar__mobile-menu" aria-label="Mobile navigation" role="dialog" aria-modal="true">
      ${mobileLinksHtml}
      <a href="${registrationLink}" target="_blank" rel="noopener noreferrer"
         class="btn btn--primary btn--lg" style="margin-top:1rem;">
        ${esc(ctaLabel)}
      </a>
    </nav>
  `;

  /* Scroll → add .scrolled class */
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hamburger toggle */
  const toggle   = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleMenu = (forceClose = false) => {
    const isOpen = !forceClose && !mobileMenu.classList.contains('open');
    toggle.classList.toggle('open', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => toggleMenu());

  /* Close on mobile link click */
  mobileMenu.querySelectorAll('.navbar__mobile-link').forEach(a =>
    a.addEventListener('click', () => toggleMenu(true))
  );

  /* Close on Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) toggleMenu(true);
  });
}

/* ============================================================
   3. HERO SECTION
   ============================================================ */
function buildHero() {
  const h = CONTENT.HERO;
  const reg = CONTENT.SITE_CONFIG.registrationLink;

  document.getElementById('home').innerHTML = `
    <!-- Decorative orbs -->
    <div class="hero__orb hero__orb--1" aria-hidden="true"></div>
    <div class="hero__orb hero__orb--2" aria-hidden="true"></div>
    <div class="hero__orb hero__orb--3" aria-hidden="true"></div>

    <div class="container">
      <div class="hero__inner">

        <!-- Text content -->
        <div class="hero__content">
          <div class="hero__badge">
            <span class="hero__badge-pill">
              <span class="hero__badge-dot" aria-hidden="true"></span>
              ${esc(h.badge)}
            </span>
          </div>

          <h1 class="hero__title">
            <span class="hero__title-main">${esc(h.headline)}</span>
            <span class="hero__title-accent">${esc(h.headlineAccent)}</span>
          </h1>

          <p class="hero__subtitle">${esc(h.subheadline)}</p>

          <p class="hero__description">${esc(h.description)}</p>

          <div class="hero__actions">
            <a href="${reg}" target="_blank" rel="noopener noreferrer"
               class="btn btn--primary btn--xl" aria-label="Open registration form">
              <i class="fas fa-rocket" aria-hidden="true"></i>
              ${esc(h.primaryCTA.label)}
            </a>
            <a href="${h.secondaryCTA.href}" class="btn btn--outline btn--xl">
              ${esc(h.secondaryCTA.label)}
              <i class="fas fa-arrow-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <!-- Decorative visual cards -->
        <div class="hero__visual" aria-hidden="true">
          <div class="hero__card-stack">
            <div class="hero__floating-card hero__floating-card--main">
              <div class="hfc-icon hfc-icon--purple"><i class="fas fa-lightbulb"></i></div>
              <div>
                <div class="hfc-title">Innovent 2025</div>
                <div class="hfc-meta">Biggest Idea Competition</div>
              </div>
            </div>
            <div class="hero__floating-card hero__floating-card--1">
              <div class="hfc-icon hfc-icon--amber"><i class="fas fa-users"></i></div>
              <div>
                <div class="hfc-title">500+</div>
                <div class="hfc-meta">Students</div>
              </div>
            </div>
            <div class="hero__floating-card hero__floating-card--2">
              <div class="hfc-icon hfc-icon--green"><i class="fas fa-trophy"></i></div>
              <div>
                <div class="hfc-title">10+</div>
                <div class="hfc-meta">Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" aria-hidden="true">
      <span>Scroll</span>
      <i class="fas fa-chevron-down"></i>
    </div>
  `;
}

/* ============================================================
   4. ABOUT SECTION
   ============================================================ */
function buildAbout() {
  const a = CONTENT.ABOUT;

  const statsHtml = a.stats.map(({ value, label }, i) => `
    <div class="stat-card reveal reveal-delay-${(i % 5) + 1}">
      <div class="stat-card__value" data-counter="${value}">${value}</div>
      <div class="stat-card__label">${esc(label)}</div>
    </div>
  `).join('');

  const parasHtml = a.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');

  document.getElementById('about').innerHTML = `
    <div class="container">
      <div class="about__inner">

        <!-- Image side -->
        <div class="about__image-wrapper reveal">
          <div class="about__image-placeholder" role="img" aria-label="${esc(a.imageAlt)}">
            <i class="fas fa-image" aria-hidden="true"></i>
            <span>about-illustration.jpg</span>
            <small style="color:var(--clr-text-dim);text-align:center;max-width:200px;">
              Place your image at: assets/images/about-illustration.jpg
            </small>
          </div>
          <div class="about__image-badge">
            <span class="about__image-badge-num">2025</span>
            <span class="about__image-badge-text">Innovent<br>Edition</span>
          </div>
        </div>

        <!-- Text side -->
        <div>
          <div class="section-header">
            <span class="section-label">${esc(a.sectionLabel)}</span>
            <h2 class="section-title">${esc(a.heading)}</h2>
          </div>
          <div class="about__paragraphs reveal">${parasHtml}</div>
          <div class="stats-grid" role="list" aria-label="Key statistics">${statsHtml}</div>
        </div>

      </div>
    </div>
  `;
}

/* ============================================================
   5. WHY INNOVENT
   ============================================================ */
function buildWhy() {
  const w = CONTENT.WHY_INNOVENT;

  const cardsHtml = w.features.map((f, i) => `
    <article class="feature-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="feature-card__icon" aria-hidden="true">
        <i class="${esc(f.icon)}"></i>
      </div>
      <h3 class="feature-card__title">${esc(f.title)}</h3>
      <p class="feature-card__desc">${esc(f.description)}</p>
    </article>
  `).join('');

  document.getElementById('why').innerHTML = `
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">${esc(w.sectionLabel)}</span>
        <h2 class="section-title">${esc(w.heading)}</h2>
        <p class="section-subtitle">${esc(w.subheading)}</p>
      </div>
      <div class="why__grid" role="list">${cardsHtml}</div>
    </div>
  `;
}

/* ============================================================
   6. TIMELINE
   ============================================================ */
function buildTimeline() {
  const t = CONTENT.TIMELINE;

  const stepsHtml = t.steps.map((s, i) => `
    <div class="timeline-step reveal reveal-delay-${i + 1}">
      <div class="timeline-step__icon-wrap" aria-hidden="true">
        <div class="timeline-step__icon">
          <i class="${esc(s.icon)}"></i>
        </div>
        <span class="timeline-step__num">${esc(s.step)}</span>
      </div>
      <div class="timeline-step__date">${esc(s.date)}</div>
      <h3 class="timeline-step__title">${esc(s.title)}</h3>
      <p class="timeline-step__desc">${esc(s.description)}</p>
    </div>
  `).join('');

  document.getElementById('timeline').innerHTML = `
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">${esc(t.sectionLabel)}</span>
        <h2 class="section-title">${esc(t.heading)}</h2>
        <p class="section-subtitle">${esc(t.subheading)}</p>
      </div>
      <div class="timeline" role="list">${stepsHtml}</div>
    </div>
  `;
}

/* ============================================================
   7. TOPICS
   ============================================================ */
function buildTopics() {
  const t = CONTENT.TOPICS;

  const topicsHtml = t.topics.map((topic, i) => {
    const tagsHtml = topic.tags.map(tag => `<span class="tag">${esc(tag)}</span>`).join('');
    return `
      <article class="topic-card reveal reveal-delay-${(i % 3) + 1}">
        <div class="topic-card__inner">
          <div class="topic-card__front" style="background:${topic.color};">
            <div class="topic-card__front-icon" aria-hidden="true">
              <i class="${esc(topic.icon)}"></i>
            </div>
            <h3 class="topic-card__title">${esc(topic.title)}</h3>
            <p class="topic-card__flip-hint"><i class="fas fa-rotate" aria-hidden="true"></i> Hover to explore</p>
          </div>
          <div class="topic-card__back">
            <div class="topic-card__back-icon" style="background:${topic.color};" aria-hidden="true">
              <i class="${esc(topic.icon)}"></i>
            </div>
            <h3 class="topic-card__back-title">${esc(topic.title)}</h3>
            <p class="topic-card__desc">${esc(topic.description)}</p>
            <div class="topic-card__tags">${tagsHtml}</div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  document.getElementById('topics').innerHTML = `
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">${esc(t.sectionLabel)}</span>
        <h2 class="section-title">${esc(t.heading)}</h2>
        <p class="section-subtitle">${esc(t.subheading)}</p>
      </div>
      <div class="topics__grid">${topicsHtml}</div>
    </div>
  `;

  // Touch device support: toggle flip on tap
  document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('is-flipped'));
  });
}

/* ============================================================
   8. GALLERY — full-width auto-sliding hero carousel
   ============================================================ */
function buildGallery() {
  const g = CONTENT.GALLERY;

  /* Build slide HTML */
  const slidesHtml = g.images.map((img, i) => `
    <div class="gallery-slide${i === 0 ? ' is-active' : ''}" role="listitem">
      <div class="gallery-slide__placeholder" aria-label="${esc(img.alt)}">
        <i class="fas fa-image" aria-hidden="true"></i>
        <span>${esc(img.caption)}</span>
      </div>
      <div class="gallery-slide__overlay" aria-hidden="true">
        <span class="gallery-slide__caption">${esc(img.caption)}</span>
      </div>
    </div>
  `).join('');

  /* Dot buttons */
  const dotsHtml = g.images.map((_, i) => `
    <button class="gallery__dot${i === 0 ? ' is-active' : ''}"
            aria-label="Go to slide ${i + 1}" data-dot="${i}"></button>
  `).join('');

  /* Flyer download buttons */
  const flyersHtml = g.flyers.map(f => `
    <a href="${esc(f.href)}" download class="btn btn--outline" aria-label="${esc(f.label)}">
      <i class="fas fa-download" aria-hidden="true"></i>
      ${esc(f.label)}
    </a>
  `).join('');

  document.getElementById('gallery').innerHTML = `
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">${esc(g.sectionLabel)}</span>
        <h2 class="section-title">${esc(g.heading)}</h2>
        <p class="section-subtitle">${esc(g.subheading)}</p>
      </div>

      <div class="gallery__carousel reveal" role="list" aria-label="Event photo gallery"
           id="galleryCarousel">
        <div class="gallery__track" id="galleryTrack">${slidesHtml}</div>

        <button class="gallery__nav-btn gallery__nav-btn--prev" id="galleryPrev"
                type="button" aria-label="Previous slide">
          <i class="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button class="gallery__nav-btn gallery__nav-btn--next" id="galleryNext"
                type="button" aria-label="Next slide">
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
        </button>

        <div class="gallery__dots" id="galleryDots" aria-label="Slide indicators">
          ${dotsHtml}
        </div>

        <div class="gallery__progress" id="galleryProgress"></div>
      </div>

      ${flyersHtml ? `<div class="gallery__flyers">${flyersHtml}</div>` : ''}
    </div>
  `;

  /* ── Swap placeholders for real images ── */
  const slides = document.querySelectorAll('.gallery-slide');
  slides.forEach((slide, i) => {
    const imgData = g.images[i];
    if (!imgData) return;
    const imgEl = new Image();
    imgEl.src = imgData.src;
    imgEl.alt = imgData.alt;
    imgEl.className = 'gallery-slide__img';
    imgEl.loading = i === 0 ? 'eager' : 'lazy';
    imgEl.onload = () => {
      const placeholder = slide.querySelector('.gallery-slide__placeholder');
      if (placeholder) placeholder.replaceWith(imgEl);
    };
  });

  /* ── Carousel logic ── */
  const track     = document.getElementById('galleryTrack');
  const dots      = document.querySelectorAll('.gallery__dot');
  const progress  = document.getElementById('galleryProgress');
  const carousel  = document.getElementById('galleryCarousel');
  const AUTOPLAY_INTERVAL = 5000; // ms between slides

  let current    = 0;
  let autoTimer  = null;
  let progTimer  = null;
  const total    = g.images.length;

  function goTo(index) {
    /* Clamp & wrap */
    current = (index + total) % total;

    track.style.transform = `translateX(-${current * 100}%)`;

    /* Active slide class */
    slides.forEach((s, i) => s.classList.toggle('is-active', i === current));

    /* Active dot */
    dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
  }

  function startProgress() {
    clearInterval(progTimer);
    progress.style.transition = 'none';
    progress.style.width = '0%';
    /* Force reflow */
    void progress.offsetWidth;
    progress.style.transition = `width ${AUTOPLAY_INTERVAL}ms linear`;
    progress.style.width = '100%';
  }

  function startAutoplay() {
    clearInterval(autoTimer);
    startProgress();
    autoTimer = setInterval(() => {
      goTo(current + 1);
      startProgress();
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    clearInterval(autoTimer);
    clearInterval(progTimer);
    progress.style.transition = 'none';
    progress.style.width = '0%';
  }

  /* Prev / Next buttons */
  document.getElementById('galleryPrev').addEventListener('click', () => {
    goTo(current - 1);
    stopAutoplay();
    startAutoplay();
  });
  document.getElementById('galleryNext').addEventListener('click', () => {
    goTo(current + 1);
    stopAutoplay();
    startAutoplay();
  });

  /* Dot clicks */
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.dot, 10));
      stopAutoplay();
      startAutoplay();
    });
  });

  /* Pause on hover / touch */
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  carousel.addEventListener('touchstart', stopAutoplay, { passive: true });
  carousel.addEventListener('touchend',   startAutoplay, { passive: true });

  /* Touch/swipe support */
  let touchStartX = 0;
  carousel.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  /* Kick off */
  goTo(0);
  startAutoplay();
}

/* ============================================================
   9. TEAM
   ============================================================ */
function buildTeam() {
  const t = CONTENT.TEAM;

  const membersHtml = t.members.map((m, i) => {
    const socialHtml = m.social.map(s => `
      <a href="${esc(s.href)}" class="social-link" aria-label="${esc(m.name)} on ${esc(s.platform)}"
         target="_blank" rel="noopener noreferrer">
        <i class="${esc(s.icon)}" aria-hidden="true"></i>
      </a>
    `).join('');

    return `
      <article class="team-card reveal reveal-delay-${(i % 4) + 1}">
        <div class="team-card__banner" aria-hidden="true"></div>
        <div class="team-card__avatar-wrap" data-photo="${esc(m.photo)}" data-name="${esc(m.name)}" role="img" aria-label="Photo of ${esc(m.name)}">
          <div class="team-card__avatar-placeholder"><i class="fas fa-user" aria-hidden="true"></i></div>
        </div>
        <div class="team-card__body">
          <h3 class="team-card__name">${esc(m.name)}</h3>
          <p class="team-card__role">${esc(m.role)}</p>
          <p class="team-card__bio">${esc(m.bio)}</p>
          <div class="team-card__social" aria-label="Social links for ${esc(m.name)}">${socialHtml}</div>
        </div>
      </article>
    `;
  }).join('');

  document.getElementById('team').innerHTML = `
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">${esc(t.sectionLabel)}</span>
        <h2 class="section-title">${esc(t.heading)}</h2>
        <p class="section-subtitle">${esc(t.subheading)}</p>
      </div>
      <div class="team__grid">${membersHtml}</div>
    </div>
  `;

  /* Swap placeholder icons for actual photos when available */
  document.querySelectorAll('.team-card__avatar-wrap[data-photo]').forEach(wrap => {
    const src = wrap.dataset.photo;
    const name = wrap.dataset.name;
    if (!src) return;
    const probe = new Image();
    probe.onload = () => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Photo of ${name}`;
      img.loading = 'lazy';
      img.className = 'team-card__photo';
      wrap.innerHTML = '';
      wrap.appendChild(img);
    };
    probe.src = src;
  });
}

/* ============================================================
   10. REGISTRATION CTA
   ============================================================ */
function buildRegistration() {
  const r = CONTENT.REGISTRATION;
  const reg = CONTENT.SITE_CONFIG.registrationLink;

  document.getElementById('register').innerHTML = `
    <div class="container">
      <div class="registration-cta reveal">
        <div class="registration-cta__bg-pattern" aria-hidden="true"></div>
        <div class="registration-cta__content">
          <div class="registration-cta__badge">
            <i class="fas fa-star" aria-hidden="true"></i>
            ${esc(r.badge)}
          </div>
          <h2 class="registration-cta__heading">${esc(r.heading)}</h2>
          <p class="registration-cta__sub">${esc(r.subheading)}</p>
          <a href="${reg}" target="_blank" rel="noopener noreferrer"
             class="btn btn--primary btn--xl" aria-label="Open registration Google Form">
            <i class="fas fa-rocket" aria-hidden="true"></i>
            ${esc(r.ctaLabel)}
          </a>
          <p class="registration-cta__note">
            <i class="fas fa-info-circle" aria-hidden="true"></i>
            ${esc(r.note)}
          </p>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   11. CONTACT + FOOTER
   ============================================================ */
function buildContact() {
  const c = CONTENT.CONTACT;
  const reg = CONTENT.SITE_CONFIG.registrationLink;

  const infoHtml = c.info.map(item => `
    <div class="contact-info-item">
      <div class="contact-info-item__icon" aria-hidden="true">
        <i class="${esc(item.icon)}"></i>
      </div>
      <div>
        <div class="contact-info-item__label">${esc(item.label)}</div>
        <div class="contact-info-item__value">
          ${item.href
            ? `<a href="${esc(item.href)}">${esc(item.value)}</a>`
            : esc(item.value)}
        </div>
      </div>
    </div>
  `).join('');

  const socialHtml = c.social.map(s => `
    <a href="${esc(s.href)}" class="social-pill" aria-label="${esc(s.platform)}"
       target="_blank" rel="noopener noreferrer">
      <i class="${esc(s.icon)}" aria-hidden="true"></i>
      ${esc(s.platform)}
    </a>
  `).join('');

  document.getElementById('contact').innerHTML = `
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">${esc(c.sectionLabel)}</span>
        <h2 class="section-title">${esc(c.heading)}</h2>
        <p class="section-subtitle">${esc(c.subheading)}</p>
      </div>
      <div class="contact__inner">
        <div>
          <div class="contact__info">${infoHtml}</div>
          <div class="contact__social" aria-label="Social media links">${socialHtml}</div>
        </div>
        <div class="contact__map-placeholder reveal" role="img" aria-label="Location map placeholder">
          <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
          <p>Sobus Center of Excellence<br>NMIMS Campus, Shirpur</p>
          <p style="font-size:0.7rem;color:var(--clr-text-dim);margin-top:0.5rem;">
            Embed your map or add a campus image here
          </p>
        </div>
      </div>
    </div>
  `;
}

function buildFooter() {
  const c = CONTENT.CONTACT;
  const s = CONTENT.SITE_CONFIG;
  const reg = CONTENT.SITE_CONFIG.registrationLink;

  const footerLinksHtml = c.footerLinks.map(l => `
    <a href="${esc(resolveHref(l.href))}"
       ${l.href === 'registrationLink' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
      ${esc(l.label)}
    </a>
  `).join('');

  const footerSocialHtml = c.social.map(s => `
    <a href="${esc(s.href)}" class="social-link" aria-label="${esc(s.platform)}"
       target="_blank" rel="noopener noreferrer">
      <i class="${esc(s.icon)}" aria-hidden="true"></i>
    </a>
  `).join('');

  document.querySelector('footer').innerHTML = `
    <div class="container">
      <div class="footer__inner">
        <!-- Brand -->
        <div class="footer__brand">
          <a href="#home" class="navbar__logo" style="text-decoration:none;">
            <span class="navbar__logo-dot"></span>
            <span class="navbar__logo-text">${esc(s.logoText)}</span>
          </a>
          <p>${esc(s.tagline)}</p>
        </div>

        <!-- Quick links -->
        <div>
          <h3 class="footer__heading">Quick Links</h3>
          <div class="footer__links">${footerLinksHtml}</div>
        </div>

        <!-- Social -->
        <div>
          <h3 class="footer__heading">Follow Us</h3>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">${footerSocialHtml}</div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">${esc(c.copyright)}</p>
        <p class="footer__built-for">${esc(c.builtFor)}</p>
      </div>
    </div>
  `;
}

/* ============================================================
   12. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   13. ACTIVE NAV LINK TRACKING
   ============================================================ */
function initActiveNavLinks() {
  const sections  = document.querySelectorAll('section[id], div[id]');
  const navLinks  = document.querySelectorAll('[data-nav-link]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const isMatch = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', isMatch);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));
}

/* ============================================================
   14. ANIMATED COUNTERS
   ============================================================ */
function initCounters() {
  const counterEls = document.querySelectorAll('[data-counter]');

  const animate = (el) => {
    const raw     = el.getAttribute('data-counter'); // e.g. "500+"
    const suffix  = raw.replace(/[\d.]/g, '');       // "+", ""
    const target  = parseInt(raw, 10);
    const duration = 1500;
    const start   = performance.now();

    const step = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      const current  = Math.round(ease * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => observer.observe(el));
}

/* ============================================================
   15. SCROLL TO TOP BUTTON
   ============================================================ */
function initScrollToTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   16. INIT — Build and wire everything up
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Build all sections from content data
  buildNavbar();
  buildHero();
  buildAbout();
  buildWhy();
  buildTimeline();
  buildTopics();
  buildGallery();
  buildTeam();
  buildRegistration();
  buildContact();
  buildFooter();

  // Behaviours (run after DOM is populated)
  requestAnimationFrame(() => {
    initScrollReveal();
    initActiveNavLinks();
    initCounters();
    initScrollToTop();
  });
});
