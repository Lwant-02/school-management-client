import { NavigationHint } from "@/components/navigation-hint";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "News | School Management System",
  description: "News",
};

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ExamResultsPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="w-full h-full py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 mb-6">
        <NavigationHint
          parentPath="New & Events"
          currentPath="News"
          nestedPath={id}
        />
        <h1 className="text-2xl font-bold text-secondary">{id}</h1>
      </div>

      <div className="flex flex-col gap-5 max-w-7xl mx-auto mb-20">
        <div className="relative h-96 overflow-hidden">
          <Image
            src="/images/example.png"
            alt="Subject"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 mt-7">
          <h2 className="text-xl font-bold text-secondary">
            2024 Graduation Ceremony
          </h2>
          <p className="text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatem quam ea omnis mollitia libero nulla minus, aspernatur
            reprehenderit ducimus veniam quisquam suscipit, sed iure aut,
            nesciunt exercitationem qui magni.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-7">
          <h2 className="text-xl font-bold text-secondary">
            2024 Graduation Ceremony
          </h2>
          <p className="text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatem quam ea omnis mollitia libero nulla minus, aspernatur
            reprehenderit ducimus veniam quisquam suscipit, sed iure aut,
            nesciunt exercitationem qui magni.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-7">
          <h2 className="text-xl font-bold text-secondary">
            2024 Graduation Ceremony
          </h2>
          <p className="text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptatem quam ea omnis mollitia libero nulla minus, aspernatur
            reprehenderit ducimus veniam quisquam suscipit, sed iure aut,
            nesciunt exercitationem qui magni.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <Image
            src="/images/example.png"
            alt="Subject"
            width={500}
            height={500}
          />
          <Image
            src="/images/example.png"
            alt="Subject"
            width={500}
            height={500}
          />
          <Image
            src="/images/example.png"
            alt="Subject"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
