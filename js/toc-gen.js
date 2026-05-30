(function () {
  'use strict';

  async function initTableOfContents() {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    // Wait for <md-block> element to be defined
    await customElements.whenDefined('md-block');

    const mdBlock = document.querySelector('md-block');
    if (!mdBlock) return;

    // Helper: get the root (shadow or light)
    function getRenderedRoot() {
      return mdBlock.shadowRoot || mdBlock;
    }

    // Wait until rendering is truly done
    await new Promise((resolve) => {
      // If already rendered, resolve immediately
      const root = getRenderedRoot();
      if (root.querySelector('h1, h2, h3, h4, h5, h6')) {
        resolve();
        return;
      }
      // Otherwise wait for the md-render event
      mdBlock.addEventListener('md-render', () => {
        // Small delay to ensure Shadow DOM is populated
        setTimeout(resolve, 0);
      }, { once: true });
    });

    const root = getRenderedRoot();
    const headings = root.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) return;

    // Build ToC with unique IDs
    const idCounts = {};   // for deduplication
    const fragment = document.createDocumentFragment();
    const ul = document.createElement('ul');

    headings.forEach((heading) => {
      // Generate a base ID from text
      let baseId = heading.textContent
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')  // remove punctuation
        .replace(/\s+/g, '-')      // spaces to hyphens
        .replace(/-+/g, '-')       // collapse hyphens
        .replace(/^-+|-+$/g, '');  // trim

      if (!baseId) baseId = 'section'; // fallback

      // Ensure uniqueness
      if (idCounts[baseId] !== undefined) {
        idCounts[baseId]++;
        baseId = `${baseId}-${idCounts[baseId]}`;
      } else {
        idCounts[baseId] = 1;
      }

      heading.id = baseId; // set the actual heading id

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${baseId}`;
      a.textContent = heading.textContent;
      // Indent based on heading level
      const level = parseInt(heading.tagName.charAt(1));
      a.style.paddingLeft = `${(level - 1) * 0.8}em`;

      li.appendChild(a);
      ul.appendChild(li);
    });

    tocList.innerHTML = '';
    tocList.appendChild(ul);

    // Optional: highlight current section (IntersectionObserver)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = tocList.querySelector(`a[href="#${entry.target.id}"]`);
          if (link) {
            if (entry.isIntersecting) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px' }
    );

    headings.forEach((h) => observer.observe(h));
  }

  // Kick off when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTableOfContents);
  } else {
    initTableOfContents();
  }
})();