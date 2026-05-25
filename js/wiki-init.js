// HACK: Once we get our own backend server, we should also reduce javascript dependence
// FIXME: There's a bunch of comments to related html pages about the javascript problem, should probably remove that when the time comes. - jmb | 24 May 2026 | 11:58 |
function initWikiSearch(pageBase) {
  // 1. Header Injection
  let header = document.querySelector('.site-header');
  if (!header) {
    header = document.createElement('header');
    header.className = 'site-header';
    // Add title as the first child
    const titleLink = document.createElement('a');
    titleLink.href = pageBase + 'index.html';
    titleLink.className = 'site-title';
    titleLink.textContent = 'DeltaRambles';
    header.appendChild(titleLink);
    document.body.prepend(header);
  }

  // 2. Inject search inside header
  if (!document.getElementById('wikiSearch')) {
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'header-search';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'wikiSearch';
    input.placeholder = 'Search wiki pages…';
    input.autocomplete = 'off';

    const results = document.createElement('div');
    results.id = 'searchResults';

    searchWrapper.appendChild(input);
    searchWrapper.appendChild(results);
    header.appendChild(searchWrapper);
  }

  // 3. Other Search Logic
  const searchInput = document.getElementById('wikiSearch');
  const resultsDiv  = document.getElementById('searchResults');
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