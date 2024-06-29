"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

export default function Card({
  heading,
  description,
  imgUrl,
  liveLink,
}: {
  heading: string;
  description: string;
  imgUrl: string;
  liveLink: string;
}) {
  return (
    <div className="h-max w-full flex items-center justify-center">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 relative">
            <Image
              src={imgUrl}
              alt="project-image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
