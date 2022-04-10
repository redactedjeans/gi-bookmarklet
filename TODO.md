# TODO
These are in no particular order.

## Index Page
- [ ] make sure the functions have been fetched before the link is made bookmarkeable
- [ ] the `fetch` requests don't reject on 404 or 500; this isn't handled properly
- [ ] implement "dynamic" replacement of values to allow for customization
- [ ] automatically prefix/namespace variables (e.g. all functions want to use `const id = ...`)
  - this is currently manageable due to the small size of each function, but would be nice if i
  didn't have to worry about it

## All functions
- [ ] defer execution until map has rendered (using `MutationObserver`?)
  - this isn't strictly speaking necessary to CSS Tweaks, but doesn't hurt much

## CSS Tweaks
- [ ] add option to inline css in the function so it can't be changed remotely

## Collapse Resources
- [x] load css fix to add arrow indicating section state (open/closed)
- [ ] open/close sections based on a preset (customizeable or not)
- [ ] make this work for keyboard users as well (currently only responsive to `click` event)
  - just checked and afaict the whole map just,,, does not work with keyboards, so
- [ ] load css to add focus, hover, active styling to section titles

## Hide Completed
- [ ] hide empty sections (all items are completed)
  - the naive solution breaks when a region is selected because e.g. all oculi in liyue might be
  completed while there remain some in other regions
