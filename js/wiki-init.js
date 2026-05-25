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
    titleLink.href = pageBase + 'SSDR-TDAJ.html';
    titleLink.className = 'site-title';
    titleLink.textContent = 'DeltaRambles';
    header.appendChild(titleLink);
    document.body.prepend(header);
    // dynamic header
    const headerHeight = header.offsetHeight + 'px';
    document.documentElement.style.setProperty('--header-height', headerHeight);
  }
  // 2. Navigation bar - this is increasingly becoming an array within an array, and so on and so forth
  if (!document.querySelector('.header-nav')) {
  const nav = document.createElement('nav');
  nav.className = 'header-nav';

  // update this with the search index
  const navItems = [
        {
      label: 'Main',
      url: 'wiki/TDA-index.html',
      children: [
        { label: 'DeltaRambles', url: 'wiki/deltarambles.html' },
        { label: 'The Dark Pearl (series)', url: 'wiki/deltarambles-tdp.html' }
      ]
    },
    {
      label: 'Characters',
      url: 'wiki/characters/ch-index.html',
      children: [
        {
          label: 'Main Characters',
          url: 'wiki/characters/mcs-index.html',
          children: [
            { label: 'Mijo', url: 'wiki/characters/mijo.html' },
            { label: 'Jomi',   url: 'wiki/characters/jomi.html' }
          ]
        },
        {
          label: 'M/R Saga Characters',
          url: 'wiki/characters/mrmcs-index.html',
          children: [
            { label: 'Rika', url: 'wiki/characters/rika.html' },
            { label: 'Mizo',   url: 'wiki/characters/mizo.html' }
          ]
        },
        {
          label: 'Darkners',
          url: 'wiki/characters/darkners/ds-index.html',
          children: [
            { label: 'Cara', url: 'wiki/characters/darkners/cara.html' }
          ]
        }
      ]
    },
    {
      label: 'Locations',
      url: 'wiki/locations/lc-index.html',
      children: [
        {
          label: 'Light World',
          url: 'wiki/locations/lw-index.html',
          children: [
            { label: 'Cab. City', 
              url: 'wiki/locations/cabcity.html',
              children: [
                { label: 'Honrato High', url: 'wiki/locations/cabcity/honrato.html' }
              ]},
            { label: 'Fónti City', 
              url: 'wiki/locations/fonticity.html', 
              children: [
                {label: 'Saint Lucile', url: 'wiki/locations/fonticity/saintlucile.html'}
              ]
            }
          ]
        },
        {
          label: 'Dark World',
          url: 'wiki/locations/dw-index.html',
          children: [
            { label: 'Kultima', 
              url: 'wiki/locations/kultima.html', 
              children: [
                {label: 'Dajovy City', url: 'wiki/locations/kultima/dajovy.html'},
                {label: 'Pebble Town', url: 'wiki/locations/kultima/pebbletown.html'}
              ]
            },
            { label: 'Scians-Chemistra', url: 'wiki/locations/scichem.html' }
          ]
        }
      ]
    },
    {
      label: 'Terminologies',
      url: 'wiki/terms/tms-index.html',
      children: [
        {
          label: 'Mijo\'s Forms',
          url: 'wiki/terms/mijo-forms.html',
          },
        {
          label: 'Ascilla\'s Flowers',
          url: 'wiki/terms/asc-flowers.html',
          },
        {
          label: 'Magical Techiniques',
          url: 'wiki/terms/mag-tech.html',
          },
      ]
    }
];

  // Recursive function to build nested dropdowns
  function buildDropdown(items) {
    const ul = document.createElement('ul');
    ul.className = 'nav-dropdown-list';

    items.forEach(item => {
      const li = document.createElement('li');
      li.className = item.children ? 'has-submenu' : '';

      const link = document.createElement('a');
      link.href = pageBase + item.url;
      link.textContent = item.label;
      li.appendChild(link);

      if (item.children && item.children.length > 0) {
        // Recursively build submenu
        const subMenu = buildDropdown(item.children);
        li.appendChild(subMenu);
      }

      ul.appendChild(li);
    });

    return ul;
  }

  // Create top-level dropdown containers
  navItems.forEach(item => {
    const container = document.createElement('div');
    container.className = 'nav-dropdown';

    const topLink = document.createElement('a');
    topLink.href = pageBase + item.url;
    topLink.className = 'nav-dropdown-title';
    topLink.textContent = item.label;
    container.appendChild(topLink);

    if (item.children && item.children.length > 0) {
      const subMenu = buildDropdown(item.children);
      container.appendChild(subMenu);
    }

    nav.appendChild(container);
  });

  header.appendChild(nav);
}
// Ensure variable is set even if header already existed
  if(header) {
     document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
  }
  // 3. Inject search inside header
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
 
header.style.setProperty('--header-height', header.offsetHeight + 'px');

// 3.5: Toggle dropdown on tap for touch devices, after creating header for goodness, inside main initWiki function
document.querySelectorAll('.nav-dropdown-title, li.has-submenu > a').forEach(link => {
  link.addEventListener('click', function(e) {
    const subMenu = this.nextElementSibling;
    if (!subMenu || !subMenu.classList.contains('nav-dropdown-list')) return;
    // If submenu is already visible (via CSS hover), allow navigation
    if (window.getComputedStyle(subMenu).display === 'block') return;
    // Otherwise, prevent navigation and show the submenu
    e.preventDefault();
    subMenu.style.display = 'block';
    const hide = (ev) => {
      if (!this.parentNode.contains(ev.target)) {
        subMenu.style.display = '';
        document.removeEventListener('click', hide);
      }
    };
    document.addEventListener('click', hide);
  });
});

  // 4. Other Search Logic
  const searchInput = document.getElementById('wikiSearch');
  const resultsDiv  = document.getElementById('searchResults');
  if (!searchInput || !resultsDiv) return;

// The complete list of wiki pages — update when we add/rename pages
// FIXME: Once we get big enough, switch to MediaWiki / Miraheze (?)
  const pages = [
    // main
    { title: "Home", url: "SSDR-TDAJ.html" },
    { title: "DeltaRambles", url: "wiki/deltarambles.html" },
    // characters - main
    { title: "Mijo", url: "wiki/characters/mijo.html" },
    { title: "Jomi", url: "wiki/characters/jomi.html" },
    // characters - dw
    { title: "Cara", url: "wiki/characters/cara.html" },
    // characters - m/r
    { title: "Rika", url: "wiki/characters/rika.html" },
    { title: "Mizo", url: "wiki/characters/mizo.html" },
    // locations - lw
    { title: "Cab. City", url: "wiki/locations/cabcity.html" },
    { title: "Fónti City", url: "wiki/locations/fonticity.html" },
    { title: "Honrato High", url: "wiki/locations/cabcity/honrato.html" },
    { title: "Saint Lucile", url: "wiki/locations/fonticity/saintlucile.html" },
    // locations - dw
    { title: "Kultima", url: "wiki/locations/kultima.html" },
    { title: "Dajovy City", url: "wiki/locations/locations/dajovy.html" },
    { title: "Pebble Town", url: "wiki/locations/locations/pebbletown.html" },
    { title: "Scians-Chemistra", url: "wiki/locations/scichem.html" },
    // groups
    { title: "Dark Pearl", url: "wiki/groups/darkpearl.html" },
    // terms
    { title: "Mijo\'s Forms", url: "wiki/groups/darkpearl.html", aliases: ["Lightbringer", "Coronal Radiance"]},
    { title: "Ascilla\'s Flowers", url: "wiki/groups/darkpearl.html", aliases: ["Camellia","Blake Bloom","Snowdrop","Desert Rose"]},
    // TODO: the flowers will keep growing... i should decide if I should alias them on their character or this page.... - jmb 26 May 2026 01:57
    { title: "Magical Techniques", url: "wiki/groups/mag-tech.html",},
  ];

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    resultsDiv.innerHTML = '';
    if (query === '') return;

    const matches = pages.filter(p => {
      return (
        p.title.toLowerCase().includes(query) ||
        (p.aliases && p.aliases.some(alias => alias.toLowerCase().includes(query)))
      );
    });
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