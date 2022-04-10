/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* TODO: add event listeners for keyboard users as well */
/* TODO: once dynamic value replacement is implemented make this list customizeable? */
const collapse = [
  /[Pp]ins?/, /^Waypoints$/, /^Enemies/, /^Guide$/,
  /^Local Specialties$/, /^Animals$/, /^Fishing$/, /^Ores$/, /^Wood$/,
  /^Materials$/, /* spincrystals and archaic stone are in materials ;( */
];
document.querySelectorAll('.filter-panel__labels-item')
  .forEach(section => {
    /* clone the section title to remove any previous event listeners */
    const old = section.querySelector('.filter-panel__labels-title');
    const title = old.cloneNode(true);
    section.replaceChild(title, old);
    /* bind the event listener to toggle display value */
    title.addEventListener('click', _ => {
      const content = section.querySelector('.filter-panel__labels-content');
      const show = getComputedStyle(content).display === 'none';
      content.style.display = show ? null : 'none';
      section.dataset.collapsed = show ? '' : 'yes';
    });
    /* if need be, click on it to collapse */
    if (collapse.some(r => r.test(title.textContent)) && !section.dataset.collapsed) {
      title.click();
    }
  });
/* inject small css fixes */
const cr_id = 'collapse-resources-css-fix';
let cr_style = document.getElementById(cr_id);
if (cr_style === null) {
  cr_style = document.createElement('style');
  cr_style.id = cr_id;
  document.getElementsByTagName('head')[0].appendChild(cr_style);
}
/* TODO: add hover & active styling to css (mouse + keyboard) */
/* FIXME: this is getting unwieldy; can we load from a file instead? */
cr_style.innerHTML = `
.filter-panel__labels-item .filter-panel__labels-title {
  cursor: pointer;
}\n
.filter-panel__labels-item .filter-panel__labels-title::before {
  content: '−';
  float: left;
  margin-right: .1rem;
  font-size: 150%;
  line-height: .14rem;
}\n
.filter-panel__labels-item[data-collapsed=true] .filter-panel__labels-title::before {
  content: '+';
}
`;