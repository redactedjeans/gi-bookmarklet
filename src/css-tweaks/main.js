/* TODO: add option to inline CSS so it can't be changed remotely? */
const cf_id = 'bookmarklet-css-tweaks';
const url = '{url}/{src}/styles.css';
let link = document.getElementById(cf_id);
if (link === null) {
  link = document.createElement('link');
  link.id = cf_id;
  link.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(link);
}
/* add date for cache-busting */
link.href = `${url}?v=${Date.now()}`;