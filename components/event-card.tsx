import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

export const EventCard = ({
  image,
  title,
  date,
  description,
}: EventCardProps) => {
  return (
    <div className="cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image src={image} alt="Subject" fill className="object-cover" />
      </div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-1">
          {title}
        </h3>
        <span className="text-sm text-gray-500 ml-2 whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="text-xs mt-2 text-gray-500 line-clamp-2">{description}</p>
      <Link
        href="/events/1"
        className="flex gap-2 mt-3 text-secondary justify-start items-center"
      >
        See more
        <ChevronsRight className="size-4" />
      </Link>
    </div>
  );
};
