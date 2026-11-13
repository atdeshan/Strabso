# Deploying Strabso to Namecheap

Target: **https://strabso.lk** (non-www canonical), Namecheap cPanel shared hosting.

The host runs **LiteSpeed**, not stock Apache. It reads `.htaccess` and supports
the rewrite, expires and header directives used here, so the config applies as
written. Autoindex is enabled on the account, which is why `Options -Indexes`
matters — see below.

## This account hosts two sites

`candidevents.lk` lives on the same cPanel account, in its own folder at the
account root — a sibling of `public_html`, not inside it. `public_html` is
**strabso.lk's** document root (confirmed: strabso.lk's directory listing shows
exactly the contents of `public_html`).

So extracting into `public_html` cannot affect Candid Events. Two rules:

- Extract **inside `public_html`**, never at the account root, where the
  `candidevents.lk` folder lives.
- Do not delete `cgi-bin` or `.well-known` from `public_html`. `.well-known`
  is what AutoSSL uses to validate the domain. Extracting adds files alongside
  them; nothing needs removing first.

## Cutover order

The old GitHub Pages site at `atdeshan.github.io/Strabso` stays up until the new
one is confirmed working. Do not turn it off first, or there is no live site at
all while the upload is in progress.

1. Upload and extract into `public_html` (below).
2. Run AutoSSL and wait for the certificate.
3. Work through **Verify after deploying**.
4. Only once that passes, **Retire GitHub Pages** (last section).

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
- `Options -Indexes`, so directories are not browsable. This is not optional
  here: the SPA fallback deliberately skips real directories (`RewriteCond !-d`),
  so without it the host's autoindex would serve a listing of `/gallery/` and
  every project folder under it.
- `ErrorDocument 404 /index.html`, so a genuinely missing file returns the app
  rather than the host's default error page.
- A `.well-known` passthrough as the **first** rewrite rule. AutoSSL validates
  over plain HTTP, before any certificate exists, so redirecting those requests
  to HTTPS can stall issuance. Keep that rule above the redirects.
- Baseline security headers; blocks dotfiles and `.map` files.

To prefer `www` instead, swap the canonical-host rule in `.htaccess` and update
the four absolute URLs in `index.html`, plus `robots.txt` and `sitemap.xml`.

## Verify after deploying

- `https://strabso.lk` loads over HTTPS with no mixed-content warnings.
- `http://strabso.lk` and `https://www.strabso.lk` both 301 to the canonical URL.
- A deep link such as `https://strabso.lk/anything` returns the site, not a 404.
- Project galleries show their photos (these are served from `/gallery/...`).
- `https://strabso.lk/gallery/` does **not** return a directory listing.
- `https://candidevents.lk` still loads, unchanged.
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

## Retire GitHub Pages

Only after the checks above pass. Until then the old site is the live one.

Turning Pages off keeps the `gh-pages` branch, so it can be switched back on:

```
curl -X DELETE https://api.github.com/repos/atdeshan/Strabso/pages \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github+json"
```

Or in the repo: **Settings → Pages → Unpublish site**.

Leave the `gh-pages` branch in place. Deleting it is the one step that is not
easily reversible, and it buys nothing once Pages is unpublished.

Two live copies of the same site compete in search results, so do not leave
Pages running alongside strabso.lk for longer than the cutover needs.
