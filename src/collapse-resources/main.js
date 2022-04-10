/* TODO: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* TODO: extend this bookmarklet to automatically show/hide categories based on a preset */
/*       (perhaps once dynamic value replacement is implemented, so the list is customiseable) */
/* TODO: add event listeners for keyboard users as well */
/*        (this might require loading some custom css to style focused titles) */
/* TODO: load some css to add hover & active styling */
/*        also if possible (pseudo-elements?) add arrows to show state */
document.querySelectorAll('.filter-panel__labels-item')
  .forEach(section => {
    /* clone the section title to remove any previous event listeners */
    const old = section.querySelector('.filter-panel__labels-title');
    const title = old.cloneNode(true);
    section.replaceChild(title, old);
    /* bind the event listener to toggle display value */
    title.addEventListener('click', _ => {
      const content = section.querySelector('.filter-panel__labels-content');
      content.style.display = (getComputedStyle(content).display === 'none') ? null : 'none';
    });
  });