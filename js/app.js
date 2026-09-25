// Storage can throw (blocked cookies, some private modes); never let that break the page.
const safeStore = {
  get(area, key) {
    try { return window[area].getItem(key); } catch (e) { return null; }
  },
  set(area, key, value) {
    try { window[area].setItem(key, value); } catch (e) { /* ignore */ }
  }
};

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    pageLang: 'en',
    brandName: 'Insurance Central Point',
    brandTagline: 'Protection you can trust',
    callUsDirect: 'Call Us Direct:',
    callUsNum: '1 (786) 212-0436',
    preferPhone: 'Prefer to speak on the phone right now?',
    textSizeLabel: 'Text Size',
    navPartners: 'Partners',
    navServices: 'Services',
    navContact: 'Contact',
    navQuote: 'Request a Quote',
    instagramCta: 'Instagram',
    partnersTitle: 'Our Partners',
    partnersPrev: 'Show previous partners',
    partnersNext: 'Show more partners',
    partnersRegion: 'Partner insurance carriers',
    partnerLogoAlt: 'Insurance carrier partner logo',
    servicesPrev: 'Show previous services',
    servicesNext: 'Show more services',
    servicesRegion: 'Insurance services we offer',
    heroTitle: 'Simple, reliable coverage <br class="hidden sm:block" />for what matters most.',
    heroDesc: 'At Insurance Central Point Insurance, we help you protect your car, home, and family with clear plans and honest guidance. No confusing terms. No pressure. Just coverage you can feel good about.',
    badgeLicensed: 'Licensed & certified agents',
    badgeYears: 'Serving families for over 20 years',
    badgeBilingual: 'Advice in English and Spanish',
    ctaQuote: 'Request a Quote',
    ctaCall: 'Or call us directly at <span class="font-semibold">1 (786) 212‑0436</span>.',
    whyTitle: 'Why Insurance Central Point?',
    why1: 'Clear, easy-to-read policies with no hidden fees.',
    why2: 'Fast claims support from a dedicated local team.',
    why3: 'Flexible plans that fit your budget and your life.',
    quickStart: 'Start in under 60 seconds',
    nameLabel: 'Full Name',
    namePlaceholder: 'e.g. Alex Johnson',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'e.g. 786-000-1234',
    coverageLabel: 'Coverage Type',
    optHealth: 'Health Insurance',
    optHome: 'Home Insurance',
    optLife: 'Life Insurance',
    optDental: 'Dental Insurance',
    optVision: 'Vision Insurance',
    optFinalExpense: 'Final Expense Insurance',
    requestCallback: 'Request a Call Back',
    callbackSending: 'Sending...',
    callbackSuccess: 'Thank you! A licensed agent will call you soon.',
    callbackError: 'Something went wrong. Please call us at 1 (786) 212-0436.',
    callbackNameRequired: 'Please enter your full name.',
    callbackPhoneRequired: 'Please enter your phone number.',
    callbackPhoneInvalid: 'Please enter a valid phone number.',
    callbackNotConfigured: 'Callback is not set up yet. Please call us directly.',
    callbackNote: 'A licensed agent will call you to walk through your options. No obligation.',
    servicesTitle: 'Our Services',
    servicesDesc: 'We offer simple, straightforward plans built to protect your everyday life.',
    autoTitle: 'Auto Insurance',
    autoTag: 'Everyday driving',
    autoDesc: 'Protection for your car, truck, or SUV with coverage options that help you stay on the road and prepared for the unexpected.',
    autoItem1: '• Liability, collision, and comprehensive options',
    autoItem2: '• Discounts for safe drivers and multi‑car families',
    autoItem3: '• Fast claims support when you need it most',
    homeTitle: 'Home Insurance',
    homeTag: 'Your space',
    homeDesc: 'Coverage for your house, condo, or apartment so you can feel confident your space is protected from life’s surprises.',
    homeItem1: '• Protection for your home and belongings',
    homeItem2: '• Options for renters, owners, and landlords',
    homeItem3: '• Support with storms, fire, theft, and more',
    lifeTitle: 'Life Insurance',
    lifeTag: 'Your family',
    lifeDesc: 'Plans that help take care of the people you love, so you can plan for tomorrow with peace of mind today.',
    lifeItem1: '• Term and whole life options',
    lifeItem2: '• Simple, guided application process',
    lifeItem3: '• Flexible coverage amounts',
    healthTitle: 'Health Insurance',
    healthTag: 'Your wellbeing',
    healthDesc: 'Medical plans that help cover doctor visits, prescriptions, and hospital care so you can focus on staying healthy.',
    healthItem1: '• Preventive care and essential health benefits',
    healthItem2: '• In-network and PPO-style flexibility',
    healthItem3: '• Guidance choosing a plan that fits your budget',
    dentalTitle: 'Dental Insurance',
    dentalTag: 'Your smile',
    dentalDesc: 'Coverage for cleanings, fillings, and major dental work with clear benefits you can understand.',
    dentalItem1: '• Routine exams, X-rays, and preventive care',
    dentalItem2: '• Orthodontia options on select plans',
    dentalItem3: '• Access to broad dentist networks',
    visionTitle: 'Vision Insurance',
    visionTag: 'Clear sight',
    visionDesc: 'Eye exams, lenses, and frames to keep routine vision care simple and affordable.',
    visionItem1: '• Annual exam benefits',
    visionItem2: '• Allowances for glasses or contacts',
    visionItem3: '• Savings at participating retailers and providers',
    finalExpenseTitle: 'Final Expense Insurance',
    finalExpenseTag: 'Peace of mind',
    finalExpenseDesc: 'Whole-life style coverage that helps loved ones handle funeral and final costs without added financial stress.',
    finalExpenseItem1: '• Simplified underwriting on many plans',
    finalExpenseItem2: '• Fixed benefits paid to your beneficiaries',
    finalExpenseItem3: '• No medical exam required on many policies',
    footerBrand: 'Insurance Central Point',
    footerDesc: 'Have questions about coverage? Our team is here to help you choose a plan that fits.',
    footerCall: 'Call us',
    footerInstagram: 'Follow us on Instagram',
    footerOffice: 'Office',
    copyright: '© <span id="year"></span> Insurance Central Point. All rights reserved.',
    whatsappButton: 'Chat with us',
    whatsappTooltip: 'Chat with us on WhatsApp',
    whatsappDefaultMsg: 'Hello! I would like to get more information about insurance coverage.'
  },
  es: {
    pageLang: 'es',
    brandName: 'Insurance Central Point',
    brandTagline: 'Protección en la que puedes confiar',
    callUsDirect: 'Llámanos directamente:',
    callUsNum: '1 (786) 212-0436',
    preferPhone: '¿Prefieres hablar por teléfono ahora mismo?',
    textSizeLabel: 'Tamaño de texto',
    navPartners: 'Socios',
    navServices: 'Servicios',
    navContact: 'Contacto',
    navQuote: 'Solicita una cotizacion',
    instagramCta: 'Instagram',
    partnersTitle: 'Nuestros socios',
    partnersPrev: 'Ver socios anteriores',
    partnersNext: 'Ver mas socios',
    partnersRegion: 'Aseguradoras asociadas',
    partnerLogoAlt: 'Logo de aseguradora asociada',
    servicesPrev: 'Ver servicios anteriores',
    servicesNext: 'Ver mas servicios',
    servicesRegion: 'Servicios de seguros que ofrecemos',
    heroTitle: 'Cobertura simple y confiable <br class="hidden sm:block" />para lo que mas importa.',
    heroDesc: 'En Insurance Central Point, te ayudamos a proteger tu auto, hogar y familia con planes claros y asesoria honesta. Sin terminos confusos. Sin presion. Solo cobertura con la que puedes sentirte tranquilo.',
    badgeLicensed: 'Agentes con licencia y certificados',
    badgeYears: 'Sirviendo a familias por mas de 20 años',
    badgeBilingual: 'Asesoria en ingles y español',
    ctaQuote: 'Solicita una cotizacion',
    ctaCall: 'O llamanos directamente al <span class="font-semibold">1 (786) 212‑0436</span>.',
    whyTitle: 'Por que Insurance Central Point?',
    why1: 'Polizas claras y faciles de entender, sin cargos ocultos.',
    why2: 'Soporte rapido para reclamos con un equipo local dedicado.',
    why3: 'Planes flexibles que se ajustan a tu presupuesto y estilo de vida.',
    quickStart: 'Comienza en menos de 60 segundos',
    nameLabel: 'Nombre completo',
    namePlaceholder: 'ej. Alex Johnson',
    phoneLabel: 'Numero de telefono',
    phonePlaceholder: 'ej. 786-000-1234',
    coverageLabel: 'Tipo de cobertura',
    optHealth: 'Seguro medico',
    optHome: 'Seguro de hogar',
    optLife: 'Seguro de vida',
    optDental: 'Seguro dental',
    optVision: 'Seguro de vision',
    optFinalExpense: 'Seguro de gastos finales',
    requestCallback: 'Solicitar llamada',
    callbackSending: 'Enviando...',
    callbackSuccess: 'Gracias. Un agente con licencia te llamara pronto.',
    callbackError: 'Algo salio mal. Por favor llamanos al 1 (786) 212-0436.',
    callbackNameRequired: 'Por favor ingresa tu nombre completo.',
    callbackPhoneRequired: 'Por favor ingresa tu numero de telefono.',
    callbackPhoneInvalid: 'Por favor ingresa un numero de telefono valido.',
    callbackNotConfigured: 'La solicitud de llamada no esta configurada. Por favor llamanos directamente.',
    callbackNote: 'Un agente con licencia te llamara para explicar tus opciones. Sin compromiso.',
    servicesTitle: 'Nuestros Servicios',
    servicesDesc: 'Ofrecemos planes simples y directos para proteger tu vida diaria.',
    autoTitle: 'Seguro de Auto',
    autoTag: 'Conduccion diaria',
    autoDesc: 'Proteccion para tu auto, camioneta o SUV con opciones de cobertura que te ayudan a seguir en el camino y preparado para lo inesperado.',
    autoItem1: '• Opciones de responsabilidad, colision y cobertura completa',
    autoItem2: '• Descuentos para conductores seguros y familias con varios autos',
    autoItem3: '• Soporte rapido para reclamos cuando mas lo necesitas',
    homeTitle: 'Seguro de Hogar',
    homeTag: 'Tu espacio',
    homeDesc: 'Cobertura para tu casa, condominio o apartamento para que tengas tranquilidad de que tu espacio esta protegido de las sorpresas de la vida.',
    homeItem1: '• Proteccion para tu hogar y pertenencias',
    homeItem2: '• Opciones para inquilinos, propietarios y arrendadores',
    homeItem3: '• Apoyo en casos de tormentas, incendios, robos y mas',
    lifeTitle: 'Seguro de Vida',
    lifeTag: 'Tu familia',
    lifeDesc: 'Planes que ayudan a cuidar a las personas que amas, para que planifiques el manana con tranquilidad hoy.',
    lifeItem1: '• Opciones de vida a termino y vida entera',
    lifeItem2: '• Proceso de solicitud simple y guiado',
    lifeItem3: '• Montos de cobertura flexibles',
    healthTitle: 'Seguro medico',
    healthTag: 'Tu bienestar',
    healthDesc: 'Planes medicos que ayudan a cubrir consultas, medicamentos y hospitalizacion para que te concentres en tu salud.',
    healthItem1: '• Cuidado preventivo y beneficios esenciales de salud',
    healthItem2: '• Flexibilidad dentro y fuera de la red',
    healthItem3: '• Asesoria para elegir un plan acorde a tu presupuesto',
    dentalTitle: 'Seguro dental',
    dentalTag: 'Tu sonrisa',
    dentalDesc: 'Cobertura para limpiezas, empastes y tratamientos mayores con beneficios claros y faciles de entender.',
    dentalItem1: '• Examenes de rutina, radiografias y cuidado preventivo',
    dentalItem2: '• Opciones de ortodoncia en planes seleccionados',
    dentalItem3: '• Acceso a amplias redes de dentistas',
    visionTitle: 'Seguro de vision',
    visionTag: 'Vision clara',
    visionDesc: 'Examenes de la vista, lentes y monturas para que el cuidado visual rutinario sea simple y accesible.',
    visionItem1: '• Beneficios para examen anual',
    visionItem2: '• Montos para lentes de contacto o anteojos',
    visionItem3: '• Ahorros en comercios y proveedores participantes',
    finalExpenseTitle: 'Seguro de gastos finales',
    finalExpenseTag: 'Tranquilidad',
    finalExpenseDesc: 'Cobertura tipo vida entera que ayuda a los seres queridos con gastos funerarios y finales sin estres economico.',
    finalExpenseItem1: '• Suscripcion simplificada en muchos planes',
    finalExpenseItem2: '• Beneficios fijos pagados a tus beneficiarios',
    finalExpenseItem3: '• Sin examen medico en muchas polizas',
    footerBrand: 'Insurance Central Point',
    footerDesc: 'Tienes preguntas sobre cobertura? Nuestro equipo esta aqui para ayudarte a elegir un plan que se ajuste a ti.',
    footerCall: 'Llamanos',
    footerInstagram: 'Siguenos en Instagram',
    footerOffice: 'Oficina',
    copyright: '© <span id="year"></span> Insurance Central Point. Todos los derechos reservados.',
    whatsappButton: 'Habla con nosotros',
    whatsappTooltip: 'Habla con nosotros por WhatsApp',
    whatsappDefaultMsg: '¡Hola! Me gustaría obtener más información sobre las opciones de seguro.'
  }
};

let currentLang = null;

function setLanguage(lang) {
  if (!Object.prototype.hasOwnProperty.call(translations, lang)) lang = 'en';
  const content = translations[lang];
  currentLang = lang;
  document.documentElement.lang = content.pageLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (content[key]) {
      el.innerHTML = content[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (content[key]) {
      el.placeholder = content[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && content[key]) {
      el.setAttribute('aria-label', content[key]);
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (content[key]) {
      el.alt = content[key];
    }
  });

  // Keep year visible after replacing footer copyright content.
  document.getElementById('year').textContent = new Date().getFullYear();

  document.querySelectorAll('.lang-toggle').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('ring-2', isActive);
    button.classList.toggle('ring-white', isActive);
  });

  safeStore.set('localStorage', 'preferredLanguage', lang);
  if (typeof updateWhatsAppLink === 'function') {
    updateWhatsAppLink();
  }
}

document.querySelectorAll('.lang-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(safeStore.get('localStorage', 'preferredLanguage') || 'en');

window.partnerLogoFallback = function (img) {
  if (!img || img.dataset.partnerFallbackApplied === 'true') return;
  img.dataset.partnerFallbackApplied = 'true';
  const label = img.dataset.partnerLabel || img.alt || '';
  const frame = img.closest('.partner-slide-frame');
  if (!frame) return;
  const fallback = frame.querySelector('.partner-slide-fallback');
  if (!fallback) return;
  img.classList.add('hidden');
  fallback.textContent = label;
  fallback.classList.remove('hidden');
};

// Image error events don't bubble, so listen in the capture phase (replaces inline onerror).
document.addEventListener('error', (event) => {
  const img = event.target;
  if (img && img.classList && img.classList.contains('partner-slide-img')) {
    window.partnerLogoFallback(img);
  }
}, true);

document.querySelectorAll('.partner-slide-img').forEach((img) => {
  const src = (img.getAttribute('src') || '').trim();
  if (!src) {
    window.partnerLogoFallback(img);
    return;
  }
  if (img.complete && img.naturalWidth === 0) {
    window.partnerLogoFallback(img);
  }
});

function initHorizontalCarousel(config) {
  const scroller = document.getElementById(config.scrollerId);
  const prev = document.querySelector(config.prevSelector);
  const next = document.querySelector(config.nextSelector);
  const section = config.sectionId ? document.getElementById(config.sectionId) : null;
  if (!scroller || !prev || !next) return;

  let autoplayId = null;
  let dragActive = false;
  let dragStartX = 0;
  let dragScrollLeft = 0;
  let dragMoved = false;

  function getSlides() {
    return Array.from(scroller.querySelectorAll(config.slideSelector));
  }

  function maxScrollLeft() {
    return Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  }

  function canScroll() {
    return maxScrollLeft() > 2;
  }

  function getActiveIndex() {
    const slides = getSlides();
    if (!slides.length) return 0;
    let bestIndex = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, index) => {
      const slideLeft = slide.offsetLeft - (slide.offsetParent === scroller ? 0 : scroller.offsetLeft);
      const distance = Math.abs(slideLeft - scroller.scrollLeft);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    return bestIndex;
  }

  function goToIndex(index) {
    const slides = getSlides();
    if (!slides.length) return;
    const count = slides.length;
    const targetIndex = ((index % count) + count) % count;
    const targetLeft = slides[targetIndex].offsetLeft - (slides[targetIndex].offsetParent === scroller ? 0 : scroller.offsetLeft);
    scroller.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    });
  }

  function goNext() {
    if (!canScroll()) return;
    const slides = getSlides();
    const currentIndex = getActiveIndex();
    if (currentIndex >= slides.length - 1) {
      scroller.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      goToIndex(currentIndex + 1);
    }
  }

  function goPrev() {
    if (!canScroll()) return;
    const currentIndex = getActiveIndex();
    if (currentIndex <= 0) {
      scroller.scrollTo({ left: maxScrollLeft(), behavior: 'smooth' });
    } else {
      goToIndex(currentIndex - 1);
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (!canScroll()) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    autoplayId = window.setInterval(goNext, config.autoplayMs);
  }

  function stopAutoplay() {
    if (autoplayId !== null) {
      window.clearInterval(autoplayId);
      autoplayId = null;
    }
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  function shouldAutoplay() {
    return canScroll() && !document.hidden && (!section || !section.matches(':hover'));
  }

  function refreshAutoplay() {
    stopAutoplay();
    if (shouldAutoplay()) {
      startAutoplay();
    }
  }

  prev.addEventListener('click', () => {
    goPrev();
    restartAutoplay();
  });
  next.addEventListener('click', () => {
    goNext();
    restartAutoplay();
  });

  scroller.addEventListener('mousedown', (event) => {
    if (event.button !== 0) return;
    stopAutoplay();
    dragActive = true;
    dragMoved = false;
    dragStartX = event.clientX;
    dragScrollLeft = scroller.scrollLeft;
    scroller.classList.add('select-none');
  });

  window.addEventListener('mousemove', (event) => {
    if (!dragActive) return;
    const deltaX = event.clientX - dragStartX;
    if (Math.abs(deltaX) > 3) {
      dragMoved = true;
    }
    scroller.scrollLeft = dragScrollLeft - deltaX;
  });

  window.addEventListener('mouseup', () => {
    if (!dragActive) return;
    dragActive = false;
    scroller.classList.remove('select-none');
    if (shouldAutoplay()) {
      startAutoplay();
    }
  });

  scroller.addEventListener('click', (event) => {
    if (dragMoved) {
      event.preventDefault();
      event.stopPropagation();
      dragMoved = false;
    }
  });

  scroller.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goNext();
      restartAutoplay();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goPrev();
      restartAutoplay();
    }
  });

  if (section) {
    section.addEventListener('mouseenter', stopAutoplay);
    section.addEventListener('mouseleave', startAutoplay);
  }

  document.addEventListener('visibilitychange', refreshAutoplay);

  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', refreshAutoplay);

  window.addEventListener('resize', refreshAutoplay);
  window.addEventListener('load', refreshAutoplay);

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(refreshAutoplay).observe(scroller);
  }

  scroller.querySelectorAll('img').forEach((img) => {
    if (img.complete) return;
    img.addEventListener('load', refreshAutoplay, { once: true });
    img.addEventListener('error', refreshAutoplay, { once: true });
  });

  startAutoplay();
}

initHorizontalCarousel({
  scrollerId: 'partner-scroller',
  slideSelector: '.partner-logo',
  prevSelector: '[data-partner-prev]',
  nextSelector: '[data-partner-next]',
  sectionId: 'partners',
  autoplayMs: 4500
});

initHorizontalCarousel({
  scrollerId: 'services-scroller',
  slideSelector: '.service-card',
  prevSelector: '[data-service-prev]',
  nextSelector: '[data-service-next]',
  sectionId: 'services',
  autoplayMs: 5000
});

function getTranslation(key) {
  const lang = currentLang || safeStore.get('localStorage', 'preferredLanguage') || 'en';
  return (translations[lang] || translations.en)[key] || '';
}

(function initCallbackForm() {
  const form = document.getElementById('callback-form');
  const statusEl = document.getElementById('callback-status');
  const submitBtn = document.getElementById('callback-submit');
  if (!form || !submitBtn) return;

  function showStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.hidden = !message;
    statusEl.classList.remove('text-slate-500', 'text-emerald-700', 'text-red-600');
    if (type === 'success') {
      statusEl.classList.add('text-emerald-700');
    } else if (type === 'error') {
      statusEl.classList.add('text-red-600');
    } else {
      statusEl.classList.add('text-slate-500');
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const config = window.CALLBACK_CONFIG;
    if (!config || !config.primaryRecipient) {
      showStatus(getTranslation('callbackNotConfigured'), 'error');
      return;
    }

    // Honeypot: real visitors never see or fill this field. Pretend success for bots.
    const honey = form.querySelector('[name="_honey"]');
    if (honey && honey.value) {
      showStatus(getTranslation('callbackSuccess'), 'success');
      form.reset();
      return;
    }

    const fullName = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phonenumber').value.trim();
    const coverageSelect = document.getElementById('coverage');
    const coverageLabel = coverageSelect.options[coverageSelect.selectedIndex].textContent.trim();

    if (!fullName) {
      showStatus(getTranslation('callbackNameRequired'), 'error');
      return;
    }
    if (!phone) {
      showStatus(getTranslation('callbackPhoneRequired'), 'error');
      return;
    }

    if (phone.replace(/D/g, '').length < 7) {
      showStatus(getTranslation('callbackPhoneInvalid'), 'error');
      return;
    }

    const recipient = config.primaryRecipient;

    const buttonKey = submitBtn.dataset.i18n || 'requestCallback';
    submitBtn.disabled = true;
    submitBtn.textContent = getTranslation('callbackSending');
    showStatus('', '');

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const formData = new FormData();
      formData.append('name', fullName);
      formData.append('phone', phone);
      formData.append('coverage_type', coverageLabel);
      formData.append('_subject', `Callback Request: ${coverageLabel}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      if (config.ccRecipient) {
        formData.append('_cc', config.ccRecipient);
      }

      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
        signal: controller.signal
      });

      const result = await response.json();

      if (response.ok && (result.success === true || result.success === 'true')) {
        showStatus(getTranslation('callbackSuccess'), 'success');
        form.reset();
      } else {
        throw new Error('submit failed');
      }
    } catch (error) {
      // Always show our own localized message, never raw browser/server error text.
      showStatus(getTranslation('callbackError'), 'error');
    } finally {
      window.clearTimeout(timeoutId);
      submitBtn.disabled = false;
      submitBtn.textContent = getTranslation(buttonKey);
    }
  });
})();

function updateWhatsAppLink() {
  const link = document.getElementById('whatsapp-link');
  if (!link) return;

  const config = window.WHATSAPP_CONFIG || {};
  const phone = (config.phoneNumber || '17862120436').replace(/[^\d]/g, '');
  const lang = currentLang || safeStore.get('localStorage', 'preferredLanguage') || 'en';
  const messages = config.defaultMessage || {};

  let defaultText = '';
  if (typeof getTranslation === 'function') {
    defaultText = getTranslation('whatsappDefaultMsg');
  }
  if (!defaultText) {
    defaultText = messages[lang] || messages.en || 'Hello!';
  }

  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
}

async function checkCountryIsUS() {
  const config = window.WHATSAPP_CONFIG || {};
  if (config.usOnly === false) return true;

  const cached = safeStore.get('sessionStorage', 'user_country_code');
  if (cached) return cached.toUpperCase() === 'US';

  try {
    const res = await fetch('https://api.country.is', { cache: 'force-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.country) {
        const code = data.country.toUpperCase();
        safeStore.set('sessionStorage', 'user_country_code', code);
        return code === 'US';
      }
    }
  } catch (e) {
    try {
      const res2 = await fetch('https://ipapi.co/json/');
      if (res2.ok) {
        const data2 = await res2.json();
        if (data2 && data2.country_code) {
          const code2 = data2.country_code.toUpperCase();
          safeStore.set('sessionStorage', 'user_country_code', code2);
          return code2 === 'US';
        }
      }
    } catch (e2) {
      console.warn('Geolocation lookup unavailable:', e2);
    }
  }
  return false;
}

(function initWhatsAppOverlay() {
  const overlay = document.getElementById('whatsapp-overlay');
  if (!overlay) return;

  function isMobileDevice() {
    const config = window.WHATSAPP_CONFIG || {};
    if (config.onlyMobile === false) return true;

    const userAgentMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
    const userAgentDataMobile = navigator.userAgentData && navigator.userAgentData.mobile;
    const touchAndSmallViewport = ('ontouchstart' in window || navigator.maxTouchPoints > 0) && window.innerWidth <= 1024;

    return Boolean(userAgentMobile || userAgentDataMobile || touchAndSmallViewport);
  }

  async function evaluateAndDisplay() {
    if (!isMobileDevice()) return;

    const isUS = await checkCountryIsUS();
    if (isUS) {
      overlay.classList.remove('hidden');
      updateWhatsAppLink();
    }
  }

  evaluateAndDisplay();
})();

(function initTextSizeAdjuster() {
  const root = document.documentElement;
  const btnNormal = document.getElementById('btn-text-normal');
  const btnLarge = document.getElementById('btn-text-large');
  if (!btnNormal || !btnLarge) return;

  function setSize(mode) {
    if (mode === 'large') {
      root.classList.add('text-lg-mode');
      btnLarge.className = 'h-8 min-w-[2rem] px-2 rounded-full text-sm font-extrabold bg-white text-navy shadow transition focus:outline-none focus:ring-2 focus:ring-emerald-400';
      btnNormal.className = 'h-8 min-w-[2rem] px-2 rounded-full text-xs font-extrabold text-white hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-emerald-400';
      safeStore.set('localStorage', 'preferredTextSize', 'large');
    } else {
      root.classList.remove('text-lg-mode');
      btnNormal.className = 'h-8 min-w-[2rem] px-2 rounded-full text-xs font-extrabold bg-white text-navy shadow transition focus:outline-none focus:ring-2 focus:ring-emerald-400';
      btnLarge.className = 'h-8 min-w-[2rem] px-2 rounded-full text-sm font-extrabold text-white hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-emerald-400';
      safeStore.set('localStorage', 'preferredTextSize', 'normal');
    }
  }

  btnNormal.addEventListener('click', () => setSize('normal'));
  btnLarge.addEventListener('click', () => setSize('large'));

  const saved = safeStore.get('localStorage', 'preferredTextSize');
  if (saved === 'large') setSize('large');
})();

(function initHeroCarousel() {
  const container = document.getElementById('hero-carousel');
  const slides = container ? container.querySelectorAll('.hero-slide') : [];
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const intervalMs = 5000;

  function goToHeroSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.remove('opacity-0');
        slide.classList.add('opacity-100');
      } else {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.remove('w-2.5', 'bg-white/40');
        dot.classList.add('w-8', 'bg-white');
      } else {
        dot.classList.remove('w-8', 'bg-white');
        dot.classList.add('w-2.5', 'bg-white/40');
      }
    });
  }

  function startAutoplay() {
    stopAutoplay();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    autoplayTimer = setInterval(() => {
      goToHeroSlide(currentIndex + 1);
    }, intervalMs);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToHeroSlide(i);
      startAutoplay();
    });
  });

  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();
})();
