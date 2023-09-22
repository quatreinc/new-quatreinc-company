import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Test() {
  return (
    <div className="h-[800vh]">
      <Parallax speed={-80}>
        <div>test1</div>
      </Parallax>
      <Parallax speed={-60}>
        <div>test2</div>
      </Parallax>
    </div>
  );
}
