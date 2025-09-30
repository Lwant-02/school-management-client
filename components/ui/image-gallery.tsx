"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images?: string[];
  className?: string;
}

export default function ImageGallery({
  images = [
    "/images/sample_1.png",
    "/images/sample_2.png",
    "/images/sample_3.png",
  ],
  className = "",
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Gallery */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full text-white transition-all z-10 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full text-white transition-all z-10 backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Container */}
        <div className="flex gap-4 justify-center overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-80 h-60 bg-gray-200 rounded-lg overflow-hidden shadow-lg transition-all duration-300`}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
