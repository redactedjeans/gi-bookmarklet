/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* TODO: add event listeners for keyboard users as well */
/* TODO: once dynamic value replacement is implemented make this list customizeable? */
const collapse = [
  /\s+[Pp]ins?/, /^(Character|Weapon) Material/, /^Waypoints/, /^Landmarks/, /^Enemies/,
  /^Local Specialties/, /^Fishing/, /^Inventory\s?\/\s?Materials/, /^Animals/, /^Ores/, /^Wood/,
  /* custom-created categories (from move items) */
  /^Resources/, /^Navigation/,
];
document.querySelectorAll('.filter-panel__labels-item')
  .forEach(section => {
    const title = section.querySelector('.filter-panel__labels-title');
    /* bind the event listener to toggle display value */
    title.onclick = (e => {
      /* check whether clicking on a pin or material action and stop if so */
      if (e.target.closest('.filter-panel__labels-title-action')) return;
      if (e.target.closest('.filter-panel__labels-title-action--text')) return;
      /* otherwise toggle section */
      const content = section.querySelector('.filter-panel__labels-ascension') 
        ?? section.querySelector('.filter-panel__labels-content');
      const show = section.dataset.collapsed;
      if (show) {
        if (content) content.style.display = null;
        delete section.dataset.collapsed;
      } else {
        if (content) content.style.display = 'none';
        section.dataset.collapsed = true;
      }
    });
    /* if need be, click on it to toggle */
    const empty = [...section.querySelector('.filter-panel__labels-content')?.children ?? []]
      .every(item => item.style.display === 'none');
    const preset = collapse.some(re => re.test(title.textContent));
    const shouldClose = empty || preset;
    console.log(
      `[${title.textContent}]`, empty, preset,
      shouldClose ? 'should close' : 'shouldn\'t close',
      section.dataset.collapsed ? 'is closed' : 'isn\'t closed'
    );
    if ((shouldClose && !section.dataset.collapsed) || (!shouldClose && section.dataset.collapsed)) {
      title.click();
    }
  });

/* watch the ascension cards and make sure the collapsed status stays synced */
const cardIds = ['-3', '-4'];
const observer = new MutationObserver(l => {
  const rec = l.filter(i => i.attributeName === 'class')[0];
  if (rec) {
    const hasCard = [...rec.target.classList].includes('filter-panel__labels-item--card');
    const isCollapsed = rec.target.dataset.collapsed;
    if ((hasCard && isCollapsed) || (!hasCard && !isCollapsed)) {
      rec.target.firstChild.click();
    }
  }
});
cardIds.forEach(id => {
  const node = document.getElementById(id);
  observer.observe(node, { attributes: true });
});