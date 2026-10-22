# leadfuse.co

Marketing site for LEADFUSE, served by GitHub Pages from the `main` branch (custom domain in `CNAME`).

- `index.html` = Home, `about/`, `privacy/`, `terms/`. Pages are Claude Design exports. `apply/` is the application funnel for everything that is not a Meta ad (see below).
- `SiteNav.dc.html` / `SiteFooter.dc.html` are shared components; `_ds/` is the LEADFUSE design system (`.nojekyll` keeps GitHub from hiding it); `vendor/` self-hosts React and Babel.
- Nav links for pages not yet exported (Services, Results, Careers, Resources) point to `#`.
- Any remaining link to https://apply.leadfuse.co forwards utm_*, fbclid and formsource from the current URL. The footer's apply link now points at `/apply/`.

Push to `main` = live in about a minute.

## /apply: the application for everything that is not an ad

apply.leadfuse.co (the VSL funnel, repo client-leadfuse-funnel) is for Meta ads only. Every other place a LEADFUSE
application link gets posted uses a source link on this site, one folder per source, all the same page:

| Link | Posted where |
|---|---|
| leadfuse.co/apply | this site (source `site`) |
| leadfuse.co/apply/sebas | @sebassmfonseca DMs |
| leadfuse.co/apply/leadfuse | @leadfuse DMs |
| leadfuse.co/apply/bio-sebas | @sebassmfonseca bio |
| leadfuse.co/apply/bio-leadfuse | @leadfuse bio |
| leadfuse.co/apply/free | LEADFUSE Training Material (free Skool room) |
| leadfuse.co/apply/skool | Skool anywhere else |
| leadfuse.co/apply/vip | LEADFUSE VIP (paid room) |
| leadfuse.co/apply/yt | YouTube |
| leadfuse.co/apply/email | emails from the App |

How it works: `apply/_src/sources.json` lists the sources; `apply/_src/build.py` writes `apply/index.html` and
`apply/<slug>/index.html` from `apply/_src/template.html`. The only difference between pages is the hidden fields handed
to the Typeform (xPLSrpmn, the same form the ads funnel uses): `formsource` and `utm_source` = the slug, `utm_medium` =
dm / bio / skool / youtube / email / website, `utm_campaign` = apply, `lf_host` = leadfuse.co. Typeform can only redirect
to one host, so it still sends everyone to apply.leadfuse.co/book; that page reads `lf_host=leadfuse.co` and hands the
visitor straight back to leadfuse.co/apply/book before its pixel loads. From there the three pages are copies of the ads
funnel's pages made by `apply/_src/port.py` (booking -> `apply/book`, book-red -> `apply/book-red`, confirmation ->
`apply/confirmation`), so both funnels always look the same: when those pages change in client-leadfuse-funnel, re-run
port.py here. The booking page only opens with `?email=` on the URL (a fresh Typeform redirect); anything else is sent
back to /apply. `robots.txt` keeps search engines off book, book-red and confirmation, and every /apply page is noindex.
To add a source: add a row to sources.json, run build.py, commit. Never rename a slug that has been posted somewhere.
