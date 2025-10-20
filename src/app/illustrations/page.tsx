
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Draggable from "react-draggable";
import Modal from "./modal";
import React from "react";


// Grid settings
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 300;
const GAP_X = 50;
const GAP_Y = 50;
const COLUMNS = 3;

const imageSources = [
  "/illustrations/1.png",
  "/illustrations/2.png",
  "/illustrations/3.png",
  "/illustrations/18.png",
  "/illustrations/7.png",
  "/illustrations/8.png",
  "/illustrations/9.png",
  "/illustrations/10.png",
  "/illustrations/11.png",
  "/illustrations/12.png",
  "/illustrations/13.png",
  "/illustrations/14.png",
  "/illustrations/15.png",
  "/illustrations/16.png",
  "/illustrations/17.png",
  "/illustrations/6.png",
  "/illustrations/19.png",
  "/illustrations/20.png",
  "/illustrations/21.png",
  "/illustrations/22.png",
  "/illustrations/23.png",
  "/illustrations/24.png",
  "/illustrations/25.png",
  "/illustrations/26.png",
  "/illustrations/27.png",
  "/illustrations/28.png",
];

const images = imageSources.map((src, index) => {
  const row = Math.floor(index / COLUMNS);
  const col = index % COLUMNS;
  return {
    src,
    alt: `Image ${index + 1}`,
    top: row * (IMAGE_HEIGHT + GAP_Y),
    left: col * (IMAGE_WIDTH + GAP_X),
  };
});

export default function Playground() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
 const nodeRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>(
  Array.from({ length: images.length }, () => React.createRef<HTMLDivElement>())
);



  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "auto",
        padding: "2rem",
      }}
    >
      {/* Scroll Indicator Arrow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 50,
          pointerEvents: "none",
          animation: "bounce 1.5s infinite",
        }}
      >
        <span
          style={{
            fontSize: "2rem",
            color: "#000080",
            opacity: 0.6,
          }}
        >
          ➤
        </span>
      </div>

      {/* Draggable Grid */}
      {images.map((img, index) => (
        <Draggable
          key={index}
          nodeRef={nodeRefs.current[index]}
          enableUserSelectHack={false}
          onStart={() => {
            const ref = nodeRefs.current[index].current;
            if (ref) ref.style.cursor = "grabbing";
          }}
          onStop={() => {
            const ref = nodeRefs.current[index].current;
            if (ref) ref.style.cursor = "move";
          }}
        >
          <div
            ref={nodeRefs.current[index]}
            style={{
              position: "absolute",
              top: img.top,
              left: img.left,
              width: `${IMAGE_WIDTH}px`,
              maxWidth: "90vw",
              cursor: "move",
              boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
              borderRadius: "8px",
              transition: "transform 0.2s ease",
              touchAction: "none",
              userSelect: "none",
            }}
            onDoubleClick={() => setSelectedImage(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              draggable={false}
              style={{
                width: "100%",
                height: "auto",
                userSelect: "none",
              }}
            />
          </div>
        </Draggable>
      ))}

      {/* Modal */}
      {selectedImage && (
        <Modal onClose={() => setSelectedImage(null)}>
          <Image
            src={selectedImage}
            alt="Expanded photo"
            width={1200}
            height={800}
            style={{
              borderRadius: "10px",
              objectFit: "contain",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          />
        </Modal>
      )}

      {/* Bounce Animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(-50%) translateX(0);
            }
            50% {
              transform: translateY(-50%) translateX(5px);
            }
          }
        `}
      </style>
    </div>
  );
}
