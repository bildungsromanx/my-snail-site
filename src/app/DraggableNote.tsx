

import { useRef, useState } from "react";
import Image from "next/image";
import Draggable from "react-draggable";

export default function DraggableNote() {
  const nodeRef = useRef(null);
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <>
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
          <h3 style={{ marginBottom: "10px", color: "#000080" }}>what i’m currently up to</h3>
          <p style={{ marginBottom: "10px" }}>
          My family came back from Japan and brought me Sumi ink and calligraphy brushes- I am eternally grateful and have been painting in a somewhat sumi-e/ illustrative style recently as you can see. The ink and brush are extremely satisfying. 
          I&apos;m working on creating a series of B&amp;W illustrations using just ink! 
          </p>

          <Image
            src="/homepage/sketch.jpg"
            alt="Latest inspiration"
            width={250}
            height={150}
            style={{ borderRadius: "5px", cursor: "pointer" }}
            onClick={() => setIsEnlarged(true)}
          />
        </div>
      </Draggable>

      {/* Enlarged Modal */}
      {isEnlarged && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99,
        }}>
          <button onClick={() => setIsEnlarged(false)} style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "2rem",
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}>✖</button>
          <Image
            src="/homepage/sketch.jpg"
            alt="Enlarged photo"
            width={600}
            height={400}
            style={{ borderRadius: "10px", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}

