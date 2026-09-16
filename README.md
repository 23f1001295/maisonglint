# Maison Glint

An image-led, single-product landing page for Maison Glint modernist stainless steel tableware.

## Stack
Next.js 16, React 19, TypeScript, static export, locally hosted fonts and WebP imagery.

## Local development
```bash
npm ci
npm run dev
```

## Production build
```bash
npm run build
```
The deployable static website is generated in `out/`.

## Netlify
The included `netlify.toml` sets the build command to `npm run build`, publish directory to `out`, and Node version to 22.

To enable automatic deployments, connect this repository's `main` branch in the existing Maison Glint Netlify project's build settings. The current project is https://app.netlify.com/projects/maison-glint . Visitor access protection is a separate setting; connecting GitHub does not make a protected site public.

## Product updates
Edit `content/product.ts` for verified measurements and product information. Replace the images in `public/images/` with final product photography when available.

This is a pre-launch collection preview. Images are AI-generated concepts and labelled on the page. Price, dimensions, shipping terms and checkout are not finalized. There is no payment or order collection integration.
