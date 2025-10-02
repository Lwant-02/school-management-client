import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import React from "react";

export const Spinner = ({ className = "" }: { className?: string }) => {
  return <Loader className={cn("animate-spin", className)} />;
};
