import Image from "next/image";

export const LabCard = () => {
  return (
    <div className="cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image
          src="/images/subject_example.png"
          alt="Subject"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm mt-3 font-bold text-secondary">Subject 1</p>
      <p className="text-xs mt-2 text-gray-500 line-clamp-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};
