import { fetchTimeTable } from "@/action/index.action";
import { TimetableCard } from "./timetable-card";

export const TimetableGrids = async () => {
  const data = await fetchTimeTable();
  return (
    <div className="grid grid-cols-6 gap-6">
      {data.length > 0 ? (
        data.map((timetable) => (
          <TimetableCard key={timetable.id} {...timetable} />
        ))
      ) : (
        <div className="text-center text-gray-500 col-span-6">
          No timetables yet!
        </div>
      )}
    </div>
  );
};
