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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7550843154586!2d96.30207841024945!3d16.689134922479234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1f13cfa07b8d5%3A0x8dcf8a9ab7b9cf6e!2sThanlyin%20Technological%20University%20(TTU)!5e0!3m2!1sen!2sth!4v1759391546624!5m2!1sen!2sth"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
