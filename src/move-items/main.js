/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* FIXME: can we bind items to a new section such that the counter moves with it? */
/* FIXME: when we create a new section, we don't get an entry in the section list */
/* TODO: once dynamic value replacement is implemented make this list customizeable? */
const changes = {
  /* General (Teyvat) Experience */
  'Artifact': /^Resources/,
  'Mora': /^Resources/,
  'Cooking Ingredient': /^Resources/,
  'Weapon': /^Resources/,
  'Ores': /^Resources/,
  'Healing Spot': /^Navigation/,
  'Unusual Hilichurl': /^Enemies/,
  'Merchant': /^Resources/,
  'Electrogranum': /^Navigation/,
  'Phase Gate': /^Navigation/,
  'Stormstone': /^Navigation/,
  'Mysterious Carvings': /^Navigation/,
  'Seelie Court': /^Navigation/,
  'Ruin Brazier': /^Navigation/,
  'Campfire/Torch': /^Navigation/,
  'Pot': /^Navigation/,
  'Dendrogranum': /^Navigation/,
  'Bouncy Mushroom': /^Navigation/,
  'Clusterleaf of Cultivation': /^Navigation/,
  'Interactive Text': /^Navigation/,
  'Xenochromatic Hunter\'s Ray': /^Navigation/,
  'Xenochromatic Armored Crab': /^Navigation/,
  'Xenochromatic Blubberbeast': /^Navigation/,
  'Xenochromatic Ball Octopus': /^Navigation/,
  'Xenochromatic Jellyfish': /^Navigation/,
  /* Enkanomiya World Quests */
  '"Day-Night" Switching Mechanism': /^Navigation/,
  'Places of Essence Worship': /^Navigation/,
  'Triangular Mechanism': /^Navigation/,
  'Enkanomiya Phase Gate': /^Navigation/,
  /* Chasm World Quests */
  'Lumenlamp': /^Navigation/,
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
        clone.querySelector('.filter-panel__labels-title__text')
          .textContent = `${changes[name]}`.replace(/[^\w\s]/g, '');
        clone.id = `${clone.id}-clone-${num++}`;
        tpl.parentElement.appendChild(clone);
        dest = clone.querySelector('.filter-panel__labels-content');
      }
      /* move the item */
      item.remove();
      dest.appendChild(item);
    }
  });
