"use client";

import Image from "next/image";
import DraggableNote from "./DraggableNote";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#C1D6EC",
        minHeight: "100vh",
        position: "relative",
        padding: "20px",
        width: "90%",
        maxWidth: "100vw",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Layout box */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#FFFFFF",
          padding: "20px",
          border: "2px solid #000080",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem", // 👈 Clean spacing between elements
        }}
      >
        <header>
          <h1
            style={{
              color: "red",
              fontFamily: "'League Script', cursive",
              fontSize: "3rem",
              marginBottom: "0.5rem",
            }}
          >
            Eileen Zelaya
          </h1>
          <p
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "1.2rem",
              marginTop: 0,
            }}
          >
            welcome, this is where i put some of my stuff.
          </p>
        </header>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src="/homepage/october.jpg"
            alt="Art 1"
            width={900}
            height={500}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
          />
          <div
  style={{
    fontFamily: "'Times New Roman', serif",
    fontSize: "0.9rem",
    color: "#666",
    marginTop: "0.75rem",
    textAlign: "center",
  }}
>
  <p>
    October&apos;s snail! Since it is October and spooky things are among us, I thought I&apos;d share some snail anatomy:
  </p>
  <p><strong>Class:</strong> Gastropoda</p>
  <p><strong>Order:</strong> Pulmonata</p>
  <p><strong>Species:</strong> Land snail, <em>Helix</em></p>

  <ul style={{ listStyleType: "none", padding: 0 }}>
    <li>
      <strong>External morphology:</strong> Two pairs of tentacles on the head, eyes on the tip of the superior posterior pair. Pneumostome and anus are shown. Asymmetrical spiral shell.
    </li>
    <li>
      <strong>Internal morphology:</strong> Pulmonary vessels on the roof of the mantle cavity and circulatory system with heart (blue). Digestive system (green). Reproductive hermaphroditic system (pink). Nervous system with ganglia in the nervous ring (black).
    </li>
    <li>
      <strong>Radula:</strong> Teeth that point backward.
    </li>
    <li>
      <strong>Eye section:</strong> Cross-section of the eye structure.
    </li>
  </ul>

  <em>New snail photo updated every month.</em>
</div>

        </div>

        <DraggableNote />
      </div>
    </div>
  );
}
