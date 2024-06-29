import React from "react";

const GradientSpan = ({ content }: { content: string }) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
      {content}
    </span>
  );
};

export default GradientSpan;
