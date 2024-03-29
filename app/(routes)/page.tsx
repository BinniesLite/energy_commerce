import { Navbar } from "@/components/navbar";

import Image from "next/image";

import hero from "@/assets/hero.webp"

export default function Home() {
  return (
    <div className="">
      {/* TODO: Add Navbar */}
      <Image className="h-30" src={hero} alt="Hero" />
      Hello World
    </div>
  );
}
