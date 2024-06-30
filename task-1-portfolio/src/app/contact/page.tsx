"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import GradientSpan from "@/components/common/GradientSpan";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Get In <GradientSpan content="Touch" />
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder="hanzalah.w@gmail.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-4 py-2 text-white"
          />
          <textarea
            placeholder="Sup?"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 bg-neutral-950 placeholder:text-neutral-700 px-4 py-2 text-white h-20"
          />

          <button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-8 w-1/4"
            onClick={() => {}}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Send
            </span>
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
