"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Draggable from "react-draggable";
import Modal from "./modal";

const images = [
  { src: "/illustrations/1.png", alt: "Image 1", top: 50, left: 50 },
  { src: "/illustrations/2.png", alt: "Image 2", top: 50, left: 400 },
  { src: "/illustrations/3.png", alt: "Image 3", top: 300, left: 50 },
  // Add more images with unique top/left
];

export default function Playground() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "auto", // allows scroll on smaller screens
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

      {/* Draggable Images */}
      {images.map((img, index) => {
        const nodeRef = useRef<HTMLDivElement>(null);

        return (
          <Draggable
            key={index}
            nodeRef={nodeRef}
            enableUserSelectHack={false}
            onStart={() => {
              if (nodeRef.current) {
                nodeRef.current.style.cursor = "grabbing";
              }
            }}
            onStop={() => {
              if (nodeRef.current) {
                nodeRef.current.style.cursor = "move";
              }
            }}
          >
            <div
              ref={nodeRef}
              style={{
                position: "absolute",
                top: img.top,
                left: img.left,
                width: "300px",
                maxWidth: "90vw", // ensures visibility on mobile
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
                width={300}
                height={300}
                draggable={false}
                style={{
                  width: "100%",
                  height: "auto",
                  userSelect: "none",
                }}
              />
            </div>
          </Draggable>
        );
      })}

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
