"use client";

import { useEffect, useRef } from "react";

interface MapProps {
  className?: string;
}

export default function Map({ className = "" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for Google Maps integration
    // You would need to add Google Maps API key and script
    if (mapRef.current) {
      // For now, we'll just show a styled placeholder
      console.log("Map component mounted");
    }
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapRef}
        className="w-full h-full bg-gradient-to-br from-blue-100/50 to-blue-200/50 rounded-lg overflow-hidden"
      >
        {/* Map placeholder content */}
        <div className="absolute inset-0 flex items-center justify-center mb-7">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-7">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              Find Us
            </h3>
            <p className="text-gray-600">Thanlyin Technological University</p>
            <p className="text-gray-600">Electronics Engineering Department</p>
            <p className="text-sm text-gray-500 mt-2">
              M8Q3+MV Banbwegon, Myanmar
            </p>
          </div>
        </div>

        {/* Location marker */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="size-7 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
        </div>

        {/* Grid pattern overlay for map-like appearance */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-gray-400"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
