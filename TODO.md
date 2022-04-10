# TODO
These are in no particular order.

## Index Page
- [ ] make sure the functions have been fetched before the link is made bookmarkeable
- [ ] the `fetch` requests don't reject on 404 or 500; this isn't handled properly
- [ ] implement "dynamic" replacement of values to allow for customization
- [x] automatically prefix/namespace variables (e.g. all functions want to use `const id = ...`)
  - it turns out this is very easy to fix by wrapping code in a block statement

## All functions
- [ ] defer execution until map has rendered (using `MutationObserver`?)
  - strictly speaking this isn't necessary to CSS Tweaks, but doesn't hurt much
- [ ] add a shared utility for injecting css (inline or link) 

## CSS Tweaks
- [ ] center the map
  - since the sidebar floats (we can see behind it) i can't use the same hack i had before
  - it's also less of an issue than it was before because they changed the min zoom
- [ ] add option to inline css in the function so it can't be changed remotely

## Collapse Resources
- [x] load css fix to add arrow indicating section state (open/closed)
- [x] open/close sections based on a preset
- [ ] make preset customizeable
- [ ] make this work for keyboard users as well (currently only responsive to `click` event)
  - just checked and afaict the whole map just,,, does not work with keyboards, so
- [x] load css to add focus, hover, active styling to section titles
  - no active styling to match other interactive elements on the map

## Hide Completed
- [ ] hide empty sections (all items are completed)
  - the naive solution breaks when a region is selected because e.g. all oculi in Liyue might be
  completed while there remain some in other regions
- [ ] hide pins of completed sections in the map
  - this might not be easily feasible, since all pins are rendered on the same `canvas` element,
  therefore we can't just hide one element/layer
  - an alternative might be to just deselect items when we hide them (if checked) to make sure they
  don't linger on the map

## New Functions
- [ ] load a pin preset
  - this could be bundled into collapse resources, but might make sense on its own too
  - technically this is already handled by the pins in the url when bookmarking, but switching
  to/from the Chasm or Enkanomiya doesn't work very well
- [ ] show/hide all pins in a section
  - need to do this without mutating the DOM, but also can't bind event listeners to
  pseudo-elements
