// Your complete list of wiki pages — update when you add/rename pages
// Once we get big enough, switch to MediaWiki / Miraheze (?)
function initWikiSearch(pageBase) {
  const searchInput = document.getElementById('wikiSearch');
  const resultsDiv  = document.getElementById('searchResults');

  // This return IS inside a function – totally fine
  if (!searchInput || !resultsDiv) return;

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