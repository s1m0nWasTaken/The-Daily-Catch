// src/utils/path.ts
export function getBasePath(): string {
    // Let Next.js handle the basePath
    return '';
  }
  
  export function getAssetPath(path: string): string {
    const assetPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${assetPath}`;
  }