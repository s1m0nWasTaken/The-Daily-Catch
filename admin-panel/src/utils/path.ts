// src/utils/path.ts
export function getBasePath(): string {
    // Return empty string - GitHub Actions deploys to root
    return '';
  }
  
  export function getAssetPath(path: string): string {
    const assetPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${assetPath}`;
  }