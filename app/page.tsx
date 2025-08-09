import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero from "@/components/ui/hero";
import NewsCard from "@/components/ui/news-card";
import Footer from "@/components/ui/footer";
import Link from "next/link";

export default function Page() {
  const newsData = [
    {
      image: "/images/example.png",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description: "Lorem Ipsum is simply dummy text of the printing.........",
    },
    {
      image: "/images/example.png",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description: "Lorem Ipsum is simply dummy text of the printing.........",
    },
    {
      image: "/images/example.png",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description: "Lorem Ipsum is simply dummy text of the printing.........",
    },
  ];

  const eventsData = [
    {
      image: "/images/example.png",
      title: "2024 Football Competition",
      date: "16 FEB",
      description: "Lorem Ipsum is simply dummy text of the printing..........",
    },
    {
      image: "/images/example.png",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description: "Lorem Ipsum is simply dummy text of the printing..........",
    },
    {
      image: "/images/example.png",
      title: "2024 Graduation Ceremony",
      date: "16 FEB",
      description: "Lorem Ipsum is simply dummy text of the printing..........",
    },
  ];

  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <Hero />

      {/* News Section */}
      <section className="pt-40 w-full">
        <div className="mx-auto p-7 max-w-7xl bg-secondary rounded-md flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center mb-8 border-b border-primary/30 py-2">
              <h2 className="text-4xl font-bold text-white">News</h2>
              <Link href="#" className="text-blue-400 hover:text-blue-300">
                View All News
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsData.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center mb-8 border-b border-primary/30 py-2">
              <h2 className="text-4xl font-bold text-white">Events</h2>
              <Link href="#" className="text-blue-400 hover:text-blue-300">
                View All Events
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventsData.map((event, index) => (
                <NewsCard key={index} {...event} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-7xl bg-secondary p-7 rounded-md">
          <h2 className="text-4xl font-bold text-white mb-8">About</h2>
          <p className="text-white text-lg max-w-4xl mx-auto leading-relaxed">
            Department of Electronic Engineering offers undergraduate programs
            that emphasize the fundamentals of electronic engineering and enable
            graduates to enter the workforce with confidence. Undergraduate
            curricula are offered that lead to Bachelor of Engineering degrees
            in electronic engineering (BE). Advanced studies leading to the
            Master of Engineering (ME) in Electronic Engineering are available.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full text-secondary hover:bg-opacity-30 transition-opacity">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-4 justify-center">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="relative w-80 h-60 bg-gray-200 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/images/example.png"
                    alt="Gallery Image"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full text-secondary hover:bg-opacity-30 transition-opacity">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
