import { EventsGrids } from "@/components/events-grids";
import { NavigationHint } from "@/components/navigation-hint";
import { Spinner } from "@/components/spinner";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: " Event | School Management System",
  description: "Event ",
};

export default function EventPage() {
  return (
    <div className="w-full h-full py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-6">
        <NavigationHint parentPath="New & Events" currentPath="Events" />
        <h1 className="text-2xl font-bold text-secondary">Events</h1>
      </div>

      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-96">
              <Spinner className="size-10 text-secondary" />
            </div>
          }
        >
          <EventsGrids />
        </Suspense>
      </div>
    </div>
  );
}
