/**
 * Prefixes a path in `/public` with the deploy's basePath.
 *
 * `next/image` does not apply `basePath` to `src` when `images.unoptimized`
 * is set, which is exactly the configuration a static export to a repo
 * subpath needs — so without this every photograph 404s on GitHub Pages
 * while the CSS and JS resolve fine.
 *
 * Empty string on a normal deploy, so this is a no-op everywhere else.
 * Every reference to a file in /public must go through it.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;

/**
 * True on the GitHub Pages preview build. The preview is a public URL for a
 * brand that has not launched, so it is marked noindex — remove that when
 * the real site goes live.
 */
export const isPreviewDeploy = basePath !== "";
