# leadfuse.co

Marketing site for LEADFUSE. Static, served by `serve` from `deploy/` (same setup as the apply.leadfuse.co funnel).

- Pages are Claude Design exports (`index.html` = Home, `about.html` = About) plus Privacy/Terms copied from the funnel.
- `SiteNav.dc.html` / `SiteFooter.dc.html` are shared components; `_ds/` is the LEADFUSE design system; `vendor/` self-hosts React and Babel.
- Nav links for pages not yet exported (Services, Results, Careers, Resources) point to `#`.
- Every link to https://apply.leadfuse.co forwards utm_*, fbclid and formsource from the current URL.

Deploy: Railway, start command `npm start` (see package.json). Custom domain: www.leadfuse.co.
