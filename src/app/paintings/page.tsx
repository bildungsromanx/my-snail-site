
"use client";
import { useState } from "react";
import PaintingCard from "../components/PaintingCard"; 

const paintings = [
    { id: "1", src: "/paintings/33.webp", caption: "Pragmatic Strangers, 2023", date: "2023-12-09" },
    { id: "2", src: "/paintings/34.webp", caption: "Chosen Caviar, 2023", date: "2023-12-09" },
    { id: "3", src: "/paintings/32.webp", caption: "Anatomy of a Roach, 2023", date: "2023-04-15" },
    { id: "4", src: "/paintings/30.webp", caption: "Green Smile, 2023", date: "2023-02-19" },
    { id: "5", src: "/paintings/19.jpg", caption: "Mermaid, 2023", date: "2023-02-19" },
    { id: "6", src: "/paintings/17.webp", caption: "Thanksgiving, 2023", date: "2023-12-11" },
    { id: "7", src: "/paintings/28.webp", caption: "Fours, 2021", date: "2021-03-07" },
    { id: "8", src: "/paintings/29.webp", caption: "Childhood Home, 2021", date: "2021-04-07" },
    { id: "9", src: "/paintings/26.webp", caption: "Bathroom Floor, 2021", date: "2021-01-11" },
    { id: "10", src: "/paintings/15.jpg", caption: "Anatomy of a Roach (2), 2023", date: "2023-04-15" },
    { id: "11", src: "/paintings/22.webp", caption: "Kissy, 2023", date: "2023-10-29" },
    { id: "12", src: "/paintings/21.webp", caption: "Kissy Kissy, 2023", date: "2023-10-29" },
    { id: "13", src: "/paintings/20.webp", caption: "I am Number 1, 2023", date: "2023-11-03" },
    { id: "14", src: "/paintings/12.webp", caption: "Crab Hand, 2024", date: "2024-01-06" },
    { id: "15", src: "/paintings/11.webp", caption: "Mermaid Ear, 2024", date: "2024-01-14" },
    { id: "16", src: "/paintings/10.webp", caption: "Fish (1), 2024", date: "2024-12-18" },
    { id: "17", src: "/paintings/8.webp", caption: "Fish (2), 2024", date: "2024-12-18" },
    { id: "18", src: "/paintings/9.webp", caption: "Fish (3), 2024", date: "2024-12-18" },
    { id: "19", src: "/paintings/7.webp", caption: "Fish (4), 2024", date: "2024-12-18" },
    { id: "20", src: "/paintings/6.webp", caption: "Toad In Water, 2025", date: "2025-01-18" },
    { id: "21", src: "/paintings/5.webp", caption: "Study of Bivalves, 2025", date: "2025-02-19" },
    { id: "22", src: "/paintings/4.webp", caption: "Study of Slugs, 2025", date: "2025-02-24" },
    { id: "23", src: "/paintings/3.webp", caption: "Snowflake on Sea Flower, 2025", date: "2025-02-25" },
    { id: "24", src: "/paintings/1.webp", caption: "Venus Running (1), 2025", date: "2025-04-05" },
    { id: "25", src: "/paintings/2.webp", caption: "Venus Running (2), 2025", date: "2025-04-05" },
    { id: "26", src: "/paintings/13.webp", caption: "Anatomy of a Roach (3), 2023", date: "2023-04-15" },
    { id: "27", src: "/paintings/14.webp", caption: "Anatomy of a Roach (4), 2023", date: "2023-04-15" },
    { id: "28", src: "/paintings/25.webp", caption: "Anatomy of a Roach (5), 2023", date: "2023-04-15" },
    { id: "29", src: "/paintings/31.webp", caption: "Woman on Soil, 2021", date: "2021-07-19" },
    { id: "30", src: "/paintings/27.webp", caption: "Safety Blanket, 2023", date: "2023-02-19" },
    { id: "31", src: "/paintings/24.webp", caption: "Outside, 2023", date: "2023-02-19" },
    { id: "32", src: "/paintings/23.webp", caption: "Self-portrait, 2023", date: "2023-02-19" },
    { id: "33", src: "/paintings/18.webp", caption: "Safety Blanket (2), 2023", date: "2023-02-19" },
    { id: "34", src: "/paintings/16.webp", caption: "Outside (2), 2023", date: "2023-02-19" },  
    { id: "35", src: "/paintings/35.webp", caption: "Toad in Toad, 2025", date: "2025-04-04" },
    { id: "36", src: "/paintings/36.webp", caption: "Study of fins, 2025", date: "2025-04-04" },
    { id: "37", src: "/paintings/37.webp", caption: "Study in Developmental Biology (1), 2025", date: "2025-04-04" },
    { id: "38", src: "/paintings/38.webp", caption: "Study in Developmental Biology (2), 2025", date: "2025-04-04" },
    { id: "39", src: "/paintings/39.webp", caption: "Crying Chicken, 2025", date: "2025-05-09" },
    // { id: "40", src: "/paintings/40.webp", caption: "Iguana, 2025", date: "2025-05-09" },
    // { id: "41", src: "/paintings/41.webp", caption: "Forest, 2025", date: "2025-05-09" },
    { id: "42", src: "/paintings/42.webp", caption: "Tai Chi Ball, 2025", date: "2025-05-09" },
    { id: "43", src: "/paintings/43.webp", caption: "Study in Developmental Biology (3), 2025", date: "2025-04-04" },
];


const paintingsByYear = paintings.reduce((acc, painting) => {
  const year = new Date(painting.date).getFullYear();
  if (!acc[year]) acc[year] = [];
  acc[year].push(painting);
  acc[year].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by latest date first
  return acc;
}, {} as Record<string, typeof paintings>);


const years = Object.keys(paintingsByYear)
  .map(Number) // Convert to numbers
  .sort((a, b) => b - a); // Now they’re numbers and can be compared



export default function PaintingsPage() {
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <div style={{ 
       backgroundColor: "#C1D6EC",
      minHeight: "100vh", // Ensures full screen height
      display: "flex", // Enables flexbox centering
      justifyContent: "center", // Centers horizontally
      alignItems: "center", // Centers vertically
      padding: "20px", 
      width: "90%", 
      maxWidth: "100vw", // Prevents overflow forcing an unwanted shift
      margin: "0 auto", 
       }}>
      <div style={{ 
        backgroundColor: "#FFFFFF",
        padding: "20px",
        border: "2px solid #000080",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column", // Ensures vertical stacking
        minHeight: "80vh", // Makes the box take most of the screen
        maxWidth: "800px",
        width: "90%",
        margin: "0 auto", 
        }}>
        
        {/* 📅 Year Navigation */}
        {/* 📅 Year Navigation */}
<nav style={{ marginBottom: "20px", textAlign: "center" }}>
  {years.map(year => (
    <button
      key={year}
      onClick={() => setSelectedYear(year)}
      style={{
        alignSelf: "flex-start",
        margin: "0.5rem",
        padding: "0.5rem 1rem",
        background: "linear-gradient(to bottom, #b2fab4, #66bb6a)",
        border: "1px solid black",
        borderRadius: "50px",
        fontFamily: "'Times New Roman', serif",
        fontSize: "16px",
        // fontWeight: "bold",
        textAlign: "center",
        cursor: "pointer",
        color: selectedYear === year ? "white" : "black", // Highlight selected year
        boxShadow: selectedYear === year ? "2px 2px 5px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {year}
    </button>
  ))}
</nav>

        {/* 🎨 Painting Display */}
        <div style={{ 
          display: "grid", 
          gap: "20px", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}>
          {paintingsByYear[selectedYear].map((painting) => (
            <PaintingCard key={painting.id} src={painting.src} caption={painting.caption} />
          ))}
        </div>

      </div>
    </div>
  );
}