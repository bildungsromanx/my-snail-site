// "use client";

// import { ReactNode } from "react";

// export default function Modal({
//   children,
//   onClose,
// }: {
//   children: ReactNode;
//   onClose: () => void;
// }) {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "rgba(0,0,0,0.7)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 99,
//       }}
//     >
//       <button
//         onClick={onClose}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           fontSize: "2rem",
//           background: "transparent",
//           border: "none",
//           color: "#fff",
//           cursor: "pointer",
//         }}
//       >
//         ✖
//       </button>
//       {children}
//     </div>
//   );
// }


"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      onClick={onClose}
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
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          display: "inline-block", // ← THIS is the key fix
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
