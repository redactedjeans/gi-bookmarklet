/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
document.querySelectorAll('.filter-item')
  .forEach(node => {
    const nums = node
      .querySelector('.filter-item__img-count')
      ?.textContent.split('/')
      .map(n => parseInt(n));
    if (nums && nums.length > 1 && nums[0] === nums[1]) node.style.display = 'none';
  });