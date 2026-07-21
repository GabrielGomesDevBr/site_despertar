const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

const updateHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuToggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" aria-hidden="true"></i>`;
  window.lucide?.createIcons();
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
    window.lucide?.createIcons();
  });
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -35px' });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const tdahTabs = [...document.querySelectorAll('[data-tdah-tab]')];
const tdahPanels = [...document.querySelectorAll('[data-tdah-panel]')];
const tdahProgress = document.querySelector('.tdah-progress span');

const selectTdahStep = (step) => {
  const index = tdahTabs.findIndex((tab) => tab.dataset.tdahTab === step);
  tdahTabs.forEach((tab) => {
    const active = tab.dataset.tdahTab === step;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  tdahPanels.forEach((panel) => {
    const active = panel.dataset.tdahPanel === step;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });
  if (tdahProgress && index >= 0) tdahProgress.style.width = `${((index + 1) / tdahTabs.length) * 100}%`;
};

tdahTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTdahStep(tab.dataset.tdahTab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const next = tdahTabs[(index + direction + tdahTabs.length) % tdahTabs.length];
    selectTdahStep(next.dataset.tdahTab);
    next.focus();
  });
});

const needMessages = {
  atencao: 'Gostaria de conversar sobre atenção, comportamento ou uma possível avaliação de TDAH.',
  desenvolvimento: 'Gostaria de conversar sobre desenvolvimento, comunicação ou acompanhamento para TEA.',
  aprendizagem: 'Gostaria de conversar sobre aprendizagem, psicopedagogia ou apoio escolar.',
  emocional: 'Gostaria de conversar sobre saúde emocional e psicoterapia.'
};

document.querySelectorAll('.need-item').forEach((button) => {
  button.addEventListener('click', () => {
    const need = button.dataset.need;
    const message = document.querySelector('[name="mensagem"]');
    if (message && needMessages[need]) message.value = needMessages[need];
    document.getElementById(need === 'atencao' ? 'tdah' : 'contato')?.scrollIntoView({ behavior: 'smooth' });
  });
});

const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const nome = String(data.get('nome') || '').trim();
  const telefone = String(data.get('telefone') || '').trim();
  const para = String(data.get('para') || 'atendimento');
  const mensagem = String(data.get('mensagem') || '').trim();
  const text = [
    `Olá! Meu nome é ${nome}.`,
    `Estou buscando apoio para: ${para}.`,
    mensagem ? `Motivo do contato: ${mensagem}` : '',
    `Meu WhatsApp: ${telefone}.`
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/5511967340051?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

window.lucide?.createIcons({
  attrs: { 'stroke-width': 1.7 }
});
