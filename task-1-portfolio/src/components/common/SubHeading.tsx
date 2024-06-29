import React from "react";

const SubHeading = ({ content }: { content: string }) => {
  return (
    <div className="text-xl md:text-3xl lg:text-5xl text-white font-bold inter-var text-center mb-8">
      {content}
    </div>
  );
};

export default SubHeading;
