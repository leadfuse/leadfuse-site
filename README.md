# leadfuse.co

Marketing site for LEADFUSE, served by GitHub Pages from the `main` branch (custom domain in `CNAME`).

- `index.html` = Home, `about/`, `privacy/`, `terms/`, `apply/` (forwards to apply.leadfuse.co keeping UTMs). Pages are Claude Design exports.
- `SiteNav.dc.html` / `SiteFooter.dc.html` are shared components; `_ds/` is the LEADFUSE design system (`.nojekyll` keeps GitHub from hiding it); `vendor/` self-hosts React and Babel.
- Nav links for pages not yet exported (Services, Results, Careers, Resources) point to `#`.
- Every link to https://apply.leadfuse.co forwards utm_*, fbclid and formsource from the current URL.

Push to `main` = live in about a minute.
