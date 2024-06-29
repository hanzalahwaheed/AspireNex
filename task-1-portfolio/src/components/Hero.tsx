"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Button from "./common/Button";
import GradientSpan from "./common/GradientSpan";

export default function Hero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center text-white">
        Hey! I&apos;m <GradientSpan content="Hanzalah!" />
      </p>
      <div className="flex justify-center">
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center w-max bg-zinc-800/50 rounded p-2">
          A <GradientSpan content="Full Stack" /> Web Developer 🚀
        </p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <Button content="My Resume" />
      </div>
    </WavyBackground>
  );
}
