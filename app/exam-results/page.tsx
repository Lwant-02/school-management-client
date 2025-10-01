import { ExamResultCard } from "@/components/exam-result-card";
import { LabCard } from "@/components/lab-card";
import { NavigationHint } from "@/components/navigation-hint";

export default function ExamResultsPage() {
  return (
    <div className="w-full h-full py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-6">
        <NavigationHint parentPath="New & Events" currentPath="Exam Results" />
        <h1 className="text-2xl font-bold text-secondary">Exam Results</h1>
      </div>

      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative">
          <p className="text-sm text-gray-500">First Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-14" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative">
          <p className="text-sm text-gray-500">Second Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-14" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative">
          <p className="text-sm text-gray-500">Third Year</p>
          <span className="h-[1px] absolute bottom-0 left-0 bg-gray-500/80 w-14" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
          <ExamResultCard />
        </div>
      </div>
    </div>
  );
}
