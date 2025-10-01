import Image from "next/image";

export const SubjectCard = () => {
  return (
    <div className="cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/images/subject_example.png"
          alt="Subject"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm mt-3 font-bold text-secondary">Subject 1</p>
    </div>
  );
};
