/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
document.querySelectorAll('.filter-item')
  .forEach(node => {
    const nums = node
      .querySelector('.filter-item__img-count')
      ?.textContent.split('/')
      .map(n => parseInt(n));
    if (nums && nums.length > 1 && nums[0] === nums[1]) node.style.display = 'none';
  });
/* inject small css fix */
/* FIXME: should this be part of css-tweaks or remain a standalone fix? */
const hc_id = 'hide-completed-css-fix';
let hc_style = document.getElementById(hc_id);
if (hc_style === null) {
  hc_style = document.createElement('style');
  hc_style.id = hc_id;
  document.getElementsByTagName('head')[0].appendChild(hc_style);
}
hc_style.innerHTML = `
.filter-panel__labels-content { gap: .15rem .1rem; margin-bottom: .15rem; }\n
.filter-panel__labels-filter-item { margin: 0 !important; }
`;