javascript: (function () {
  /* FIXME: can we make this list customizeable? (maybe once dynamic value replacement is implemented for templates) */
  /* TODO: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
  /* TODO: extend this bookmarklet to also click on specific pins to load a preset? */
  const collapse = [
    'Waypoints', 'Guide',
    'Enemies (Common)', 'Enemies (Elite)', 'Enemies (Boss)', 'Enemies (Easter Egg)',
    'Local Specialties', 'Animals', 'Materials', 'Fishing', 'Ores', 'Wood',
  ];
  document.querySelectorAll('.layer-control__group:not(.layer-control__group--folded)')
    .forEach(section => {
      const title = section.querySelector('.layer-control__group-title-name');
      if (collapse.includes(title.innerText)) title.click();
    })
})();