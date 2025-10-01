import { NavigationHint } from "@/components/navigation-hint";
import { SubjectCard } from "@/components/subject-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subjects | School Management System",
  description: "Subjects",
};

export default function SubjectsPage() {
  return (
    <div className="w-full h-full py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-6">
        <NavigationHint parentPath="Academic" currentPath="Subjects" />
        <h1 className="text-2xl font-bold text-secondary">Subjects</h1>
      </div>

      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative">
          <p className="text-sm text-gray-500">First Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-14" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative">
          <p className="text-sm text-gray-500">Second Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-20" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-10">
        <div className="relative">
          <p className="text-sm text-gray-500">Third Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-16" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-10">
        <div className="relative">
          <p className="text-sm text-gray-500">Fourth Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-16" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-10">
        <div className="relative">
          <p className="text-sm text-gray-500">Fifth Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-16" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-10">
        <div className="relative">
          <p className="text-sm text-gray-500">Final Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-16" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
      </div>
    </div>
  );
}
