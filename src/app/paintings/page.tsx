"use client";

import { useState } from "react";
import Link from "next/link";
import { paintingsByYear, years } from "../../data/paintings";

export default function PaintingsPage() {
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem 1rem",
      backgroundColor: "#c1d6ecff",
      minHeight: "100vh"
    }}>
      <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            padding: '20px',
            border: '2px solid #000080',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
          }}
        >
      {/* 📅 Year Navigation */}
       <h1
              style={{
                color: 'red',
                fontFamily: "'League Script', cursive",
                fontSize: '3rem',
                marginBottom: '0.5rem',
                textAlign: "center"
              }}
            >
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
  onClick={() => setSelectedYear(year)}
  style={{
    margin: "0.5rem",
    fontSize: "16px",
    color: "red",
    textDecoration: "underline",
    fontFamily: "'Times New Roman', serif",
    cursor: "pointer",
    display: "inline-block"
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
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
      }}>
        {paintingsByYear[selectedYear].map(painting => (
          <Link key={painting.id} href={`/paintings/${painting.id}`}>
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
