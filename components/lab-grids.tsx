import React from "react";
import { LabCard } from "./lab-card";
import { fetchLabs } from "@/action/index.action";

export const LabGrids = async () => {
  const data = await fetchLabs();
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.length > 0 ? (
        data.map((lab: Labs) => <LabCard key={lab.id} {...lab} />)
      ) : (
        <div className="text-center text-gray-500 col-span-3">No labs yet!</div>
      )}
    </div>
  );
};
