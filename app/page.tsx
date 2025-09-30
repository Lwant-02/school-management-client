import React from "react";
import Hero from "@/components/ui/hero";
import NewsCard from "@/components/ui/news-card";
import Footer from "@/components/ui/footer";
import Map from "@/components/ui/map";
import ImageGallery from "@/components/ui/image-gallery";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

export default function Page() {
  const newsData = [
    {
      image: "/images/sample.jpg",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description:
        "Our heartiest commends (sic). Best from our teachers and all the best.",
    },
    {
      image: "/images/sample.jpg",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description:
        "Our heartiest commends (sic). Best from our teachers and all the best.",
    },
    {
      image: "/images/sample.jpg",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description:
        "Our heartiest commends (sic). Best from our teachers and all the best.",
    },
  ];

  const eventsData = [
    {
      image: "/images/sample.jpg",
      title: "2024 Football Competition",
      date: "16 FEB",
      description:
        "Our heartiest commends (sic). Best from our teachers and all the best.",
    },
    {
      image: "/images/sample.jpg",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description:
        "Our heartiest commends (sic). Best from our teachers and all the best.",
    },
    {
      image: "/images/sample.jpg",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description:
        "Our heartiest commends (sic). Best from our teachers and all the best.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">News</h2>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium"
            >
              View all
              <ChevronsRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Events</h2>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium"
            >
              View all
              <ChevronsRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventsData.map((event, index) => (
              <NewsCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Map className="h-96" />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <ImageGallery />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
