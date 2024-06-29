import React from "react";
import SubHeading from "../common/SubHeading";
import Card from "./Card";

const Projects = () => {
  const projects = [
    {
      title: "asdf",
      description: "asdf",
      imgUrl:
        "https://i.pinimg.com/originals/99/22/38/9922383913ff24a2f2f3207754ee86d0.jpg",
      liveLink: "https://hanzalahwaheed.me",
    },
    {
      title: "asdf",
      description: "asdf",
      imgUrl:
        "https://i.pinimg.com/originals/99/22/38/9922383913ff24a2f2f3207754ee86d0.jpg",
      liveLink: "https://hanzalahwaheed.me",
    },
    {
      title: "asdf",
      description: "asdf",
      imgUrl:
        "https://i.pinimg.com/originals/99/22/38/9922383913ff24a2f2f3207754ee86d0.jpg",
      liveLink: "https://hanzalahwaheed.me",
    },
  ];
  return (
    <div className="p-2">
      <SubHeading content="Some of my Work" />
      <div className="flex">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              heading={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              liveLink={project.liveLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
