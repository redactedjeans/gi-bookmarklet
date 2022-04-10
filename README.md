# Teyvat Interactive Map Bookmarklets

## Local Development
Since the `css-tweaks` bookmarklet makes a `fetch` request to the stylesheet,
and `fetch` fails on the `file://` protocol, it needs to be served from a local
server. The simplest way to do when HTTPS is not required (which seems to be
the case here despite my previous notes) is to run `python -m http.server` from
the project's root directory.
