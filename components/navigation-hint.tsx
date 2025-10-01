import { ChevronsRight } from "lucide-react";

interface NavigationHintProps {
  parentPath: string;
  currentPath: string;
}

export const NavigationHint = ({
  parentPath,
  currentPath,
}: NavigationHintProps) => {
  return (
    <div className="flex justify-start items-center gap-1">
      <p className="text-sm text-gray-500">Home</p>
      <ChevronsRight className="size-4 text-gray-500" />
      <p className="text-sm text-gray-500">{parentPath}</p>
      <ChevronsRight className="size-4 text-gray-500" />
      <p className="text-sm text-secondary">{currentPath}</p>
    </div>
  );
};
