# Deploying Strabso to Namecheap

Target: **https://strabso.lk** (non-www canonical), Namecheap cPanel shared hosting.

## Build

```
npm install
npm run build
```

Everything to upload ends up in `dist/` — about 5.7 MB, 72 files, including a
`.htaccess`. There is no server-side runtime; this is a static site.

## Upload (cPanel File Manager)

1. cPanel → **File Manager** → open `public_html`.
2. Delete the Namecheap placeholder `index.html` / `default.html` if present.
3. Upload `strabso-deploy.zip` (regenerate with `cd dist && zip -r ../strabso-deploy.zip .`).
4. Select it → **Extract** → into `public_html`.
5. Delete the zip from the server.
6. Confirm `.htaccess` landed in `public_html`. File Manager hides dotfiles by
   default: **Settings → Show Hidden Files (dotfiles)**. If it is missing the
   site still loads, but deep links 404 and nothing is cached or compressed.

Over FTP instead, upload the *contents* of `dist/` into `public_html` — not the
`dist` folder itself. Use **binary** mode so images are not corrupted, and check
afterwards that `.htaccess` transferred.

## Domain

Point the domain at the hosting account, then in cPanel issue SSL
(**Security → SSL/TLS Status → Run AutoSSL**) before testing, since `.htaccess`
forces HTTPS. DNS and the certificate can take a few hours to settle.

## What `.htaccess` does

- Redirects HTTP → HTTPS, checking `X-Forwarded-Proto` so it cannot loop
  behind Namecheap's proxy.
- Redirects `www.strabso.lk` → `strabso.lk`, matching the `<link rel=canonical>`.
- Serves `index.html` for any path that is not a real file, so React Router
  handles deep links instead of Apache returning 404.
- gzip/brotli compression, and caching: one year immutable for fingerprinted
  assets, no-cache for HTML so a new deploy is picked up immediately.
- Baseline security headers; blocks dotfiles and `.map` files.

To prefer `www` instead, swap the canonical-host rule in `.htaccess` and update
the four absolute URLs in `index.html`, plus `robots.txt` and `sitemap.xml`.

## Verify after deploying

- `https://strabso.lk` loads over HTTPS with no mixed-content warnings.
- `http://strabso.lk` and `https://www.strabso.lk` both 301 to the canonical URL.
- A deep link such as `https://strabso.lk/anything` returns the site, not a 404.
- Project galleries show their photos (these are served from `/gallery/...`).
- `https://strabso.lk/robots.txt` and `/sitemap.xml` resolve.

## Redeploying

Rebuild, then re-upload. Only `index.html` and `assets/` normally change —
asset filenames are content-hashed, so stale files are harmless, though
clearing out old `assets/` occasionally keeps `public_html` tidy.

## Notes

- Gallery folders under `public/gallery/` are lowercase ASCII slugs. They
  previously contained en-dashes and trailing spaces, which FTP clients and
  cPanel's extractor silently rewrite — that would have 404'd the photos in
  production. Keep new folder names in the same `a-z0-9-` form, and reference
  them through the `g()` helper in `src/pages/Projects.tsx`.
- The GitHub Pages setup (`base: '/Strabso/'`, the router `basename`, the
  `404.html` redirect shim and the `gh-pages` deploy scripts) has been removed.
  `npm run deploy` no longer exists; the site is built for a domain root.
