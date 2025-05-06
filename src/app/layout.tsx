
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { League_Script, Courier_Prime } from "next/font/google";


// const leagueScript = League_Script({
//   subsets: ["latin"],
//   weight: "400",
//   display: "swap", 
// });
// const courierPrime = Courier_Prime({ subsets: ["latin"], weight: "400" });

// export default function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [isMobile, setIsMobile] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return (
//     <html lang="en">
//       <head>
//         <link rel="stylesheet" href="https://your-custom-font-url.com" />
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body
//         style={{
//           margin: 0,
//           fontFamily: "'Times New Roman', serif",
//           backgroundColor: "#fff9c4",
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           minHeight: "100vh",
//         }}
//       >
//         {/* Hamburger button for mobile */}
//         {isMobile && (
//           <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           style={{
//             alignSelf: "flex-start",
//             margin: "1rem",
//             padding: "0.5rem 1rem",
//             background: "linear-gradient(to bottom, #b2fab4, #66bb6a)",
//             border: "1px solid black",
//             borderRadius: "50px",
//             fontFamily: "'League Script', cursive, sans-serif", 
//             fontSize: "16px",
//             fontWeight: "bold",
//             textAlign: "center",
//             cursor: "pointer",
//           }}
//         >
//           {menuOpen ? "close" : "menu"}
//         </button>
        
//         )}

//         {/* Navigation */}
//         {(!isMobile || menuOpen) && (
//           <nav
//             style={{
//               alignSelf: isMobile ? "flex-start" : "stretch",
//               width: isMobile ? "100%" : "200px",
//               paddingTop: "1rem",
//               paddingBottom: "1rem",
//               height: "fit-content",
//               background: "linear-gradient(to bottom, #b2fab4, #66bb6a)",
//               borderRadius: "100px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               fontFamily: courierPrime.className,
//               border: "1px solid black",
//               margin: "1rem",
//               overflow: "hidden",
//             }}
//           >
//             {/* Home Link */}
//             <Link href="/" style={{ textDecoration: "none" }}>
//   <h1
//     className={leagueScript.className}
//     style={{
//       color: "red",
//       fontWeight: "bold",
//       marginBottom: "1rem",
//       fontSize: "20px",
//       textAlign: "center",
//     }}
//   >
//     Home<br />page
//   </h1>
// </Link>

//             {/* Other Links */}
//             {[
//               ["video", "/video"],
//               ["paintings", "/paintings"],
//               ["journal", "/journal"],
//               // ["snail", "/snail"],
//               ["about me", "/aboutme"],
//             ].map(([label, href], index) => (
//               <Link
//                 key={index}
//                 href={href}
//                 style={{
//                   width: "100%",
//                   padding: "0.5rem 0",
//                   textAlign: "center",
//                   textDecoration: "none",
//                   color: "black",
//                   borderTop: "1px solid black",
//                   backgroundColor: "rgba(255,255,255,0.1)",
//                   fontFamily: courierPrime.className,
//                 }}
//               >
//                 {label}
//               </Link>
//             ))}
//           </nav>
//         )}

//         <main style={{ padding: "2rem", flexGrow: 1 }}>{children}</main>
//       </body>
//     </html>
//   );
// }



"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { League_Script, Courier_Prime } from "next/font/google";

const leagueScript = League_Script({ subsets: ["latin"], weight: "400", display: "swap" });
const courierPrime = Courier_Prime({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ Apply the snail cursor globally
  useEffect(() => {
    document.body.style.cursor = "url('/snail.gif'), auto"; // Adjust to match your resized GIF
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://your-custom-font-url.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "'Times New Roman', serif",
          backgroundColor: "#fff9c4",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          minHeight: "100vh",
        }}
      >
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              alignSelf: "flex-start",
              margin: "1rem",
              padding: "0.5rem 1rem",
              background: "linear-gradient(to bottom, #b2fab4, #66bb6a)",
              border: "1px solid black",
              borderRadius: "50px",
              fontFamily: "'League Script', cursive, sans-serif",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "close" : "menu"}
          </button>
        )}

        {(!isMobile || menuOpen) && (
          <nav
            style={{
              alignSelf: isMobile ? "flex-start" : "stretch",
              width: isMobile ? "100%" : "200px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              height: "fit-content",
              background: "linear-gradient(to bottom, #b2fab4, #66bb6a)",
              borderRadius: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: courierPrime.className,
              border: "1px solid black",
              margin: "1rem",
              overflow: "hidden",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <h1 className={leagueScript.className} style={{ color: "red", fontWeight: "bold", marginBottom: "1rem", fontSize: "20px", textAlign: "center" }}>
                Home<br />page
              </h1>
            </Link>

            {[
              ["video", "/video"],
              ["paintings", "/paintings"],
              ["journal", "/journal"],
              // ["snail stuff", "/snail"],
              ["about me", "/aboutme"],
            ].map(([label, href], index) => (
              <Link
                key={index}
                href={href}
                style={{
                  width: "100%",
                  padding: "0.5rem 0",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "black",
                  borderTop: "1px solid black",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  fontFamily: courierPrime.className,
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}

        <main style={{ padding: "2rem", flexGrow: 1 }}>{children}</main>
      </body>
    </html>
  );
}
