import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  src: string | undefined;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  fallback?: string;
  priority?: boolean; // if true, eager load with high fetch priority
}

export const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  className,
  width = 160,
  height = 48,
  sizes = "(max-width: 768px) 120px, 160px",
  fallback,
  priority = false,
}) => {
  const [error, setError] = useState(false);

  const resolvedSrc = useMemo(() => {
    if (!src) return fallback;
    return error && fallback ? fallback : src;
  }, [src, fallback, error]);

  // Note: fetchpriority is currently supported in Chromium-based browsers
  return (
    <img
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? ("high" as any) : ("auto" as any)}
      className={cn("object-contain w-auto h-auto max-w-full", className)}
      onError={() => setError(true)}
    />
  );
};

export default Logo;
