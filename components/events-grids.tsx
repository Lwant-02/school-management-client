import { fetchEvents } from "@/action/index.action";

import { EventCard } from "./event-card";

export const EventsGrids = async () => {
  const data = await fetchEvents();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.length > 0 ? (
        data.map((event: NewsAndEvents) => (
          <EventCard key={event.id} {...event} />
        ))
      ) : (
        <div className="text-center text-gray-500 col-span-3">
          No events yet!
        </div>
      )}
    </div>
  );
};
