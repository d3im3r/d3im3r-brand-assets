# d3im3r Brand Assets

> Official owl-chip visual identity assets for d3im3r, ready for websites, applications, documentation, and embedded-systems projects.

![d3im3r brand preview](docs/preview.png)

Maintained by [@d3im3r](https://github.com/d3im3r).

## About

The d3im3r identity combines a minimalist owl with microcontroller-inspired geometry. The owl is derived from the original `{o⌄o}` signature (U+2304) and reflects the brand's focus on robotics, embedded systems, and software engineering.

All artwork in this repository was created for d3im3r and is exclusively owned by **d3im3r**. The repository provides horizontal and vertical layouts, light- and dark-background variants, standalone icons, and browser/app favicons.

## What's included

| Directory | Contents |
| --- | --- |
| [`assets/svg/`](assets/svg/) | Scalable horizontal and vertical logos and standalone symbols |
| [`assets/png/`](assets/png/) | Raster exports in multiple sizes, with transparent and opaque-background variants |
| [`assets/favicon/`](assets/favicon/) | Browser and app icons, including SVG, PNG, ICO, and a web manifest |
| [`docs/`](docs/) | Brand preview and release checklist |

Use the SVG files wherever possible for crisp rendering at any size. Choose PNG or ICO when required by a platform or tool.

## Asset directory

| Use case | Recommended file |
| --- | --- |
| Logo on a light UI | [`assets/svg/horizontal-light.svg`](assets/svg/horizontal-light.svg) |
| Logo on a dark UI | [`assets/svg/horizontal-dark.svg`](assets/svg/horizontal-dark.svg) |
| Vertical logo on light backgrounds | [`assets/svg/vertical-light.svg`](assets/svg/vertical-light.svg) |
| Vertical logo on dark backgrounds | [`assets/svg/vertical-dark.svg`](assets/svg/vertical-dark.svg) |
| Standalone brand symbol (light UI) | [`assets/svg/icon-light.svg`](assets/svg/icon-light.svg) |
| Standalone brand symbol (dark UI) | [`assets/svg/icon-dark.svg`](assets/svg/icon-dark.svg) |
| Browser favicon | [`assets/favicon/favicon.svg`](assets/favicon/favicon.svg) |
| Legacy browser favicon | [`assets/favicon/favicon.ico`](assets/favicon/favicon.ico) |
| iOS home screen | [`assets/favicon/apple-touch-icon.png`](assets/favicon/apple-touch-icon.png) |
| PNG raster variants | [`assets/png/`](assets/png/) |

For assets with an **opaque background**, use the corresponding `-background` variants. Files without that suffix are intended for transparent-background placement.

## Web integration

For predictable deployments, **pin a release tag** instead of using a moving branch.

### SVG logo via jsDelivr

```html
<img
  src="https://cdn.jsdelivr.net/gh/d3im3r/d3im3r-brand-assets@v1.0.0/assets/svg/horizontal-light.svg"
  alt="d3im3r owl-chip logo"
  width="260"
/>
```

### Light/dark mode logo

```html
<picture>
  <source media="(prefers-color-scheme: dark)"
    srcset="https://cdn.jsdelivr.net/gh/d3im3r/d3im3r-brand-assets@v1.0.0/assets/svg/horizontal-dark.svg">
  <img
    src="https://cdn.jsdelivr.net/gh/d3im3r/d3im3r-brand-assets@v1.0.0/assets/svg/horizontal-light.svg"
    alt="d3im3r" width="260">
</picture>
```

### Favicon

```html
<link rel="icon" type="image/svg+xml"
  href="https://cdn.jsdelivr.net/gh/d3im3r/d3im3r-brand-assets@v1.0.0/assets/favicon/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32"
  href="https://cdn.jsdelivr.net/gh/d3im3r/d3im3r-brand-assets@v1.0.0/assets/favicon/favicon-32x32.png">
```

For production favicons, a copy hosted at your application's own origin can improve reliability and avoid external dependencies.

### GitHub RAW alternative

```text
https://raw.githubusercontent.com/d3im3r/d3im3r-brand-assets/main/assets/svg/icon-light.svg
```

The RAW URL always follows the specified branch and may change when the asset is updated. Pin tags or commit SHAs when reproducibility matters.

## Releases and versioning

Use semantic release tags such as `v1.0.0`. Once assets are referenced by published applications, do not change files under the same release tag. Publish a new tag for updates.

## Usage guidelines

- Use `*-light.svg` on light backgrounds and `*-dark.svg` on dark backgrounds.
- Keep the owl-chip proportions intact; avoid stretching, rotating, or applying heavy effects.
- Prefer SVG for web/UI and PNG when a raster format is required.
- Provide appropriate whitespace around the symbol and wordmark.
- For very small icons, choose the standalone icon or the favicon rather than a full wordmark.

## Ownership and license

The artwork, `d3im3r` name, and owl-chip identity are exclusively owned by **d3im3r**. All rights are reserved. Use in personal projects requires prior express written authorization; redistribution, sublicensing, resale, or other publication is prohibited unless separately authorized in writing. See [LICENSE](LICENSE) for the full terms. No rights to use the `d3im3r` name or identity as another brand are granted, and use does not imply endorsement or affiliation.

### Request permission

To request permission, [open an authorization request issue](https://github.com/d3im3r/d3im3r-brand-assets/issues/new?template=authorization-request.yml) and include the assets you want to use, where and how you plan to use them, and whether you intend to redistribute them. Issues are public, so do not include private or sensitive information.

Opening an issue is only a request and does not grant permission. Wait for an explicit written approval from **d3im3r** in that issue before using or redistributing any assets. See [BRAND.md](BRAND.md) for usage guidance.
