

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingOverlay() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#C1D6EC",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}>
      <p style={{
        fontSize: "1.2rem",
        fontFamily: "monospace",
        color: "#000080",
      }}>
        loading...
      </p>
      {/* Snail animation */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "60px",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          right: "-1px", // Start off-screen to the right
          animation: "crawl-left 8s linear infinite",
        }}>
          <Image
            src="/snail.gif"
            alt="Animated Snail"
            width={60}
            height={60}
          />
        </div>
      </div>

      <style jsx>{`
            @keyframes crawl-left {
                from {
                transform: translateX(0);
                }
                to {
                transform: translateX(-100vw);
                }
            }
            `}</style>
    </div>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function LoadingOverlay() {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsVisible(false), 1500);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundColor: "#C1D6EC",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 1000,
//     }}>
//       <p style={{
//         fontSize: "1.2rem",
//         fontFamily: "monospace",
//         color: "#000080",
//         marginBottom: "30px",
//       }}>
//         loading your snailiverse...
//       </p>

//       {/* Snail animation */}
//       <div style={{
//         position: "relative",
//         width: "100%",
//         height: "60px",
//         overflow: "hidden",
//       }}>
//         <div style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           animation: "crawl 3s linear infinite",
//         }}>
//           <Image
//             src="/snail.gif"
//             alt="Animated Snail"
//             width={60}
//             height={60}
//           />
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes crawl {
//           from { left: -60px; }
//           to { left: 100vw; }
//         }
//       `}</style>
//     </div>
//   );
// }
