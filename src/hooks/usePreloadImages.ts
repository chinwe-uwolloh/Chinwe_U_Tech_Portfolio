import { useEffect } from "react";

/**
 * Preload a list of image URLs using <link rel="preload"> and image decoding.
 * Works well with Vite asset URLs (imported from src/assets) and external URLs.
 */
export const usePreloadImages = (urls: string[] | undefined) => {
  useEffect(() => {
    if (!urls || urls.length === 0) return;

    const createdLinks: HTMLLinkElement[] = [];

    urls.forEach((url) => {
      if (!url) return;
      // Avoid duplicates
      const exists = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="preload"][as="image"]'))
        .some((l) => l.href === url);
      if (exists) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      link.fetchPriority = 'high' as any;
      document.head.appendChild(link);
      createdLinks.push(link);

      // Safari fallback
      const img = new Image();
      img.decoding = 'async';
      img.src = url;
    });

    return () => {
      createdLinks.forEach((l) => l.parentNode?.removeChild(l));
    };
  }, [urls?.join('|')]);
};
