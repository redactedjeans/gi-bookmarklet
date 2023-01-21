# TODO
These are in no particular order.

## Index Page
- [ ] make sure the functions have been fetched before the link is made bookmarkeable
- [ ] the `fetch` requests don't reject on 404 or 500; this isn't handled properly
  - maybe: checkboxes default as disabled (with loader?), are enabled on successful `fetch` (and
  if unsuccessful we display some text beside it or smth)
  - if done properly this could also account for the first item above
- [ ] implement "dynamic" replacement of values to allow for customization
- [x] automatically prefix/namespace variables (e.g. all functions want to use `const id = ...`)
  - it turns out this is very easy to fix by wrapping code in a block statement

## All functions
- [ ] defer execution until map has rendered (using `MutationObserver`?)
  - strictly speaking this isn't necessary to CSS Tweaks, but doesn't hurt much
- [ ] add a shared utility for injecting css (inline or link)
- [ ] bind the bookmarklet code to the "reset" button maybe? idk if this is a good idea

## CSS Tweaks
- [x] center the map
  - since the sidebar floats (we can see behind it) i can't use the same hack i had before
  - this no longer really makes sense because of the changes to the min zoom
- [x] add option to inline css in the function so it can't be changed remotely
  - due to the way the css autoloading works, it was easier to just remove the option to load
  remote css altogether

## Move Items
- [x] create new section if destination isn't found
- [x] also move guide items from Enkanomiya and the Chasm
- [x] for some reason this doesn't seem to play well with show/hide all?
  - when cloning sections I wasn't changing the ID, and toggle all assumed no repeat IDs
- [ ] fix issue where counter in section list still counts items as belonging to former section
- [ ] when a new section is created, it doesn't get an entry in the side list
- [ ] make the changes customizeable (_c.f._ collapse resources)

## Hide Completed
- [x] hide pins of completed sections in the map
  - this wasn't feasible since all pins are rendered on the same `canvas` element,
  therefore we can't just hide one element/layer
  - instead we just deselect items when we hide them (if checked) to make sure they
  don't linger on the map

## Collapse Resources
- [x] load css fix to add arrow indicating section state (open/closed)
- [x] open/close sections based on a preset
- [ ] make preset customizeable
- [ ] make this work for keyboard users as well (currently only responsive to `click` event)
  - just checked and afaict the whole map just,,, does not work with keyboards, so
- [x] load css to add focus, hover, active styling to section titles
  - no active styling to match other interactive elements on the map
- [x] this function breaks the action buttons in the self-created and in-game pin sections
- [x] the hover style on titles shouldn't show up when hovering over an action button
  - for now, I just got rid of the hover/focus styles (since they broke on a previous update anyway)
- [x] automatically collapse empty sections
  - this is only relevant if we also run hide completed, as it might hide all the resources in a
  given section
- [ ] fix issue where character/weapon material +/- indicator is sometimes wrong
  - this happens when we add or remove a character/weapon sometimes

## Toggle All
- [ ] make button usable by keyboad users
- [ ] using an `img` tag is,,, un-semantic; can we switch to `button`?
- [ ] better icons
- [ ] sometimes it hangs? it's quite slow in any case
  - can we solve this by throwing it in a promise
