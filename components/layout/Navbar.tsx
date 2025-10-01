import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
];

const academicItems = [
  {
    label: "Subjects",
    href: "/subjects",
  },
  {
    label: "Teachers",
    href: "/teachers",
  },
  {
    label: "Timetable",
    href: "/timetable",
  },
  {
    label: "Labs",
    href: "/labs",
  },
];

const newsItems = [
  {
    label: "Exam Results",
    href: "/exam-results",
  },
  {
    label: "Events",
    href: "/events",
  },
];

export default function Navbar() {
  return (
    <nav className="h-auto w-full">
      {/* Top Header Bar */}
      <div className="flex flex-col bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 flex justify-end items-center py-4">
          <div className="flex items-center gap-4">
            <span className=" text-lg font-semibold">
              Thanlyin Technological University
            </span>
            <div className="relative w-12 h-12">
              <Image
                src="/images/right_logo.png"
                alt="University Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="bg-primary py-2">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center gap-4 w-full">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/left_logo.png"
                  alt="University Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-secondary text-lg font-semibold">
                Electronics Engineering Department
              </span>
            </div>
            <div className="container mx-auto px-4 max-w-7xl ">
              <div className="flex justify-end gap-12 items-center ">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-blue-300 text-secondary font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 justify-center hover:text-blue-300 text-secondary font-medium cursor-pointer">
                    Academic
                    <ChevronDown className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary rounded-xs mt-4 border border-secondary/20 ">
                    {academicItems.map((item) => (
                      <DropdownMenuItem
                        key={item.label}
                        className="cursor-pointer hover:text-blue-300 text-secondary font-medium"
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 justify-center hover:text-blue-300 text-secondary font-medium cursor-pointer">
                    News & Events
                    <ChevronDown className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary rounded-xs mt-4 border border-secondary/20 ">
                    {newsItems.map((item) => (
                      <DropdownMenuItem
                        key={item.label}
                        className="cursor-pointer hover:text-blue-300 text-secondary font-medium"
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
