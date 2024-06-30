"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";
import Image, { StaticImageData } from "next/image";

export default function Card({
  heading,
  description,
  imgUrl,
  liveLink,
  displayLink,
}: {
  heading: string;
  description: string;
  imgUrl: string | StaticImageData;
  liveLink: string;
  displayLink: string;
}) {
  return (
    <div className="flex items-center justify-center w-max">
      <PinContainer title={displayLink} href={liveLink}>
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
              height={300}
              width={300}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
