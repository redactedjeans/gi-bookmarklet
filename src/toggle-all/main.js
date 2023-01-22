/* FIXME: need some way to defer this until the relevant markup has loaded (MutationObserver?) */
/* FIXME: there's a load of accessibility issues with this */
const actions = {
  'show': {
    'img': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAPUExURUdwTJucn5ianpqcn5ucn1ycyXAAAAAEdFJOUwDHMHMxOfAqAAABB0lEQVRIx+1UyxWEIAzUuAX4KwB1C0ClATT917SCRFSC7tnnnHhhSIb8kuTFi8cA+gKxGC45Ha4oRJzTIEGLe06cleEeM09S5q5qE+hqc5IcJzVB3E1vzhyp3gsxrJxX5COAYlVt1lGEb+gpGZeopXs0MbJnypWVljHSlXfkJC8WEfxN+4Ran5/gf+Bu0rUmzjQFkvITiZwfSNKTkGTee1JnTyRgJxzCnNebEPRO80iebOOJveUoysYDKgswGQdyAOM6K1+mdueCAtub6dGq+NY8dKbRX0YGilhNbKjMv1APdtaRb3E/d7q+mru/JngdJAcZ3xjE0vJy9xSGUt2usbZ9d/mLB+EHOolW9mtUZdMAAAAASUVORK5CYII=',
    'title': 'Show All',
  },
  'hide': {
    'img': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAPUExURZucn0dwTJqbnpucn5ubn074624AAAAFdFJOU/8AHMxsPnguGAAAAURJREFUSMftlUF6hCAMRv9v8AAl5QBFegBGPQDyzf3P1AUgCcI4+8rKxeORhAShP1i4of8LObVfQuTxuIQcriHyH0AOwDCmOUabRdMgu18PAJvlogaiAACAslwkocJgESIJFaYRCcglYl0bEYfIA1BRN6lJyAGYLKuRPUPkDyaJzHKGWBjpMyh7ggKwaC7qFNMAZWcSuc61fB93nlOjugvstF0GF85d4KGEiLtRQ3o0WdIRFGpIT90U+5AX6KsEwMoVWshkE78134GmRmTOg+ABK0WuhFmhH+ApRHlbW/FJiAxKSBWitrPrhfMukJ1tuiNlhGg0UlxEYTRSVUQBg5HKDRnn+eUxGqnc2TimWA+mRZvCTLYHSZGyvYc1icgnZrPd1zenRq91Xbc4eKLl9PchEjkPoPmNiB+3X0Mm3n/OG3q3/gCPFK1M+zOYdwAAAABJRU5ErkJggg==',
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
    action.className = 'filter-panel__labels-title-action toggle';
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