"use client";

import { useRef } from "react";
import Image from "next/image";
import Draggable from "react-draggable";

export default function DraggableNote() {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        style={{
          backgroundColor: "#f9f9f9",
          borderLeft: "4px solid #000080",
          padding: "15px",
          fontFamily: "'Courier New', Courier, monospace",
          width: "300px",
          cursor: "move",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
          position: "absolute",
          top: "100px",
          left: "100px",
          zIndex: 10,
        }}
      >
        <h3 style={{ marginBottom: "10px", fontFamily: "'Times New Roman', serif", fontSize: "1rem", color: "#000080"}}>what i’m currently up to</h3>
        <p style={{ marginBottom: "10px" }}>
          My family came back from Japan and brought me Sumi ink and calligraphy brushes- I am eternally grateful and have been painting in a somewhat sumi-e/ illustrative style recently as you can see. The ink and brush are extremely satisfying. 
        </p>
        <Image
          src="/homepage/sketch.jpg"
          alt="Latest inspiration"
          width={250}
          height={150}
          style={{ borderRadius: "5px" }}
        />
      </div>
    </Draggable>
  );
}
