/**
 * ALL INTO ART - Main Application Script
 * Dynamic gallery rendering of 25 authentic ArtStation album works,
 * category filtering, lightbox modal, and client inquiry handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderPortfolio('all');
  initFilterButtons();
  initLightbox();
  initContactForm();
});

/* ===================================================================
   NAVIGATION & ACTIVE STATES
   =================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Tracking
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });
  }
}

/* ===================================================================
   PORTFOLIO RENDERING & CATEGORY FILTERING (25 AUTHENTIC WORKS)
   =================================================================== */
function renderPortfolio(category = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  const filtered = category === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === category);

  grid.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-id', project.id);

    const tags = project.software
      .map(s => `<span class="software-tag">${escapeHtml(s)}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-thumb-box">
        <img 
          src="${project.thumbnail}" 
          alt="${escapeHtml(project.title)}" 
          class="project-thumb-img"
          loading="lazy"
        />
        <span class="card-tag">${escapeHtml(project.categoryLabel)}</span>
        <div class="card-hover-overlay">
          <button class="btn btn-primary btn-sm view-details-btn" data-id="${project.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Inspect Artwork
          </button>
          <a href="${project.artstationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Open on ArtStation" onclick="event.stopPropagation();">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-info">
        <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
        <p class="project-card-desc">${escapeHtml(project.shortDesc)}</p>
        <div class="project-software-tags">
          ${tags}
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openLightbox(project.id);
    });

    grid.appendChild(card);
  });
}

function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      renderPortfolio(cat);
    });
  });
}

/* ===================================================================
   LIGHTBOX MODAL
   =================================================================== */
function initLightbox() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

function openLightbox(projectId) {
  const modal = document.getElementById('projectModal');
  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!modal || !project) return;

  const modalVisual = document.getElementById('modalVisual');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalSoftware = document.getElementById('modalSoftware');
  const modalArtLink = document.getElementById('modalArtLink');

  modalVisual.innerHTML = `
    <img 
      src="${project.fullImage}" 
      alt="${escapeHtml(project.title)}" 
    />
  `;

  modalTag.textContent = project.categoryLabel;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.fullDesc;

  let specsHtml = '';
  if (project.specs) {
    for (const [key, value] of Object.entries(project.specs)) {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
      specsHtml += `
        <div class="modal-spec-cell">
          <div class="modal-spec-lbl">${escapeHtml(formattedKey)}</div>
          <div class="modal-spec-val">${escapeHtml(value)}</div>
        </div>
      `;
    }
  }
  modalSpecs.innerHTML = specsHtml;

  modalSoftware.innerHTML = project.software
    .map(s => `<span class="software-tag">${escapeHtml(s)}</span>`)
    .join('');

  modalArtLink.href = project.artstationUrl;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===================================================================
   CONTACT & PROJECT INQUIRY FORM
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  const alertBox = document.getElementById('formAlert');
  const copyDiscordBtn = document.getElementById('copyDiscordBtn');

  if (copyDiscordBtn) {
    copyDiscordBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('allintoarts').then(() => {
        const originalText = copyDiscordBtn.querySelector('p').textContent;
        copyDiscordBtn.querySelector('p').textContent = '✓ Copied "allintoarts" to clipboard!';
        setTimeout(() => {
          copyDiscordBtn.querySelector('p').textContent = originalText;
        }, 3000);
      }).catch(() => {
        alert('Discord Handle: allintoarts');
      });
    });
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="clientName"]').value.trim();
    const email = form.querySelector('[name="clientEmail"]').value.trim();
    const service = form.querySelector('[name="serviceType"]').value;
    const details = form.querySelector('[name="projectBrief"]').value.trim();

    if (!name || !email || !details) {
      alert('Please complete your name, email, and project scope.');
      return;
    }

    alertBox.className = 'form-alert success';
    alertBox.innerHTML = `
      <strong>Inquiry Staged!</strong><br>
      Thank you, ${escapeHtml(name)}. Haider Shaikh and the All Into Art team will review your project brief and get back to you shortly. You can also message directly on Discord (<code>allintoarts</code>).
    `;

    // Mailto fallback
    const subject = encodeURIComponent(`Game Dev / 3D Art Inquiry: ${service} - ${name}`);
    const body = encodeURIComponent(`Hi Haider / All Into Art Team,\n\nI would like to inquire about a project:\n\nClient Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Scope:\n${details}\n`);
    
    const mailLink = document.createElement('a');
    mailLink.href = `mailto:allintoart.studio@gmail.com?subject=${subject}&body=${body}`;
    mailLink.click();

    form.reset();
  });
}

function escapeHtml(str) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(str).replace(/[&<>"']/g, s => map[s]);
}
