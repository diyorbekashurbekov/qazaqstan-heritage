/**
 * Normalizes asset paths to support GitHub Pages subpaths (/repo-name/),
 * root deployments (Vercel/Netlify), and local Vite development.
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Remove leading slash so it joins cleanly with base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : base + '/';

  return cleanBase + cleanPath;
}
