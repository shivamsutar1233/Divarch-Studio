"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ImageCarousel({
  images,
  alt,
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFullHeight = className.includes("h-full");
  const aspectRatio = isFullHeight ? "h-full" : "aspect-[4/3]";
  const padding = className.includes("p-0") ? "" : "p-4";
  const objectFit = isFullHeight ? "object-cover" : "object-contain";

  const NoImage = () => (
    <div
      className={`${aspectRatio} w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ${padding} ${className}`}
    >
      <div className="w-full h-full flex items-center justify-center text-gray-400">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );

  if (!images || images.length === 0) return <NoImage />;

  if (images.length === 1) {
    return (
      <div
        className={`relative ${aspectRatio} w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ${padding} ${className}`}
      >
        <Image
          src={images[0]}
          alt={alt}
          fill
          className={`${objectFit} hover:scale-105 transition-transform duration-300`}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/400?text=Product+Image";
          }}
        />
      </div>
    );
  }

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div
      className={`relative ${aspectRatio} w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ${padding} ${className}`}
    >
      {/* Main image */}
      <div className="w-full h-full relative">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className={`${objectFit} hover:scale-105 transition-transform duration-300`}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/400?text=Product+Image";
          }}
        />
        {/* Counter */}
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm z-10">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Previous */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next image"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-orange-500"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
