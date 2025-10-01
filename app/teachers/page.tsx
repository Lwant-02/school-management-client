import { NavigationHint } from "@/components/navigation-hint";
import { TeacherCard } from "@/components/teacher-card";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Teachers | School Management System",
  description: "Teachers",
};

export default function TeachersPage() {
  return (
    <div className="w-full h-full py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-6">
        <NavigationHint parentPath="Academic" currentPath="Teachers" />
        <h1 className="text-2xl font-bold text-secondary">Teachers</h1>
      </div>

      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative">
          <p className="text-sm text-gray-500">Professor</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-14" />
        </div>
        <div className="grid grid-cols-5 gap-6">
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative">
          <p className="text-sm text-gray-500">Vice Professor</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-14" />
        </div>
        <div className="grid grid-cols-5 gap-6">
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </div>
    </div>
  );
}
