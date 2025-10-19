"use client";

import { ReactNode } from "react";

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      style={{
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
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "2rem",
          background: "transparent",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ✖
      </button>
      {children}
    </div>
  );
}
