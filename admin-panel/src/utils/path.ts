// src/utils/path.ts
export function getBasePath(): string {
    return process.env.NODE_ENV === 'production' ? '/The-Daily-Catch' : '';
  }
  
  export function getAssetPath(path: string): string {
    // Remove leading slash if present to avoid double slashes
    const assetPath = path.startsWith('/') ? path.slice(1) : path;
    return `${getBasePath()}/${assetPath}`;
  }