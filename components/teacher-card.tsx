import Image from "next/image";

export const TeacherCard = ({ image_url, name }: Teacher) => {
  return (
    <div className="cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image_url || "/images/teacher_example.png"}
          alt="Subject"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm mt-3 font-bold text-secondary text-center capitalize">
        {name}
      </p>
    </div>
  );
};
