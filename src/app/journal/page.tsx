// export default function JournalPage() {
//     return (
//       <div style={{  minHeight: '100vh', padding: '20px' }}>
//         <div
//           style={{
//             maxWidth: '600px',
//             margin: '0 auto',
//             backgroundColor: '#FFFFFF',
//             padding: '40px',
//             border: '2px solid #000080',
//             boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
//             textAlign: 'center',
//           }}
//         >
//           <h1 style={{ color: 'red', fontFamily: "'League Script', cursive", fontSize: '3rem' }}>
//             journal
//           </h1>
//           <p style={{ fontFamily: "'Times New Roman', serif", fontSize: '1.5rem', marginTop: '20px' }}>
//             Under Construction 🚧
//           </p>
//         </div>
//       </div>
//     );
//   }
  






// src/app/journal/page.tsx


"use client";

import { useState } from "react";
import Image from "next/image";

const pages = [
  "/journal/1.webp", "/journal/1 (2).webp",
  "/journal/2.webp", "/journal/2 (2).webp",
  "/journal/3.webp", "/journal/3 (2).webp",
  "/journal/4.webp", "/journal/4 (2).webp",
  "/journal/5.webp", "/journal/5 (2).webp",
  "/journal/6.webp", "/journal/6 (2).webp",
  "/journal/7.webp", "/journal/7 (2).webp",
  "/journal/8.webp", "/journal/8 (2).webp",
  "/journal/9.webp", "/journal/9 (2).webp",
  "/journal/10.webp", "/journal/10 (2).webp",
  "/journal/11.webp", "/journal/11 (2).webp",
  "/journal/12.webp", "/journal/12 (2).webp",
  "/journal/13.webp", "/journal/13 (2).webp",
  "/journal/14.webp", "/journal/14 (2).webp",
  "/journal/15.webp", "/journal/15 (2).webp",
  "/journal/16.webp", "/journal/16 (2).webp",
  "/journal/17.webp", "/journal/17 (2).webp",
  "/journal/18.webp", "/journal/18 (2).webp",
  "/journal/19.webp", "/journal/19 (2).webp",
  "/journal/20.webp", "/journal/20 (2).webp",
  "/journal/21.webp", "/journal/21 (2).webp",
  "/journal/22.webp", "/journal/22 (2).webp",
  "/journal/23.webp", "/journal/23 (2).webp",
  "/journal/24.webp", "/journal/24 (2).webp",
  "/journal/25.webp", "/journal/25 (2).webp",
  "/journal/26.webp", "/journal/26 (2).webp",
  "/journal/27.webp", "/journal/27 (2).webp",
  "/journal/28.webp", "/journal/28 (2).webp"
];

export default function Journal() {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    if (pageIndex < pages.length - 2) setPageIndex(pageIndex + 2);
  };

  const prevPage = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 2);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "nowrap" }}>
        {pages[pageIndex] && (
          <div style={{ width: "45vw", maxWidth: "400px", aspectRatio: "3/4", position: "relative" }}>
            <Image src={pages[pageIndex]} alt="Page Left" fill style={{ objectFit: "contain" }} />
          </div>
        )}
        {pages[pageIndex + 1] && (
          <div style={{ width: "45vw", maxWidth: "400px", aspectRatio: "3/4", position: "relative" }}>
            <Image src={pages[pageIndex + 1]} alt="Page Right" fill style={{ objectFit: "contain" }} />
          </div>
        )}
      </div>
      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
        <button onClick={prevPage} disabled={pageIndex === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={pageIndex >= pages.length - 2}>
          Next
        </button>
      </div>
    </div>
  );
}


