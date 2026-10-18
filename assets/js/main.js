/**
 * ALL INTO ART - Main Application Logic
 * Portfolio gallery rendering, category filtering, lightboxes, modals, and contact handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderPortfolioGrid('all');
  initPortfolioFilters();
  initProjectModal();
  initVideoModal();
  initContactForm();
  initScrollAnimations();
});

/* ===================================================================
   NAVIGATION & MOBILE MENU
   =================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Tracking
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });
  }
}

/* ===================================================================
   PORTFOLIO GALLERY & FILTERING
   =================================================================== */
function renderPortfolioGrid(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  const filtered = filter === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

  grid.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card reveal-on-scroll is-visible';
    card.setAttribute('data-id', project.id);

    const tagsHtml = project.software
      .map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-thumb-wrap">
        <img 
          src="${project.thumbnail}" 
          alt="${escapeHtml(project.title)}" 
          class="project-thumb"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'"
        />
        <span class="card-category-badge">${escapeHtml(project.categoryLabel)}</span>
        <div class="card-overlay-actions">
          <button class="btn btn-primary btn-sm inspect-btn" data-id="${project.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Inspect Project
          </button>
          <a href="${project.artstationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View on ArtStation">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(project.shortDesc)}</p>
        <div class="project-tags">
          ${tagsHtml}
        </div>
      </div>
    `;

    // Click handler for card
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked external link directly
      if (e.target.closest('a')) return;
      openProjectModal(project.id);
    });

    grid.appendChild(card);
  });
}

function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderPortfolioGrid(filter);
    });
  });
}

/* ===================================================================
   PROJECT LIGHTBOX MODAL
   =================================================================== */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!modal || !project) return;

  const modalMedia = document.getElementById('modalMedia');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalTools = document.getElementById('modalTools');
  const modalArtstationLink = document.getElementById('modalArtstationLink');

  // Populate Media
  modalMedia.innerHTML = `
    <img 
      src="${project.fullImage}" 
      alt="${escapeHtml(project.title)}" 
      onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'"
    />
  `;

  modalCategory.textContent = project.categoryLabel;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.fullDesc;

  // Populate Specs
  let specsHtml = '';
  for (const [key, value] of Object.entries(project.specs)) {
    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    specsHtml += `
      <div class="modal-spec-item">
        <div class="modal-spec-label">${escapeHtml(formattedKey)}</div>
        <div class="modal-spec-val">${escapeHtml(value)}</div>
      </div>
    `;
  }
  modalSpecs.innerHTML = specsHtml;

  // Populate Tools
  modalTools.innerHTML = project.software
    .map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`)
    .join('');

  // ArtStation album direct link
  modalArtstationLink.href = project.artstationUrl;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===================================================================
   STUDIO SHOWREEL / VIDEO MODAL
   =================================================================== */
function initVideoModal() {
  const videoModal = document.getElementById('videoModal');
  const playButtons = document.querySelectorAll('.trigger-video-modal');
  const closeVideoBtn = document.getElementById('closeVideoModalBtn');
  const videoContainer = document.getElementById('videoContainer');

  if (!videoModal) return;

  playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoModal();
    });
  });

  if (closeVideoBtn) {
    closeVideoBtn.addEventListener('click', closeVideoModal);
  }

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      closeVideoModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      closeVideoModal();
    }
  });

  function openVideoModal() {
    // High-impact Unreal Engine 5 visual reel presentation
    videoContainer.innerHTML = `
      <div style="position: absolute; inset: 0; background: #000; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center;">
        <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(0, 242, 254, 0.2); border: 2px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; box-shadow: 0 0 30px var(--cyan-glow);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--cyan-primary)">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.8rem; margin-bottom: 0.75rem; color: #fff;">
          ALL INTO ART - UNREAL ENGINE 5 SHOWCASE
        </h3>
        <p style="max-width: 600px; color: #94a3b8; font-size: 1.05rem; margin-bottom: 2rem; line-height: 1.6;">
          Real-time cinematics, environment breakdowns, and high-fidelity 3D game assets curated directly from Haider Shaikh's ArtStation Album #3654607.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <a href="https://www.artstation.com/haidershaikh6/albums/3654607" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Open Album on ArtStation (3654607)
          </a>
          <button id="resumeModalClose" class="btn btn-secondary">
            Close Viewer
          </button>
        </div>
      </div>
    `;

    document.getElementById('resumeModalClose')?.addEventListener('click', closeVideoModal);

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    videoModal.classList.remove('active');
    videoContainer.innerHTML = '';
    document.body.style.overflow = '';
  }
}

/* ===================================================================
   CONTACT FORM & PROJECT INQUIRY
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('projectInquiryForm');
  const feedback = document.getElementById('formFeedback');
  const copyDiscordBtn = document.getElementById('copyDiscordBtn');

  if (copyDiscordBtn) {
    copyDiscordBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('allintoarts').then(() => {
        const originalText = copyDiscordBtn.innerHTML;
        copyDiscordBtn.innerHTML = `<span>✓ Copied 'allintoarts'</span>`;
        setTimeout(() => {
          copyDiscordBtn.innerHTML = originalText;
        }, 2500);
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
    const projectType = form.querySelector('[name="projectType"]').value;
    const details = form.querySelector('[name="projectDetails"]').value.trim();

    if (!name || !email || !details) {
      alert('Please fill out your name, email, and project brief details.');
      return;
    }

    // Submit Simulation & Mailto fallback
    feedback.className = 'form-feedback success';
    feedback.innerHTML = `
      <strong>Project Inquiry Received!</strong><br>
      Thank you, ${escapeHtml(name)}! Your game dev inquiry has been staged. Haider Shaikh and the All Into Art team will review your project brief and reply within 24 hours. You can also connect directly on Discord (<code>allintoarts</code>).
    `;

    // Also trigger mailto so user can send immediately from their email client
    const mailtoSubject = encodeURIComponent(`Game Dev Inquiry: ${projectType} - ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Haider / All Into Art Team,\n\nI would like to discuss a project with you.\n\nProject Type: ${projectType}\nClient: ${name}\nEmail: ${email}\n\nProject Details:\n${details}\n`);
    
    const mailLink = document.createElement('a');
    mailLink.href = `mailto:allintoart.studio@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    mailLink.click();

    form.reset();
  });
}

/* ===================================================================
   SCROLL REVEAL ANIMATIONS
   =================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    elements.forEach(el => el.classList.add('is-visible'));
  }
}

/* Helper Utilities */
function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}
