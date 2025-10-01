import { EventCard } from "@/components/event-card";
import { LabCard } from "@/components/lab-card";
import { NavigationHint } from "@/components/navigation-hint";
import { NewCard } from "@/components/new-card";
import { Metadata } from "next";

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
        <div className="grid grid-cols-3 gap-6">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}
