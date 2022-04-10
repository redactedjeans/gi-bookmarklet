/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* TODO: once dynamic value replacement is implemented make this list customizeable? */
const preset = [/^Statue of The Seven$/, /^Teleport Waypoint$/, /^Domain$/];
/* for all selected items, click if not in preset */
document.querySelectorAll('.filter-item.filter-item--selected')
  .forEach(item => {
    if (preset.every(re => !re.test(item.title))) item.click();
  });
/* for all unselected items, click if in preset */
document.querySelectorAll('.filter-item:not(.filter-item--selected)')
  .forEach(item => {
    if (preset.some(re => re.test(item.title))) item.click();
  });