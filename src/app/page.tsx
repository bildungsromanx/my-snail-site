// "use client";

// import Image from "next/image";
// import DraggableNote from "./DraggableNote";

// export default function Home() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#C1D6EC",
//         // minHeight: "100vh",
//         position: "relative",
//         padding: "20px",
//         width: "90%",
//         maxWidth: "100vw",
//         margin: "0 auto",
//         // overflow: "hidden",
//       }}
//     >
//       {/* Layout box */}
//       <div
//         style={{
//           maxWidth: "800px",
//           margin: "0 auto",
//           backgroundColor: "#FFFFFF",
//           padding: "20px",
//           // border: "2px solid #000080",
//           // boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
//           textAlign: "center",
//           display: "flex",
//           flexDirection: "column",
//           gap: "1.5rem", // 👈 Clean spacing between elements
//         }}
//       >
//         <header>
//           <img 
//   src="/homepage/gif13.gif" 
//   alt="cute animation" 
//   style={{ width: "80px", display: "block", margin: "0 auto" }} 
// />
//           <h1
//             style={{
//               color: "red",
//               fontFamily: "'League Script', cursive",
//               fontSize: "2rem",
//               marginBottom: "1 rem",
//             }}
//           >
//             This is sort of like a blog and also a homepage
//           </h1> 
//           {/* <p
//             style={{
//               fontFamily: "'Times New Roman', serif",
//               fontSize: "1.2rem",
//               marginTop: 0,
//             }}
//           >
//             welcome, this is where i put some of my stuff. Kindly, Eileen
//           </p> */}
//         </header>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Image
//             src="/homepage/mayandjune.png"
//             alt="Art 1"
//             width={900}
//             height={500}
//             style={{
//               objectFit: "contain",
//               maxWidth: "100%",
//               height: "auto",
//               borderRadius: "5px",
//             }}
//           />
//           <div
//   style={{
//     fontFamily: "'Times New Roman', serif",
//     fontSize: "0.9rem",
//     color: "#666",
//     marginTop: "0.75rem",
//     textAlign: "center",
//   }}
// >
//   <p>
//   It&apos;s February 2026. This months snail is a Crested Nembrotha or more colloquially known as a Cabbage Patch Sea Slug.
// </p>

// <p>
//   I don&apos;t know what to say. Everyday feels like a battle. I feel like a sore muscle or as if I&apos;m attempting to catch a bubble and put it in my pocket (a totally useless way of appreciating life). I don&apos;t have any advice on how to deal with the pain of existence especially amidst chaos and an increasing police state under a fascist and corrupt government. The truth is not beautiful. In fact, reality may not be as beautiful as our fantasy will have us put it. So everyday feels like a <em> slap in the face.</em> The more you know right? 
// </p>
// <p>
//   I&apos;ve been reading Carl Sagan and find momentary comfort. And of course, in music and art. Perhaps, though, it is not comfort we seek for in art but a desire to feel seen too. For someone to just name it. “It” being an emotion, a force, an invisible psychic energy, a magnetic field, a demon or angel, a bully, the list goes on.
// </p>
// <p>
//   And a quote: “For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.”
// ―Carl Sagan, The Demon-Haunted World: Science as a Candle in the Dark 
// </p>
//   <em>New snail photo updated every month.</em>
// </div>

//         </div>

//         {/* <DraggableNote /> */}
//       </div>
//     </div>

//   );
// }





"use client";

import { useState } from "react";
import Image from "next/image";
import DraggableNote from "./DraggableNote";

// ---------------------------
// Slideshow Component
// ---------------------------
function MediaSlideshow() {
  const media = [
    { type: "image", src: "/homepage/mayandjune.png", alt: "snail pic" },
    { type: "image", src: "/homepage/mayandjune3.png", alt: "snail illustration" },
    { type: "image", src: "/homepage/mayandjune2.png", alt: "collage" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % media.length);
  const prev = () => setIndex((index - 1 + media.length) % media.length);

  return (
    <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ position: "relative" }}>
        {media[index].type === "image" ? (
          <Image
            src={media[index].src}
            alt={media[index].alt}
            width={900}
            height={500}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
          />
        ) : (
          <video
            src={media[index].src}
            controls
            style={{
              width: "100%",
              borderRadius: "5px",
            }}
          />
        )}

        {/* Left Arrow */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          ›
        </button>
      </div>

      <div
        style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: "0.9rem",
          color: "#666",
          marginTop: "0.75rem",
        }}
      >
      </div>
    </div>
  );
}

// ---------------------------
// Main Page
// ---------------------------
export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#C1D6EC",
        position: "relative",
        padding: "20px",
        width: "90%",
        maxWidth: "100vw",
        margin: "0 auto",
      }}
    >
      {/* Layout box */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#FFFFFF",
          padding: "20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <header>
          <img
            src="/homepage/gif13.gif"
            alt="cute animation"
            style={{ width: "80px", display: "block", margin: "0 auto" }}
          />

          <h1
            style={{
              color: "red",
              fontFamily: "'League Script', cursive",
              fontSize: "2rem",
              marginBottom: "1rem",
            }}
          >
            This is sort of like a blog and also a homepage
          </h1>
        </header>

        {/* Slideshow + Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MediaSlideshow />

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
  This one is for May and June.
</p>

<p>
  1. I am holding a wet piece of paper from <em>The New Yorker</em> of a snail
  looking at a round spiral frosted donut, half eaten, wondering to herself if
  she is a monster for succumbing to her gluttonous desires and looking back on
  her choices in regret. It’s funny because she thinks the donut is a snail—one
  of her kind. And that is what life has been feeling like the past few months:
  a combination of self-policing, shame, and moralizing myself through a sort of
  outside perspective. Because we as humans believe we are the center of our own
  universe. So, we must become rulers of said universe. But humans are fallible,
  imperfect, and easily distracted, so how can we be expected to be our own
  parents, our own gods? “We need a compass.” But where do we even start with
  finding a compass? We need a compass just to find the compass! That’s why we
  need other people.
</p>

<p>
  2. Here is a photo of a woman beginning her snail metamorphosis. She is sad
  she is changing, but it is necessary.
</p>

<p>
  3. This is a compilation of photos from New York City, the Metropolitan Museum
  of Art, the things we did there. I prefer to keep my private life private, so
  let’s just call them Red and Yellow. Red and Yellow are an artist father and
  son duo. They are restoring my idea of beauty &lt;3
</p>


            <em>New snail photo updated every month.</em>
          </div>
        </div>

        {/* <DraggableNote /> */}
      </div>
    </div>
  );
}
