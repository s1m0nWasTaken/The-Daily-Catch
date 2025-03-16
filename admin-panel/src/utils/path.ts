// src/utils/path.ts
export function getBasePath(): string {
    // Return empty string - Next.js will handle the basePath in production
    return '';
  }
  
  export function getAssetPath(path: string): string {
    // Just return the asset path relative to public
    const assetPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${assetPath}`;
  }