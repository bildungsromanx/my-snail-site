

"use client";

import { useState } from "react";
import Image from "next/image";

const pages = [
  "/journal/1.webp", "/journal/1R.webp",
  "/journal/2.webp", "/journal/2R.webp",
  "/journal/3.webp", "/journal/3R.webp",
  "/journal/4.webp", "/journal/4R.webp",
  "/journal/5.webp", "/journal/5R.webp",
  "/journal/6.webp", "/journal/6R.webp",
  "/journal/7.webp", "/journal/7R.webp",
  "/journal/8.webp", "/journal/8R.webp",
  "/journal/9.webp", "/journal/9R.webp",
  "/journal/10.webp", "/journal/10R.webp",
  "/journal/11.webp", "/journal/11R.webp",
  "/journal/12.webp", "/journal/12R.webp",
  "/journal/13.webp", "/journal/13R.webp",
  "/journal/14.webp", "/journal/14R.webp",
  "/journal/15.webp", "/journal/15R.webp",
  "/journal/16.webp", "/journal/16R.webp",
  "/journal/17.webp", "/journal/17R.webp",
  "/journal/18.webp", "/journal/18R.webp",
  "/journal/19.webp", "/journal/19R.webp",
  "/journal/20.webp", "/journal/20R.webp",
  "/journal/21.webp", "/journal/21R.webp",
  "/journal/22.webp", "/journal/22R.webp",
  "/journal/23.webp", "/journal/23R.webp",
  "/journal/24.webp", "/journal/24R.webp",
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
    <div>
      <header style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "red",
            fontFamily: "'League Script', cursive",
            fontSize: "3rem",
            marginBottom: "0.5rem",
          }}
        >
          sketchbook
        </h1>
      </header>

      {/* Book spread */}
<div
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "nowrap",
    overflowX: "auto",
    width: "100%",
  }}
>
  <div style={{ flex: 1, position: "relative", minWidth: "50%", aspectRatio: "2/3" }}>
    <Image
      src={pages[pageIndex]}
      alt={`Sketchbook page ${pageIndex + 1} left`}
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
  <div style={{ flex: 1, position: "relative", minWidth: "50%", aspectRatio: "2/3" }}>
    <Image
      src={pages[pageIndex + 1]}
      alt={`Sketchbook page ${pageIndex + 2} right`}
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
</div>



      {/* Navigation */}
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
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
