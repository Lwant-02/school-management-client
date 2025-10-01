import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export const ExamResultCard = () => {
  return (
    <div className="cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/images/exam.png"
          alt="Subject"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm mt-3 font-bold text-secondary text-center">
        First Sem
      </p>
      <Button
        className="mt-3 text-secondary w-full cursor-pointer hover:text-primary"
        variant="outline"
      >
        PDF
        <Download className="size-4 ml-1" />
      </Button>
    </div>
  );
};
