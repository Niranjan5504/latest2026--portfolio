
import { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';
import { cn } from '../lib/utils';

interface PortfolioImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function PortfolioImage({
  src,
  alt,
  fallbackTitle,
  className,
  imgClassName,
  priority = false,
}: PortfolioImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex flex-col items-center justify-center bg-zinc-900 p-8 text-center',
          className
        )}
      >
        <Layers className="mb-3 h-7 w-7 text-blue-500" />
        <p className="text-sm text-white">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden bg-zinc-950', className)}>
      <img
        key={src}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => {
          console.error('Image failed to load:', src);
          setHasError(true);
        }}
        className={cn(
          'block h-full w-full object-cover',
          imgClassName
        )}
      />
    </div>
  );
}
