"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { paintingsByYear, years } from "../../data/paintings";

export default function PaintingsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlYear = searchParams.get("year");
  const parsedYear = urlYear ? parseInt(urlYear, 10) : years[0];

  const [selectedYear, setSelectedYear] = useState(parsedYear);

  useEffect(() => {
    if (parsedYear !== selectedYear) {
      setSelectedYear(parsedYear);
    }
  }, [parsedYear, selectedYear]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Paintings</h1>

      <nav style={{ textAlign: "center", marginBottom: "2rem" }}>
        {years.map(year => (
          <span
            key={year}
            onClick={() => router.push(`/paintings?year=${year}`)}
            style={{
              margin: "0.5rem",
              cursor: "pointer",
              padding: "4px 10px",
              borderRadius: "8px",
              backgroundColor: year === selectedYear ? "#ffe6e6" : "transparent",
              color: year === selectedYear ? "#000080" : "red",
              fontFamily: "'Times New Roman', serif"
            }}
          >
            {year}
          </span>
        ))}
      </nav>

      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {paintingsByYear[selectedYear].map(painting => (
          <Link key={painting.id} href={`/paintings/${painting.id}?year=${selectedYear}`}>
            <img
              src={painting.src}
              alt={painting.caption}
              style={{ width: "100%", borderRadius: "12px", cursor: "pointer" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
