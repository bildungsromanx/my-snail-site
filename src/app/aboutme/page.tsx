"use client"; 

import Image from "next/image";

export default function AboutMePage() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      padding: "20px",
      backgroundColor: "#C1D6EC",
      display: "flex",
      justifyContent: "center", // Centers horizontally
  alignItems: "center", // Centers vertically
  width: "90%",
  maxWidth: "100vw", // Prevents overflow issues
  margin: "0 auto",

       }}>
      <style jsx>{`
        .bioContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        @media (max-width: 600px) {
          .bioContainer {
            flex-direction: column; // Center image on mobile
            text-align: center;
          }

          .bioImage {
            margin-bottom: 15px; // Adds spacing when stacked
          }
        }
      `}</style>

      <div
        style={{
          // maxWidth: "600px",
          // margin: "0 auto",
          // backgroundColor: "#FFFFFF",
          // padding: "40px",
          // border: "2px solid #000080",
          // boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          // textAlign: "center",
          maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#FFFFFF",
  padding: "20px", // ✅ Reduce padding to make it match other pages
  border: "2px solid #000080",
  boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
  textAlign: "center",
  minHeight: "80vh", // ✅ Ensures it stays balanced across screen sizes
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",



        }}
      >
        <h1
          style={{
            color: "red",
            fontFamily: "'League Script', cursive",
            fontSize: "3rem",
          }}
        >
          About the Author
        </h1>

        {/* Book-style summary */}
        <p
          style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "1.2rem",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          Eileen has a love-hate relationship with the &ldquo;art-world&rdquo; (the term makes no sense to her either 
          because it is redundant, isn&rsquo;t the world already art? And anyways, when people refer to the 
          &ldquo;art-world&rdquo;, what they are referring to is usually the academic and corporate institutions that 
          dictate what is worth investing in and selling—with the exceptions of certain institutions that are funded 
          and curated by artists themselves and make it their mission to avoid state sponsorship or propaganda. 
          This is becoming increasingly harder.)
          
          She has always wondered why artist statements are in the third-person; nevertheless, she is weak to its 
          orbit of influence. She started this as a blog because social media is making her life meaningless once again. 
          Yes, weak to its black hole.
        </p>

        {/* Quotes from others */}
        <blockquote style={{ fontStyle: "italic", marginTop: "20px" }}>
          “An insightful thinker and a natural storyteller.” — Someone Important
        </blockquote>
        <blockquote style={{ fontStyle: "italic" }}>
          “Their words stay with you long after you’ve read them.” — Another Admirer
        </blockquote>

        {/* Author biography */}
        <div className="bioContainer">
          <Image 
            src="/homepage/image3.jpg" 
            alt="Author" 
            width={150} 
            height={110} 
            className="bioImage"
            style={{
              borderRadius: "0%",
              flexShrink: 0,
            }} 
          />
          <p style={{ 
            fontFamily: "'Times New Roman', serif", 
            fontSize: "1rem", 
            textAlign: "left", 
            flex: 1, 
            minWidth: "200px" 
          }}>
            Eileen is a writer, creator, and thinker. With a background in (to be determined), they bring 
            thousands of references, hours-old coffee, and an undying psychosis to every project.
          </p>
        </div>
      </div>
    </div>
  );
}
