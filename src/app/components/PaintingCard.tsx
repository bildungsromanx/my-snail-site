
// "use client";

// import { useState } from "react";
// import Image from "next/image";

// type PaintingCardProps = {
//   src: string;
//   caption: string;
// };

// export default function PaintingCard({ src, caption }: PaintingCardProps) {
//   const [showGallery, setShowGallery] = useState(false);

//   return (
//     <div style={{ textAlign: "center", cursor: "pointer" }}>
//       <Image
//         src={src}
//         alt={caption}
//         layout="responsive"
//         width={500}
//         height={500}
//         style={{ width: "100%", height: "auto", objectFit: "contain", border: "2px solid black" }}
//         onClick={() => setShowGallery(true)} // 🔹 Click to open full-screen mode
//         loading="lazy"
//       />
//       <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "#555" }}>{caption}</p>

//       {/* Full-Screen Modal (Hidden Until Clicked) */}
//       {showGallery && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0, 0, 0, 0.8)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//           onClick={() => setShowGallery(false)} // 🔹 Click anywhere to close
//         >
//           <Image
//             src={src}
//             alt={caption}
//             width={800}
//             height={600}
//             style={{ maxWidth: "90vw", maxHeight: "80vh", objectFit: "contain", border: "2px solid white" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";

type PaintingCardProps = {
  src: string;
  caption: string;
};

export default function PaintingCard({ src, caption }: PaintingCardProps) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div style={{ textAlign: "center", cursor: "pointer" }}>
      {/* 🖼 Thumbnail Image */}
      <Image
        src={src}
        alt={caption}
        layout="responsive"
        width={500}
        height={500}
        style={{ width: "100%", height: "auto", objectFit: "contain", border: "2px solid black" }}
        onClick={() => setShowGallery(true)} 
        loading="lazy"
      />
      <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "#555" }}>{caption}</p>

      {/* 🔎 Full-Screen Modal */}
      {showGallery && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowGallery(false)}
        >
          <Image
            src={src}
            alt={caption}
            width={800}
            height={600}
            style={{ maxWidth: "90vw", maxHeight: "80vh", objectFit: "contain", border: "2px solid white" }}
          />
        </div>
      )}
    </div>
  );
}
