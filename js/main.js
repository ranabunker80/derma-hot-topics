/* ==========================================================================
   Dermatología en Atención Primaria: Hot Topics — Main JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initScrollReveal();
  initNavigation();
  initModals();
});

/* ---------- Parallax Orbs ---------- */
function initParallax() {
  const orbs = document.querySelectorAll('.orb[data-speed]');
  if (!orbs.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        orbs.forEach(orb => {
          const speed = parseFloat(orb.dataset.speed);
          orb.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('reveal--visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
    observer.observe(el);
  });
}

/* ---------- Navigation ---------- */
function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 50);
    lastScroll = window.scrollY;
  });

  // Mobile menu
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('nav__toggle--active');
    links.classList.toggle('nav__links--open');
  });

  // Close on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      toggle.classList.remove('nav__toggle--active');
      links.classList.remove('nav__links--open');

      // Handle CTA nav link
      if (link.classList.contains('nav__cta')) {
        e.preventDefault();
        openModal('modalInscripcion');
      }
    });
  });
}

/* ---------- Modals ---------- */
function initModals() {
  // CTA buttons open inscription modal
  document.getElementById('heroCta').addEventListener('click', () => openModal('modalInscripcion'));
  document.getElementById('registroCta').addEventListener('click', () => openModal('modalInscripcion'));

  // Privacy button
  document.getElementById('privacyBtn').addEventListener('click', () => openModal('modalPrivacidad'));

  // Close buttons
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) closeModal(modal.id);
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal--active').forEach(m => closeModal(m.id));
    }
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('modal--active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('modal--active');
  document.body.style.overflow = '';
}
