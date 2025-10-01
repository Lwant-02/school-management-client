import { LabCard } from "@/components/lab-card";
import { NavigationHint } from "@/components/navigation-hint";
import { NewCard } from "@/components/new-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | School Management System",
  description: "News",
};

export default function NewsPage() {
  return (
    <div className="w-full h-full py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-6">
        <NavigationHint parentPath="New & Events" currentPath="News" />
        <h1 className="text-2xl font-bold text-secondary">News</h1>
      </div>

      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-3 gap-6">
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
        </div>
      </div>
    </div>
  );
}
