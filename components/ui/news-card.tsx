import { ChevronsRight } from "lucide-react";
import Image from "next/image";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  onReadMore?: () => void;
}

export default function NewsCard({
  image,
  title,
  date,
  description,
  onReadMore,
}: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 flex-1">
            {title}
          </h3>
          <span className="text-sm text-gray-500 ml-2 whitespace-nowrap">
            {date}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <button
          onClick={onReadMore}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 group"
        >
          See more
          <ChevronsRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
