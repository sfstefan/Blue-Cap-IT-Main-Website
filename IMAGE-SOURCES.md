# Image Sources & Licensing

Where the images on bluecapit.com come from and what lets us use them.

**Add a row here whenever you add an image.** Recording the source URL at the moment
you download something takes ten seconds; reconstructing it a year later takes hours.

---

## Why this file exists

A September 2026 audit traced every image on the site back through git history. The
copyright side was in reasonable shape, but two gaps showed up:

1. **No model releases.** Four photos showed clearly identifiable faces. The Unsplash
   Licence covers the photographer's copyright but explicitly does *not* grant model or
   property releases — and using a stranger's face to advertise a commercial service is
   exactly the use that needs one. That's a right-of-publicity issue, not a copyright one.
2. **Attributions without receipts.** Photographer names were recorded in commit
   messages, but no source URLs or photo IDs, so nothing could be clicked through and
   verified.

Both are addressed for the images below. The rest of the library still relies on the
commit-message record — see "Known gaps".

---

## Blue Cap IT owned assets

No third-party rights. Ours outright.

| File | Notes |
|---|---|
| `public/logo.png` | Master raster logo, 862×420, transparent. Source for the share card below. |
| `public/logo.svg` | Vector logo, used across the site |
| `public/icon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png` | Favicons |
| `public/images/og-default.png` | **Sitewide social share card**, 1200×630. Built from `logo.png` on brand navy `#062A78` with the tagline "Your Boutique IT Partner". Must stay PNG — LinkedIn and X do not reliably render WebP share images. |

> One thing worth confirming: if a freelancer or agency designed the logo, check the
> contract actually **assigned** copyright rather than licensing it. Commissioning a
> design does not automatically transfer ownership.

---

## Licensed third-party images

| File | Source | Licence | Verify at |
|---|---|---|---|
| `public/images/coro-training-hero.webp` | "GALILEO Garching Seminarraum" by **MaxEmanuel**, via Wikimedia Commons | **CC0 1.0** (public domain dedication) | [commons.wikimedia.org, curid=113592059](https://commons.wikimedia.org/w/index.php?curid=113592059) |

Original file: `https://upload.wikimedia.org/wikipedia/commons/2/2e/GALILEO_Garching_Seminarraum.jpg`
(5520×4144, centre-cropped to 16:9 and resized to 1600×900).
Licence terms: <https://creativecommons.org/publicdomain/zero/1.0/deed.en/>

CC0 waives all rights — no attribution required, commercial use fine, no model release
needed here because the room is empty.

---

## Derived from existing photos

These three were **re-cropped from photos already on the site** to remove identifiable
faces. Full 1600px width was retained by cropping vertically only, so there is no
resolution loss. Underlying licence is unchanged from the originals.

| File | Now shows | Original photographer (per commit record) |
|---|---|---|
| `public/images/about-hero.webp` | Hands and a legal pad on a meeting table, 1600×534 | Dylan Gillis, Unsplash |
| `public/images/services-hero.webp` | A desk workstation with monitors, 1600×405 | phyo min, Unsplash |
| `public/images/managed-services-vcio.webp` | Hands at a keyboard beside a monitor, 1600×306 | Vitaly Gariev, Unsplash |

---

## Partner and vendor imagery

Verkada, Huntress, Coro, spot.ai and Meter product renders and logos. Used under the
respective **partner / reseller agreements**, not under any open licence.

Two things to keep in mind:

- **The rights are conditional.** Partner media grants normally require following the
  brand guidelines — no recolouring or distorting logos, no implying a deeper
  relationship than you have — and they **end when the partnership ends**.
- **Only display a badge you currently hold.** A lapsed designation is both a trademark
  problem and a potential misrepresentation to customers.

`public/meter/` (14 files) was downloaded directly from meter.com's public asset server
rather than from a partner portal. **Cleared** — Blue Cap IT confirmed in September 2026
that use of Meter's product imagery is authorised under the partner relationship. No
change needed. Standard partner conditions above still apply.

---

## `public/social/` — do not delete

Eight images that **no page references**, and that is correct. Buffer attaches them to
queued social posts by public URL (`https://bluecapit.com/social/<filename>`), because
Buffer runs in the cloud and cannot read local files. Deleting them breaks already
scheduled and published posts. See the social-media workflow notes.

---

## Known gaps

- **The remaining ~23 stock photos in `public/images/`** are recorded in commit messages
  as Unsplash with photographer names, but without source URLs or photo IDs. All were
  visually checked in September 2026 and **none contain identifiable faces** — they are
  screens, hardware, abstract graphics, hands, or people shot from behind — so the
  model-release issue does not apply. The attributions remain unverified, though.
- **Not legal advice.** For anything contentious, ask an attorney.

---

## Adding a new image

1. Prefer **CC0 / public domain** (Openverse at <https://openverse.org> filters for it),
   or stock you have actually licensed.
2. Avoid identifiable faces unless you hold a model release.
3. Save the source URL, creator, licence and licence URL — add a row above.
4. Convert to WebP and size to 1600px wide (`npm run build` expects this convention);
   the exceptions that must stay PNG are listed in `scripts/optimize-images.mjs`.
