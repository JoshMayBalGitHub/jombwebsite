// So, how does this work? TODO: If you have free time, find a way to fix it without JS pretty please?
// I dunno. but it waits for page to load, 
// then it simply listens then looks for hash (#), then once the hash is used to do something, do it but after 50 seconds
// Crazy right? IDK why this needed to be used, but.. welp, it's working so.. that's the end of it. — jmb~ | February 28, 2026 
window.addEventListener('load', () => {
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' }); 
      }, 50);
    }
  }
});