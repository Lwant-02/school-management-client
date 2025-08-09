import Footer from "@/components/ui/footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | School Management System",
  description: "About",
};

export default function About() {
  return (
    <main className="pt-40 w-full">
      <div className=" max-w-7xl mx-auto flex flex-col px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl text-accent font-bold">About</h1>
          <div className=" p-8 shadow-xl backdrop-blur-xl">
            <p className="text-lg text-accent/90">
              Technological University, Thanlyin is a technological university,
              located in Thanlyin, Yangon Division, Myanmar. The Ministry of
              Science and Technology run university offers bachelor’s degree
              programs in Engineering and Architecture and master’s degree
              programs in Engineering and Architecture.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[500px] w-full">
            <Image
              src="/images/sample.jpg"
              alt="About"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-8 justify-center items-center">
            <h2 className="text-4xl text-accent font-bold text-start w-full">
              History
            </h2>
            <p className="text-lg text-accent/90">
              The university’s origins trace to the Industrial Training Center
              (1), founded in March 1993. In November 1995, it became a
              Government Technological Institute (GTI), offering two-year
              diplomas on vocational studies. In October 1999, the school was
              “upgraded” to a Government Technological College (GTC), offering
              three-year Bachelor of Technology (BTech) programs, and again in
              January 2007 to the Technological University level, offering
              bachelor’s degree programs in Engineering and Architecture and
              master’s degree programs in Engineering.
            </p>
            <p className="text-lg text-accent/90 mt-5">
              In 2007, 461 students graduated with Bachelor of Engineering (BE)
              or Bachelor of Architecture (BArch) degrees.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-accent-50 py-16 ">
        {/* Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl text-accent font-bold text-start w-full">
              Our Vision
            </h2>
            <p className="text-lg text-accent/90 leading-relaxed">
              To become internationally recognized, high ranking university that
              educates highly qualified engineers and architects in building the
              nation towards the development of Myanmar.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4 xl:mt-32">
            <h2 className="text-4xl text-accent font-bold text-start w-full">
              Our Mission
            </h2>
            <p className="text-lg text-accent/90 leading-relaxed">
              To contribute to the development of our nation and society through
              the pursuit of engineering education with high international
              standing and training the human resource development for local
              needs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
