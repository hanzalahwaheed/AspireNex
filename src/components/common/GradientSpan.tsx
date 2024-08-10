import React from "react";

const GradientSpan = ({ content }: { content: string }) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-pink-600">
      {content}
    </span>
  );
};

export default GradientSpan;
