import Image from "next/image";

export const LabCard = ({ image, title, description }: Labs) => {
  return (
    <div className="cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image || "/images/lab.png"}
          alt="Subject"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm mt-3 font-bold text-secondary">{title}</p>
      <p className="text-xs mt-2 text-gray-500 line-clamp-2">{description}</p>
    </div>
  );
};
