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

| Link | Posted where | utm_source |
|---|---|---|
| leadfuse.co/apply | this site | website |
| leadfuse.co/apply/sebas | @sebassmfonseca DMs | dm_personal |
| leadfuse.co/apply/leadfuse | @leadfuse DMs | dm_business |
| leadfuse.co/apply/bio-sebas | @sebassmfonseca bio | bio_personal |
| leadfuse.co/apply/bio-leadfuse | @leadfuse bio | bio_business |
| leadfuse.co/apply/linkedin | LinkedIn | linkedin |
| leadfuse.co/apply/free | LEADFUSE Training Material (free Skool room) | skool_free |
| leadfuse.co/apply/skool | Skool anywhere else | skool |
| leadfuse.co/apply/vip | LEADFUSE VIP (paid room) | skool_vip |
| leadfuse.co/apply/yt | YouTube | youtube |
| leadfuse.co/apply/email | emails from the App | email |

utm_source follows the naming already on our bio links (bio_business, bio_personal). formsource = the folder name. utm_campaign =
apply. Any utm_* on a link's URL (`?utm_campaign=black-friday`) overrides the page's own tags for that click.

How it works: `apply/_src/sources.json` lists the sources; `apply/_src/build.py` writes `apply/index.html` and
`apply/<slug>/index.html` from `apply/_src/template.html`. Each page is the full application form and nothing else: the
Typeform D8gcUEt2 filling the screen. D8gcUEt2 is the site's copy of the ads form xPLSrpmn (same questions, scoring and
App webhook; `funnel-forms/typeform_site_copy.py` re-syncs it after any scoring change) whose endings redirect to
`leadfuse.co/apply/book/` and `leadfuse.co/apply/not-ready/`, so nobody who starts on leadfuse.co ever touches
apply.leadfuse.co. The only difference between the source pages is the hidden fields handed to the form: `formsource` and
`utm_source` = the place in our bio-link naming (see the table), `utm_medium` = dm / bio / skool / youtube / email / website, `utm_campaign` = apply; tags on the link's URL win. The three
pages after the form are copies of the ads funnel's pages made by `apply/_src/port.py` (booking -> `apply/book`,
book-red -> `apply/not-ready`, confirmation -> `apply/confirmation`), so both funnels always look the same: when those pages
change in client-leadfuse-funnel, re-run port.py here. The booking page only opens with `?email=` on the URL (a fresh
Typeform redirect); anything else is sent back to /apply. `/apply/book-red/` forwards to `/apply/not-ready/`. `robots.txt`
keeps search engines off book, not-ready and confirmation, and every /apply page is noindex.
To add a source: add a row to sources.json, run build.py, commit. Never rename a slug that has been posted somewhere.
