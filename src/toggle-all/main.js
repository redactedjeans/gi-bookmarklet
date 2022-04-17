/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* FIXME: there's a load of accessibility issues with this */
/* TODO: better icons lmao */
const actions = {
  'show': {
    'img': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA2ElEQVRo3u2YQQ7DMAgEAz+NlLyqlfrU9l61TjEL7mHmbFusgIVk2wAAAACgClM+drs/nldnzmO3vxTyS/AdomyVCLUYqxDwKbjRHYUYU4mIBKN4IyVEGYA6Q76qxkf3ZnovVQ5XIt7vfDuvyI5ViZgpxUzpWkcmOsRYZyayfTI672oRKqKzyKvdqQuPuJZiJalaf1zVjNUizmO3UVWkGjfjXpEekNhvZlGMDMbs+mMVdatYIKPvWEcjRq10xiWXfiEqbb79m71qTpUOuZU/IwAAAAAAALp4AdJMqByFV3pvAAAAAElFTkSuQmCC',
    'title': 'Show All',
  },
  'hide': {
    'img': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRo3u2YSw7CMAxEbYuLIsGpWqlHLatKqOrHv9gheFasHE9fxkkAKJVKpVKCMLuBaV7W7ff79VT3Q6MQoV5o/LSRITKyp2HJBwDAI3KrWJttSoS7z79NeNMwZ8QzrClELFuoBQ1VRs5MWBua5mW11MBIE1c0rCe8+RxpMYk02UNLcYkJLg3tGhRhgkP1rB6XDkaYkEwqbQ4pk4SEzh0ZijbBrSE1Q62nU9TpT5KGIq8k0rUw6wD0ziZavsxdcakRy4dDL9T7xSJNuIZdm5+r7EkGjOsk2hbm0PB+Taqeukf3JEuQPcZ885ur9+Uw5M+HzGcARtHo5mTvXTgCjaGIUM8B/ksipVKpVCqVRtIH7MHQPRZ6xI4AAAAASUVORK5CYII=',
    'title': 'Hide All',
  }
};
document.querySelectorAll('.filter-panel__labels-item')
  .forEach(section => {
    // construct/update the button
    const id = `${section.id}-toggle`;
    let action = document.getElementById(id);
    if (action === null) {
      action = document.createElement('img');
      action.id = id;
    }
    action.classList = ['filter-panel__labels-title-action'];
    // 'show all' if there are any unselected items; otherwise 'hide all'
    const status = (section.querySelectorAll('.filter-item:not(.filter-item--selected)').length > 0)
      ? 'show' : 'hide';
    action.dataset.status = status;
    action.src = actions[status].img;
    action.title = action.alt = actions[status].title;
    section.querySelector('.filter-panel__labels-title').appendChild(action);

    // bind click event to the action button
    /* FIXME: this is super slow (but only when hiding????) sometimes (e.g. try on Materials) */
    action.onclick = (_ => {
      [...section.querySelectorAll('.filter-item')]
        .forEach(item => {
          // skip hidden items
          if (item.style.display === 'none') return;
          // only click if the item isn't already in the desired status
          if ((action.dataset.status === 'hide' && item.classList.contains('filter-item--selected')) ||
              (action.dataset.status === 'show' && !item.classList.contains('filter-item--selected')))
            item.click()
        });
      // toggle action button
      const status = (action.dataset.status === 'show') ? 'hide' : 'show';
      action.src = actions[status].img;
      action.title = action.alt = actions[status].title;
      action.dataset.status = status;
    });
  });