javascript: (function () {
  /* TODO: need some way to defer this until the relevant markup has loaded */
  document.querySelectorAll('.layer-control__list .layer-control__item')
    .forEach(node => {
      const nums = node
        .querySelector('span > span')
        .textContent.split('/')
        .map(n => parseInt(n));
      if (nums.length > 1 && nums[0] === nums[1]) node.remove();
      /* TODO: remove pins from map! */
    });
})();