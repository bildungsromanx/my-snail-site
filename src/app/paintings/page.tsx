// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { paintingsByYear, years } from "../../data/paintings";

// export default function PaintingsPage() {
//   const [selectedYear, setSelectedYear] = useState(years[0]);

//   return (
//     <div style={{
//       maxWidth: "1200px",
//       margin: "0 auto",
//       padding: "2rem 1rem",
//       backgroundColor: "#c1d6ecff",
//       minHeight: "100vh",
//       overflowX: "hidden",
//     }}>
//       <div
//           style={{
//             maxWidth: '1100px',
//             margin: '0 auto',
//             backgroundColor: '#FFFFFF',
//             padding: '20px',
//             border: '2px solid #000080',
//             boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
//           }}
//         >
//       {/* 📅 Year Navigation */}
//        <h1
//               style={{
//                 color: 'red',
//                 fontFamily: "'League Script', cursive",
//                 fontSize: '3rem',
//                 marginBottom: '0.5rem',
//                 textAlign: "center"
//               }}
//             >
//               paintings
//             </h1>
//       <nav style={{
//         marginBottom: "2rem",
//         textAlign: "center",
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "center"
//       }}>
//         {years.map(year => (
//           <span
//   key={year}
//   onClick={() => setSelectedYear(year)}
//   style={{
//     margin: "0.5rem",
//     fontSize: "16px",
//     color: "red",
//     textDecoration: "underline",
//     fontFamily: "'Times New Roman', serif",
//     cursor: "pointer",
//     display: "inline-block"
//   }}
// >
//   {year}
// </span>


//         ))}
//       </nav>

//       {/* 🎨 Gallery Grid */}
//       <div style={{
//         display: "grid",
//         gap: "20px",
//         gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
//       }}>
//         {paintingsByYear[selectedYear].map(painting => (
//           <Link key={painting.id} href={`/paintings/${painting.id}?year=${selectedYear}`}>
//             <img
//               src={painting.src}
//               alt={painting.caption}
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 cursor: "pointer"
//               }}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { paintingsByYear, years } from "../../data/paintings";

export default function PaintingsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlYear = searchParams.get("year");
  const parsedYear = urlYear ? parseInt(urlYear, 10) : null;
  const initialYear = parsedYear && years.includes(parsedYear) ? parsedYear : years[0];

  const [selectedYear, setSelectedYear] = useState<number>(initialYear);

  // Sync state with URL when it changes (e.g. back button)
  useEffect(() => {
    if (parsedYear && years.includes(parsedYear) && parsedYear !== selectedYear) {
      setSelectedYear(parsedYear);
    }
  }, [parsedYear, selectedYear]);

  // Update URL when user clicks a year
  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    router.push(`/paintings?year=${year}`);
  };

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem 1rem",
      backgroundColor: "#c1d6ecff",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        padding: '20px',
        border: '2px solid #000080',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
      }}>
        {/* 📅 Year Navigation */}
        <h1 style={{
          color: 'red',
          fontFamily: "'League Script', cursive",
          fontSize: '3rem',
          marginBottom: '0.5rem',
          textAlign: "center"
        }}>
          paintings
        </h1>

        <nav style={{
          marginBottom: "2rem",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {years.map(year => (
            <span
              key={year}
              onClick={() => handleYearClick(year)}
              style={{
                margin: "0.5rem",
                fontSize: "16px",
                color: year === selectedYear ? "#f56c6cff" : "red",
                // textDecoration: "underline",
                fontFamily: "'Times New Roman', serif",
                cursor: "pointer",
                display: "inline-block",

                   padding: "4px 10px", // optional: adds space inside the border
    borderRadius: "8px", // ← this adds the rounded corners
    backgroundColor: year === selectedYear ? "#ffe6e6" : "transparent", // optional: highlight selected
    transition: "all 0.2s ease" // optional: smooth hover effect
              }}
            >
              {year}
            </span>
          ))}
        </nav>

        {/* 🎨 Gallery Grid */}
        <div style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
        }}>
          {paintingsByYear[selectedYear].map(painting => (
            <Link
              key={painting.id}
              href={`/paintings/${painting.id}?year=${selectedYear}`}
            >
              <img
                src={painting.src}
                alt={painting.caption}
                style={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer"
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
