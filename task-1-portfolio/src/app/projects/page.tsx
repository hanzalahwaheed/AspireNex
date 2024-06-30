import React from "react";
import Card from "./Card";
import GradientSpan from "../../components/common/GradientSpan";
import FinEase from "/public/ProjectCovers/FinEase.webp";
import How2WHanzo from "/public/ProjectCovers/How2WHanzo.webp";
import ImagineText from "/public/ProjectCovers/ImagineText.webp";
import NewsNation from "/public/ProjectCovers/NewsNation.webp";
import URLShorty from "/public/ProjectCovers/URLShorty.webp";

const Projects = () => {
  const projects = [
    {
      title: "FinEase",
      description: "Mock Transaction in Real-Time",
      imgUrl: FinEase,
      liveLink: "https://fin-ease-puce.vercel.app/",
      diplayLink: "/fin-ease-puce.vercel.app",
    },
    {
      title: "How2WHanzo",
      description: "Blog App built on Cloudflare Workers",
      imgUrl: How2WHanzo,
      liveLink: "https://how2-with-hanzo.vercel.app/",
      diplayLink: "/how2-with-hanzo.vercel.app",
    },
    {
      title: "ImagineText",
      description: "Image to Text Converter",
      imgUrl: ImagineText,
      liveLink: "https://imagine-text.vercel.app/",
      diplayLink: "/imagine-text.vercel.app",
    },
    {
      title: "URLShorty",
      description: "Classic URL Shortner",
      imgUrl: URLShorty,
      liveLink: "https://url-shorty-1.onrender.com/",
      diplayLink: "/url-shorty-1.onrender.com",
    },
    {
      title: "NewsNation",
      description: "News At your Finger Tips",
      imgUrl: NewsNation,
      liveLink: "https://news-nation-eta.vercel.app/",
      diplayLink: "/news-nation-eta.vercel.app",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl md:text-3xl lg:text-5xl text-white font-bold inter-var text-center mb-8 p-4">
        Some of My <GradientSpan content="Projects" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 mb-20">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              heading={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              liveLink={project.liveLink}
              displayLink={project.diplayLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
