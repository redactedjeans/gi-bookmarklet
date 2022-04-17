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