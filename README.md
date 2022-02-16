# Teyvat Interactive Map Bookmarklets

## Usage
For the sake of making it easy to bookmark the scripts, I hacked together an HTML page that
dynamically generates `a` tags for each script. This needs to be served by a local server since
it makes use of `fetch` (which fails on the `file://` protocol); the simplest way to do this on any
computer that has python is to run `python -m http.server` at the project's root directory.
