import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const NewCard = () => {
  return (
    <div className="cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image
          src="/images/example.png"
          alt="Subject"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm mt-3 font-bold text-secondary">
        2024 Graduation Ceremony
      </p>
      <p className="text-xs mt-2 text-gray-500 line-clamp-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Link
        href="/news/1"
        className="flex gap-2 mt-3 text-secondary justify-start items-center"
      >
        See more
        <ChevronsRight className="size-4" />
      </Link>
    </div>
  );
};
