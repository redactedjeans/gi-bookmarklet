# TODO
These are in no particular order.

## Index Page
- [ ] make sure the functions have been fetched before the link is made bookmarkeable
- [ ] the `fetch` requests don't reject on 404 or 500; this isn't handled properly
  - maybe: checkboxes default as disabled (with loader?), are enabled on successful `fetch` (and
  if unsuccessful we display some text beside it or smth)
  - if done properly this could also account for the first item above
- [ ] implement "dynamic" replacement of values to allow for customization

## All functions
- [ ] defer execution until map has rendered (using `MutationObserver`?)
  - strictly speaking this isn't necessary for CSS Tweaks, but doesn't hurt much
- [ ] reload plugins when the region is changed (e.g. to Enkanomiya)
- [ ] bind the bookmarklet code to the "reset" button maybe? idk if this is a good idea

## CSS Tweaks
- [ ] fix header on screen sizes < 900px
- [ ] move the 'level select' interface down (c.f. the zoom slider) in underground mode

## Move Items
- [ ] fix issue where counter in section list still counts items as belonging to former section
- [ ] when a new section is created, it doesn't get an entry in the side list
- [ ] make the changes customizeable (_c.f._ collapse resources)

## Collapse Resources
- [ ] make preset customizeable
- [ ] make this work for keyboard users as well (currently only responsive to `click` event)
  - just checked and afaict the whole map just,,, does not work with keyboards, so
- [ ] when hovering over action buttons, the hover styling shouldn't be applied
- [ ] unlike (I think?) every other bit of code here, the `MutationObserver` doesn't update if we
  re-run the bookmarklet

## Toggle All
- [ ] make button usable by keyboard users
- [ ] using an `img` tag is,,, un-semantic; can we switch to `button`?
- [ ] sometimes it hangs? it's quite slow in any case
  - can we solve this by throwing it in a promise
- [ ] the icons can go out of sync if the pins are toggled via other means (e.g. Reset button)
  - it's smart enough to re-sync the next time the button is clicked, but still
- [ ] does not work at all in underground mode