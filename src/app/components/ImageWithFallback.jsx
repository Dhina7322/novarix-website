import { useState } from 'react';



export function ImageWithFallback({ src, alt, className = '' }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className={`bg-gradient-to-br from-[#e0f2fe] to-[#f8f9fb] flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className={`bg-gradient-to-br from-[#e0f2fe] to-[#f8f9fb] animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'hidden' : ''}`}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}
