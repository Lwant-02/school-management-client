import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[400px] w-full">
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
