# Runwell landing page

The marketing site for [Runwell](https://github.com/meerbahadin/runwell), a macOS
battery monitor that shows its own blind spots.

One page, no CMS, no database, no client-side routing. Everything renders
statically at build time except two small interactive islands.

## Running it

```bash
bun install
bun dev
```

Then open <http://localhost:3000>.

```bash
bun run build   # production build, also type-checks
bun run lint    # eslint
```

Bun is the package manager here (`bun.lock`), but nothing in the code depends on
it — npm or pnpm work if you'd rather.

## Layout

```
app/
  page.tsx              the entire page: copy as data at the top, markup below
  layout.tsx            fonts, metadata
  globals.css           design tokens + the scroll-reveal transition
  components/
    reveal.tsx          adds .is-visible to [data-reveal] on scroll
    features.tsx        the seven-surface tabbed switcher
    shot.tsx            a screenshot with a fade into the surface below it
  icon.png              favicon      ) generated from public/app-icon-dark.png
  apple-icon.png        touch icon   ) via Next's file conventions
  opengraph-image.png   link preview, 1200x630
public/
  app-icon.png          light app icon (unused on the page; kept as a source)
  app-icon-dark.png     used in the header, the CTA and the footer
  shot-*.png            the three product screenshots
```

Page copy lives in `const` arrays at the top of `page.tsx` (`PROBLEMS`,
`BADGES`, `CADENCES`, `SAFETY`, `PRIVACY`, `NUMBERS`, `REQS`, `INSTALL`).
Editing the words rarely means touching the markup.

## Replacing the screenshots

Overwrite these three files in `public/`, keeping the names:

| File | Where it appears |
| --- | --- |
| `shot-applications.png` | Hero |
| `shot-history.png` | History section |
| `shot-insight.png` | Insights inset |

They're imported statically, so Next reads each file's real dimensions at build
time. A replacement with a different size or aspect ratio needs no code change.

## Design tokens

Colors live as CSS variables in the `@theme` block in `globals.css`, which is
what makes `bg-surface`, `text-muted`, `text-measured` and friends resolve.
Change a value there and it propagates everywhere.

The four provenance colors (`measured`, `derived`, `estimated`, `unavailable`)
mirror the labels the app puts on every metric — that distinction is the whole
argument of the page, so it gets first-class tokens rather than one-off hexes.

The page is light-only by design. There is no dark palette: several sections use
fixed dark surfaces as a deliberate contrast against the light canvas, so
inverting the tokens alone would not produce a coherent dark theme.

## Motion

Anything marked `data-reveal` starts shifted down and fades in when scrolled
into view. `reveal.tsx` handles it with one `IntersectionObserver`, and a 2.6s
timer reveals anything still hidden so content can never be stranded if the
observer never fires.

Reduced motion is honoured in two places: `globals.css` disables the transitions
outright, and `reveal.tsx` skips the observer and shows everything immediately.

## Links

`RELEASES` and `REPO` are defined at the top of `page.tsx`. Every download
button points at the pinned release tag; the footer "Releases" link points at
the release list. Bumping a version is a one-line change.

## Deploying

A static Next.js app — any host that runs `next build` works, Vercel with no
configuration. Before going live, set `metadataBase` in `layout.tsx` to the real
domain, since Open Graph URLs resolve against it.
