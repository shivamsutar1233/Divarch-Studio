import { useState } from "react";

export default function ImageCarousel({ images, alt, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const aspectRatio = className.includes("h-full") ? "h-full" : "aspect-[4/3]";
  const padding = className.includes("p-0") ? "" : "p-4";

  // If no additional images, just show the main image
  if (!images || images.length === 0) {
    return (
      <div
        className={`${aspectRatio} w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ${padding} ${className}`}
      >
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    );
  }

  // If only one image, show it without carousel controls
  if (images.length === 1) {
    const objectFit = className.includes("h-full")
      ? "object-cover"
      : "object-contain";

    return (
      <div
        className={`${aspectRatio} w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ${padding} ${className}`}
      >
        <img
          src={images[0]}
          alt={alt}
          className={`w-full h-full ${objectFit} hover:scale-105 transition-transform duration-300`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400?text=Product+Image";
          }}
        />
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const objectFit = className.includes("h-full")
    ? "object-cover"
    : "object-contain";

  return (
    <div
      className={`relative ${aspectRatio} w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ${padding} ${className}`}
    >
      {/* Main Image */}
      <div className="w-full h-full relative">
        <img
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className={`w-full h-full ${objectFit} hover:scale-105 transition-transform duration-300`}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400?text=Product+Image";
          }}
        />

        {/* Image Counter */}
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        aria-label="Next image"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
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
