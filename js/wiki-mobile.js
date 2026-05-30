(function () {
  'use strict';

  function initMobileEnhancements() {
    const headerSearch = document.querySelector('.header-search');
    const tocSidebar = document.querySelector('.toc-sidebar');

    // ---------- SEARCH TOGGLE ----------
    if (headerSearch && !document.querySelector('.search-toggle-btn')) {
      const searchToggleBtn = document.createElement('button');
      searchToggleBtn.className = 'search-toggle-btn';
      searchToggleBtn.setAttribute('aria-label', 'Toggle search');
      searchToggleBtn.innerHTML = '🔍';
      headerSearch.prepend(searchToggleBtn);

    searchToggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const header = headerSearch.closest('.site-header');  // 👈 grab the header
    headerSearch.classList.toggle('search-expanded');
    // Toggle class on the header so CSS can hide/show the title
    if (header) {
        header.classList.toggle('search-active');
    }
    if (headerSearch.classList.contains('search-expanded')) {
        const input = headerSearch.querySelector('#wikiSearch');
        if (input) setTimeout(() => input.focus(), 50);
    }
    });
    // Collapse search when clicking outside
    document.addEventListener('click', function (e) {
    if (!headerSearch.contains(e.target)) {
        headerSearch.classList.remove('search-expanded');
        const header = headerSearch.closest('.site-header');
        if (header) header.classList.remove('search-active');
    }
    });

    // Collapse when input loses focus
    const searchInput = headerSearch.querySelector('#wikiSearch');
    if (searchInput) {
    searchInput.addEventListener('blur', function () {
        setTimeout(() => {
        if (!headerSearch.contains(document.activeElement)) {
            headerSearch.classList.remove('search-expanded');
            const header = headerSearch.closest('.site-header');
            if (header) header.classList.remove('search-active');
        }
        }, 100);
     });
   }
}



    // ---------- TOC TOGGLE + BACKDROP ----------
    if (tocSidebar && !document.querySelector('.toc-toggle-btn')) {
      // Create backdrop
      const backdrop = document.createElement('div');
      backdrop.className = 'toc-backdrop';
      document.body.appendChild(backdrop);

      // Create toggle button
      const tocToggleBtn = document.createElement('button');
      tocToggleBtn.className = 'toc-toggle-btn';
      tocToggleBtn.setAttribute('aria-label', 'Toggle table of contents');
      tocToggleBtn.innerHTML = '☰';
      document.body.appendChild(tocToggleBtn);

      function openToC() {
        tocSidebar.classList.add('toc-visible');
        backdrop.classList.add('visible');
      }

      function closeToC() {
        tocSidebar.classList.remove('toc-visible');
        backdrop.classList.remove('visible');
      }

      tocToggleBtn.addEventListener('click', function () {
        if (tocSidebar.classList.contains('toc-visible')) {
          closeToC();
        } else {
          openToC();
        }
      });

      backdrop.addEventListener('click', closeToC);

    // ---------- SMART TOC BUTTON POSITION (avoid header, float up when header hidden) ----------
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader && tocToggleBtn) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.body.classList.remove('header-scrolled');
        } else {
            document.body.classList.add('header-scrolled');
        }
        });
    }, { threshold: 0 });   // fire as soon as a single pixel of header is in/out

    observer.observe(siteHeader);
  } 

      // Close when a ToC link is clicked
      tocSidebar.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          closeToC();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileEnhancements);
  } else {
    initMobileEnhancements();
  }
})();