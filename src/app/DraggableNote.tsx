

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
            width: "200px",
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
            Been doing figure drawing sessions every Sunday and practicing landscape painting. It is good for my soul to learn more traditional forms of painting. 
          </p>
          <Image
            src="/homepage/update.png"
            alt="Latest inspiration"
            width={200}
            height={250}
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
            src="/homepage/update.png"
            alt="Enlarged photo"
            width={1200}
            height={800}
            style={{ borderRadius: "10px", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}

