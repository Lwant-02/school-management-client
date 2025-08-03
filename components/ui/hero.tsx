import Image from "next/image";
import { ChartColumnBig, FileUser, CalendarDays } from "lucide-react";

const heroData = {
  backgroundImage: "/images/hero.png",
  title: "Academics",
  cards: [
    {
      icon: <ChartColumnBig className="size-28" />,
      label: "Results",
      color: "bg-green-500",
    },
    {
      icon: <FileUser className="size-28" />,
      label: "Curriculum",
      color: "bg-blue-400",
    },
    {
      icon: <CalendarDays className="size-28" />,
      label: "Timetable",
      color: "bg-yellow-500",
    },
  ],
};

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full">
      <Image
        src={heroData.backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute -bottom-32 left-0 right-0 bg-secondary/80 bg-opacity-90 p-8 mx-auto max-w-7xl rounded-md">
        <div className="container mx-auto flex justify-between items-center gap-7">
          <div className="text-white w-fit">
            <h1 className="text-5xl font-bold mb-4">{heroData.title}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 flex-1">
            {heroData.cards.map((card, index) => (
              <div
                key={index}
                className={`${card.color} p-6 h-52 rounded-lg text-center text-secondary flex justify-center items-center flex-col`}
              >
                <span>{card.icon}</span>
                <div className="font-semibold text-2xl">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
