import { fetchTeachers } from "@/action/index.action";
import { TeacherCard } from "./teacher-card";

export const TeacherGrids = async () => {
  const data = await fetchTeachers();
  return (
    <div className="grid grid-cols-5 gap-6">
      {data.length > 0 ? (
        data.map((teacher: Teacher) => (
          <TeacherCard key={teacher.id} {...teacher} />
        ))
      ) : (
        <div className="text-center text-gray-500 col-span-5">
          No teachers yet!
        </div>
      )}
    </div>
  );
};
