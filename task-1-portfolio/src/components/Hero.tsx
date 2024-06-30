"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Button from "./common/Button";
import GradientSpan from "./common/GradientSpan";

export default function Hero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto">
      <div className="min-h-screen">
        <div className="flex justify-center gap-3 items-center p-5">
          <Button content="Resume" redirect="https://drive.google.com/file/d/1aWoAiWE8Zhph3uDJQxvnjPDd2Ux2a2hN/view?usp=sharing" external />
          <Button content="Projects" redirect="/projects" />
          <Button content="Contact" redirect="/contact" />
        </div>
        <div className="mt-60">
          <div className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center text-white">
            Hey! I&apos;m <GradientSpan content="Hanzalah!" />
          </div>
          <div className="flex justify-center">
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center w-max bg-zinc-800/50 rounded p-2">
              A <GradientSpan content="Full Stack" /> Web Developer 🚀
            </p>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}
