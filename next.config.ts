import type { NextConfig } from "next";

/**
 * The GitHub Pages preview is a static export served from a repo subpath, so
 * it needs a basePath and has to give up the image optimizer. All of that is
 * behind an env var, so `next dev`, a normal `next build`, and any future
 * deploy to a Node host are completely unaffected.
 *
 *   GITHUB_PAGES=true npm run build   ->  out/
 */
const isPagesPreview = process.env.GITHUB_PAGES === "true";

/** Repo name — the site is served from https://<user>.github.io/<repo>/ */
const repo = "marchiv";

const nextConfig: NextConfig = isPagesPreview
  ? {
      // Read by lib/asset.ts — next/image won't prefix `src` itself when
      // the optimizer is off, so /public references need it explicitly.
      env: { NEXT_PUBLIC_BASE_PATH: `/${repo}` },
      output: "export",
      // Emits /membership/index.html, which static hosts serve reliably.
      trailingSlash: true,
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
      // GitHub Pages cannot run the optimizer; originals are served as-is.
      images: { unoptimized: true },
    }
  : {
      env: { NEXT_PUBLIC_BASE_PATH: "" },
      // Both are server-runtime features and are rejected in export mode,
      // so they apply only to a real Node deploy.
      cacheComponents: true,
      partialPrefetching: true,
    };

export default nextConfig;
