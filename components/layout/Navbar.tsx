import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Academics",
    href: "#",
  },
  {
    label: "News & Events",
    href: "#",
  },
  {
    label: "Research",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
  },
  {
    label: "Library",
    href: "#",
  },
  {
    label: "Login",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <nav className=" h-auto w-full">
      {/* Top Header Bar */}
      <div className="flex flex-col ">
        <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
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
          <div className="flex items-center gap-4">
            <span className="text-secondary text-lg font-semibold">
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
        <div className="bg-secondary py-4">
          <div className="container mx-auto px-4 max-w-7xl ">
            <div className="flex justify-between items-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-blue-300 font-medium uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
