import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>Phone : +959790280889</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>Email : contact@ttuec.edu.mm</span>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center">
              <div className="size-32 rounded-full">
                <Image
                  src="/images/left_logo.png"
                  alt="University Logo"
                  height={100}
                  width={100}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Location */}
            <div className="text-white text-right">
              <div className="flex items-center justify-end gap-2 mb-2">
                <MapPin size={16} />
                <span>Location</span>
              </div>
              <p>M8Q3+MV Banbwegon, Myanmar (Burma)</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-secondary py-4 text-center">
        <p className="text-white">© Electronics Engineering Department</p>
      </div>
    </>
  );
}
