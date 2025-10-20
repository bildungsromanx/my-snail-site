

"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { paintings } from "../../../data/paintings";
import { League_Script } from "next/font/google";

// 🎨 Import your font
const leagueScript = League_Script({
  subsets: ["latin"],
  weight: "400"
});


export default function PaintingDetailPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const year = searchParams.get("year");


  const painting = paintings.find(p => p.id === id);


console.log("Year from query:", year);





  if (!painting) {
    return <div style={{ padding: "2rem" }}>Painting not found.</div>;
  }

  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      minHeight: "100vh"
    }}>
      {/* 🔙 Back Arrow */}
      <Link href={`/paintings${year ? `?year=${year}` : ""}`} style={{
        display: "inline-block",
        marginBottom: "1rem",
        fontSize: "2rem",
        textDecoration: "none",
        color: "#000080",
        fontFamily: "'Times New Roman', serif"
      }}>
        ←
      </Link>

      {/* 🖼️ Painting Title */}
<h1
  className={leagueScript.className}
  style={{
    color: "red",
    fontWeight: "bold",
    marginBottom: "0.25rem",
    fontSize: "30px",
    textAlign: "center"
  }}
>
  {painting.caption}
</h1>

{/* 📅 Date Below Title */}
<p style={{
  textAlign: "center",
  fontSize: "14px",
  color: "red",
  fontFamily: "'Times New Roman', serif",
  marginBottom: "2rem"
}}>
  {new Date(painting.date).getFullYear()}

</p>


      {/* 🔍 Clickable Image */}
      <a href={painting.src} target="_blank" rel="noopener noreferrer">
        <img
          src={painting.src}
          alt={painting.caption}
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            // borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            cursor: "zoom-in"
          }}
        />
      </a>

      {/* 📅 Date Info */}
      {/* <p style={{
        textAlign: "center",
        marginTop: "1rem",
        fontStyle: "italic",
        color: "#666"
      }}>
        FUCK EVERYTHING SO MUCH
      </p> */}
    </div>
  );
}
