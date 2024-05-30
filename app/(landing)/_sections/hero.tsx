import Link from "next/link.js";
import Image from "next/image.js";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full max-w-[1200px] flex items-center h-[calc(100%-60px)]">
      <div className="w-full flex justify-between pt-16">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-between">
      <HeroInfo />
      <HeroDL />
    </div>
  );
};

const HeroInfo = () => {
  return (
    <div className="flex flex-col space-y-6 select-none">
      <h1 className="font-bold text-[65px] leading-[81px]">
        Welcome to <br />
        Cryptocurrency
        <br />
        <span className="text-[#6841da]">Social Media</span>
      </h1>
    </div>
  );
};

const HeroDL = () => {
  return <div></div>;
};

const HeroRight = () => {
  return (
    <Image
      src={"/hero-image.png"}
      alt="Mockup"
      width={450}
      height={450}
      priority
    />
  );
};

export default Hero;
