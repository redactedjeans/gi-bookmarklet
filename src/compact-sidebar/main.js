javascript: (function () {
  /* compact sidebar cascading stylesheet */
  const id = 'cscss';
  const url = '{url}/src/compact-sidebar/styles.css';
  let link = document.getElementById(id);
  if (link === null) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  /* add date for cache-busting */
  link.href = `${url}?v=${Date.now()}`;
})();