/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* FIXME: can we bind items to a new section such that the counter moves with it? */
/* FIXME: when we create a new section, we don't get an entry in the section list */
/* TODO: once dynamic value replacement is implemented make this list customizeable? */
const changes = {
  /* General (Teyvat) World Quests */
  'Artifact': /^Investigation/,
  'Mora': /^Investigation/,
  'Cooking Ingredient': /^Investigation/,
  'Weapon': /^Investigation/,
  'Unusual Hilichurl': /^Enemies\s+\(Common\)/,
  'Merchant': /^Investigation/,
  'Electrogranum': /^Guide/,
  'Phase Gate': /^Guide/,
  'Stormstone': /^Guide/,
  'Mysterious Carvings': /^Guide/,
  'Seelie Court': /^Guide/,
  'Ruin Brazier': /^Guide/,
  'Campfire/Torch': /^Guide/,
  'Pot': /^Guide/,
  'Dendrogranum': /^Guide/,
  'Bouncy Mushroom': /^Guide/,
  'Clusterleaf of Cultivation': /^Guide/,
  /* Enkanomiya World Quests */
  '"Day-Night" Switching Mechanism': /^Guide/,
  'Places of Essence Worship': /^Guide/,
  'Triangular Mechanism': /^Guide/,
  'Enkanomiya Phase Gate': /^Guide/,
  /* Chasm World Quests */
  'Lumenlamp': /^Guide/,
};
let num = 0;
document.querySelectorAll('.filter-item')
  .forEach(item => {
    const name = item.querySelector('.filter-item__text').textContent.replace(/\s/g, ' ');
    if (changes[name] !== undefined) {
      /* find the destination section */
      let [dest] = [...document.querySelectorAll('.filter-panel__labels-item')]
        .filter(section => changes[name].test(section.textContent))
        .map(section => section.querySelector('.filter-panel__labels-content'));
      /* if none, create it */
      if (!dest) {
        const tpl = item.parentElement.parentElement;
        const clone = tpl.cloneNode(true);
        clone.querySelector('.filter-panel__labels-content').replaceChildren();
        clone.querySelector('.filter-panel__labels-title').textContent = `${changes[name]}`.replace(/[^\w\s]/g, '');
        clone.id = `${clone.id}-clone-${num++}`;
        tpl.parentElement.appendChild(clone);
        dest = clone.querySelector('.filter-panel__labels-content');
      }
      /* move the item */
      item.remove();
      dest.appendChild(item);
    }
  });
