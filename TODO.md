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

## Load Preset
- [ ] make preset customizeable (_c.f._ collapse resources)

## Collapse Resources
- [x] load css fix to add arrow indicating section state (open/closed)
- [x] open/close sections based on a preset
- [ ] make preset customizeable
- [ ] make this work for keyboard users as well (currently only responsive to `click` event)
  - just checked and afaict the whole map just,,, does not work with keyboards, so
- [x] load css to add focus, hover, active styling to section titles
  - no active styling to match other interactive elements on the map
- [x] this function breaks the action buttons in the self-created and in-game pin sections
- [ ] the hover style on titles shouldn't show up when hovering over an action button

## Toggle All
- [ ] make button usable by keyboad users
- [ ] using an `img` tag is,,, un-semantic; can we switch to `button`?
- [ ] better icons
- [ ] sometimes it hangs? it's quite slow in any case
  - can we solve this by throwing it in a promise

## Hide Completed
- [ ] hide empty sections (all items are completed)
  - the naive solution breaks when a region is selected because e.g. all oculi in Liyue might be
  completed while there remain some in other regions
- [ ] hide pins of completed sections in the map
  - this might not be easily feasible, since all pins are rendered on the same `canvas` element,
  therefore we can't just hide one element/layer
  - an alternative might be to just deselect items when we hide them (if checked) to make sure they
  don't linger on the map
