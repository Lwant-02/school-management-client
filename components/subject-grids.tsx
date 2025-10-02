import React from "react";
import { SubjectCard } from "./subject-card";
import { fetchSubjects } from "@/action/index.action";

export const SubjectGrids = async () => {
  const data = await fetchSubjects();
  return (
    <div className="grid grid-cols-6 gap-6">
      {data.length > 0 ? (
        data.map((subject: Subjects) => (
          <SubjectCard key={subject.id} {...subject} />
        ))
      ) : (
        <div className="text-center text-gray-500 col-span-6">
          No subjects yet!
        </div>
      )}
    </div>
  );
};
