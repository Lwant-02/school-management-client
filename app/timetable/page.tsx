import { NavigationHint } from "@/components/navigation-hint";
import { Spinner } from "@/components/spinner";
import { TimetableCard } from "@/components/timetable-card";
import { TimetableGrids } from "@/components/timetable-grids";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Timetable | School Management System",
  description: "Timetable",
};

export default function TimetablePage() {
  return (
    <div className="w-full h-full py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-6">
        <NavigationHint parentPath="Academic" currentPath="Timetable" />
        <h1 className="text-2xl font-bold text-secondary">Timetable</h1>
      </div>

      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative">
          <p className="text-sm text-gray-500">All Timetables</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-20" />
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-96">
              <Spinner className="size-10 text-secondary" />
            </div>
          }
        >
          <TimetableGrids />
        </Suspense>
      </div>
    </div>
  );
}
