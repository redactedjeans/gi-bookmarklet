/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* FIXME: can we bind items to a new section such that the counter moves with it? */
/* TODO: once dynamic value replacement is implemented make this list customizeable? */
/* TODO: if the destination section is not found, create a new one */
const changes = {
  /* Materials */
  'Radiant Spincrystal': /^World Quests/,
  /* World Quests */
  'Artifact': /^Investigation/,
  'Mora': /^Investigation/,
  'Cooking Ingredient': /^Investigation/,
  'Unusual Hilichurl': /^Enemies\s+\(Common\)/,
  'Merchant': /^NPCs/,
};
document.querySelectorAll('.filter-item')
  .forEach(item => {
    const name = item.querySelector('.filter-item__text').textContent;
    if (changes[name] !== undefined) {
      /* find the destination section */
      let [dest] = [...document.querySelectorAll('.filter-panel__labels-item')]
        .filter(section => changes[name].test(section.textContent))
        .map(section => section.querySelector('.filter-panel__labels-content'));
      if (!dest) {
        /* FIXME: create dest */
        /* dest = ... */
        return;
      }
      /* move the item */
      item.remove();
      dest.appendChild(item);
    }
  });