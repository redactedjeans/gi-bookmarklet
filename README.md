# Teyvat Interactive Map Bookmarklets

## Local Development
Since the `compact-sidebar` bookmarklet makes a `fetch` request to the stylesheet from an HTTPS
page (the map), it also needs to be served over HTTPS. The simplest way to do this on localhost is
to use [mkcert](https://github.com/FiloSottile/mkcert) and a proxy server such as nginx.

If not serving the stylesheet from localhost (e.g. by using the (not yet implemented) "inline css"
option), you still need to server the index page from a server, since `fetch` fails on the
`file://` protocol. The simplest way to do when HTTPS is not required is to run
`python -m http.server` from the project's root directory.
