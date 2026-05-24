// HACK: Once we get our own backend server, we should also reduce javascript dependence
// FIXME: There's a bunch of comments to related html pages about the javascript problem, should probably remove that when the time comes. - jmb | 24 May 2026 | 11:58 |
function initWikiSearch(pageBase) {

// Auto-inject header
if (!document.querySelector('.site-header')) {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `<a href="${pageBase}SSDR-TDAJ.html" class="site-title">DeltaRambles</a>`;
  document.body.prepend(header);
}

 if (!document.getElementById('wikiSearch')) {
    const searchWrapper = document.createElement('div');
    searchWrapper.style.cssText = 'position: relative; display: inline-block; width: 100%; max-width: 400px; margin: 1em 0;';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'wikiSearch';
    input.placeholder = 'Search wiki pages…';
    input.autocomplete = 'off';

    const results = document.createElement('div');
    results.id = 'searchResults';

    searchWrapper.appendChild(input);
    searchWrapper.appendChild(results);

    const header = document.querySelector('.site-header');
    if (header) {
      header.after(searchWrapper);
    } else {
      document.body.prepend(searchWrapper);
    }
  }

  const searchInput = document.getElementById('wikiSearch');
  const resultsDiv  = document.getElementById('searchResults');

  // This return IS inside a function – totally fine
  if (!searchInput || !resultsDiv) return;

// The complete list of wiki pages — update when we add/rename pages
// FIXME: Once we get big enough, switch to MediaWiki / Miraheze (?)
  const pages = [
    { title: "Home", url: "SSDR-TDAJ.html" },
    { title: "Mijo", url: "wiki/characters/mijo.html" },
    { title: "Dark Pearl", url: "wiki/groups/darkpearl.html" },
    { title: "DeltaRambles",     url: "wiki/deltarambles.html" },
    { title: "The Forest",   url: "locations/forest.html" },
    { title: "Plot Outline", url: "plot/outline.html" }
  ];

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    resultsDiv.innerHTML = '';
    if (query === '') return;

    const matches = pages.filter(p => p.title.toLowerCase().includes(query));
    matches.forEach(p => {
      const link = document.createElement('a');
      link.href = p.url;
      link.textContent = p.title;
      link.style.display = 'block';
      resultsDiv.appendChild(link);
    });
    if (matches.length === 0) {
  const noResult = document.createElement('div');
  noResult.className = 'no-results';
  noResult.textContent = 'No pages found';
  resultsDiv.appendChild(noResult);
}
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('#wikiSearch') && !e.target.closest('#searchResults')) {
      resultsDiv.innerHTML = '';
    }
  });
}