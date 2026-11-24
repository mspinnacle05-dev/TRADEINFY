import { useState } from 'react';
import { ServiceGraphic } from './ServiceGraphic';
import type { ServiceSlug } from '../data/siteData';

interface EditorialImageProps {
  src: string;
  alt: string;
  fallbackVariant: ServiceSlug | 'hero' | 'about';
  className?: string;
  caption?: string;
}

export function EditorialImage({
  src,
  alt,
  fallbackVariant,
  className = '',
  caption,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={className}>
        <ServiceGraphic variant={fallbackVariant} className="h-full w-full" />
      </div>
    );
  }

  return (
    <figure className={`relative overflow-hidden border border-[#E2E5EE] bg-white ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="h-full w-full object-cover"
      />
      {caption && (
        <figcaption className="border-t border-[#E2E5EE] bg-white px-4 py-2.5 text-xs text-[#4E556B]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
