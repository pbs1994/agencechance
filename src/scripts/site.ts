// Site-wide behaviour: header state, overlay menu, reveal-on-scroll,
// consent banner, lightbox, contact form and hero video.

declare global {
  interface Window { dataLayer: unknown[]; gtag: (...args: unknown[]) => void }
}

/* ---------- Header ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
let lastY = window.scrollY;
const onScroll = () => {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 40);
  header?.classList.toggle('is-hidden', y > 400 && y > lastY && !document.body.classList.contains('is-locked'));
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Menu ---------- */
const menu = document.querySelector<HTMLElement>('[data-menu]');
const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
function setMenu(open: boolean) {
  if (!menu || !openBtn) return;
  openBtn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('is-locked', open);
  if (open) {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('is-open'));
    closeBtn?.focus();
  } else {
    menu.classList.remove('is-open');
    setTimeout(() => (menu.hidden = true), 500);
    openBtn.focus();
  }
}
openBtn?.addEventListener('click', () => setMenu(true));
closeBtn?.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu && !menu.hidden) setMenu(false);
});

/* ---------- Reveal ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }),
  { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
);
document.querySelectorAll('.reveal, .reveal-img').forEach((el) => io.observe(el));

/* ---------- Consent ---------- */
const banner = document.querySelector<HTMLElement>('[data-consent]');
const readConsent = () => { try { return localStorage.getItem('ac-consent'); } catch { return null; } };
if (banner && !readConsent()) banner.hidden = false;
document.querySelectorAll<HTMLButtonElement>('[data-consent-choice]').forEach((b) =>
  b.addEventListener('click', () => {
    const v = b.dataset.consentChoice as 'granted' | 'denied';
    try { localStorage.setItem('ac-consent', v); } catch { /* private mode */ }
    window.gtag?.('consent', 'update', { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v });
    if (banner) banner.hidden = true;
  }),
);
document.querySelector('[data-consent-open]')?.addEventListener('click', () => { if (banner) banner.hidden = false; });

/* ---------- Hero video: only autoplay when allowed and not on data saver ---------- */
document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]').forEach((v) => {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || saveData) return;
  const small = window.matchMedia('(max-width: 760px)').matches;
  v.src = small ? v.dataset.srcSmall! : v.dataset.src!;
  v.play().catch(() => { /* autoplay refused: poster stays */ });
});

/* ---------- Lightbox ---------- */
const lb = document.querySelector<HTMLDialogElement>('[data-lightbox]');
if (lb) {
  const img = lb.querySelector('img')!;
  let items: HTMLAnchorElement[] = [];
  let idx = 0;
  const show = (i: number) => {
    idx = (i + items.length) % items.length;
    img.src = items[idx].href;
    img.alt = items[idx].querySelector('img')?.alt ?? '';
  };
  document.querySelectorAll<HTMLAnchorElement>('[data-gallery] a').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      items = [...a.closest('[data-gallery]')!.querySelectorAll<HTMLAnchorElement>('a')];
      show(items.indexOf(a));
      lb.showModal();
    }),
  );
  lb.querySelector('[data-lb-prev]')?.addEventListener('click', () => show(idx - 1));
  lb.querySelector('[data-lb-next]')?.addEventListener('click', () => show(idx + 1));
  lb.querySelector('[data-lb-close]')?.addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
}

/* ---------- Contact form ---------- */
document.querySelectorAll<HTMLFormElement>('form[data-contact]').forEach((form) => {
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
  const started = Date.now();
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = form.dataset.sending ?? '…';
    const data = new FormData(form);
    data.set('elapsed', String(Math.round((Date.now() - started) / 1000)));
    data.set('page', location.pathname);
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !json.ok) throw new Error('send failed');
      form.reset();
      status.textContent = form.dataset.ok ?? 'OK';
      status.dataset.state = 'ok';
      window.dataLayer?.push({ event: 'generate_lead', form_id: 'contact', page_path: location.pathname });
    } catch {
      status.textContent = form.dataset.error ?? 'Error';
      status.dataset.state = 'error';
    } finally {
      btn.disabled = false;
      btn.textContent = label;
    }
  });
});

/* ---------- Reviews slider ---------- */
document.querySelectorAll<HTMLElement>('[data-slider]').forEach((root) => {
  const track = root.querySelector<HTMLElement>('[data-track]')!;
  const step = () => (track.firstElementChild as HTMLElement | null)?.getBoundingClientRect().width ?? 300;
  root.querySelector('[data-prev]')?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  root.querySelector('[data-next]')?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
});

export {};
