/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* TODO: add event listeners for keyboard users as well */
/* TODO: once dynamic value replacement is implemented make this list customizeable? */
const collapse = [
  /\s+[Pp]ins?/, /^Waypoints$/, /^Enemies/, /^Guide$/,
  /^Local Specialties$/, /^Animals$/, /^Fishing$/, /^Ores$/, /^Wood$/,
  /* these three all have some collectibles and some non-collectibles; hide by default */
  /^Materials$/, /^Investigation$/, /^NPC$/,
];
document.querySelectorAll('.filter-panel__labels-item')
  .forEach(section => {
    const title = section.querySelector('.filter-panel__labels-title');
    /* bind the event listener to toggle display value */
    title.onclick = (e => {
      /* check whether clicking on a pin action and stop if so */
      if ([...e.target.classList].includes('filter-panel__labels-title-action')) return;
      /* otherwise toggle section */
      const content = section.querySelector('.filter-panel__labels-content');
      const show = getComputedStyle(content).display === 'none';
      if (show) {
        content.style.display = null;
        delete section.dataset.collapsed;
      } else {
        content.style.display = 'none';
        section.dataset.collapsed = true;
      }
    });
    /* if need be, click on it to toggle */
    const preset = collapse.some(re => re.test(title.textContent));
    if ((preset && !section.dataset.collapsed) || (!preset && section.dataset.collapsed)) {
      title.click();
    }
  });
/* inject small css fixes */
const id = 'collapse-resources-css-fix';
let style = document.getElementById(id);
if (style === null) {
  style = document.createElement('style');
  style.id = id;
  document.getElementsByTagName('head')[0].appendChild(style);
}
/* TODO: add hover & active styling to css (mouse + keyboard) */
/* FIXME: this is getting unwieldy; can we load from a file instead? */
style.innerHTML = `
.filter-panel__labels-item .filter-panel__labels-title { cursor: pointer; }\n
.filter-panel__labels-item .filter-panel__labels-title:hover,
.filter-panel__labels-item .filter-panel__labels-title:focus {
  text-decoration: underline;
}\n
.filter-panel__labels-item .filter-panel__labels-title::before {
  content: '−';
  float: left;
  margin-right: .1rem;
  font-size: 150%;
  line-height: .14rem;
}\n
.filter-panel__labels-item[data-collapsed] .filter-panel__labels-title::before { content: '+'; }
`;