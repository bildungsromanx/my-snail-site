"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { League_Script, Courier_Prime } from "next/font/google";

const leagueScript = League_Script({ subsets: ["latin"], weight: "400", display: "swap" });
const courierPrime = Courier_Prime({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    document.body.style.cursor = "url('/snail.gif'), auto";
  }, []);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <html lang="en">
      <head>
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
        {/* MOBILE MENU BUTTON */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              alignSelf: "flex-start",
              margin: "1rem",
              padding: "0.5rem 1rem",
              fontFamily: "'League Script', cursive",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "close" : "menu"}
          </button>
        )}

        {/* SIDEBAR */}
        {(!isMobile || menuOpen) && (
          <nav
            style={{
              width: isMobile ? "90%" : "150px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: courierPrime.className,
              margin: "1rem",
            }}
          >
            {/* HOMEPAGE GIF BUTTON */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <img
                src="/homepage/gif7.gif"
                alt="homepage"
                style={{
                  width: "150px",
                  display: "block",
                  margin: "0 auto",
                  cursor: "pointer",
                }}
              />
            </Link>
          

            {/* OTHER GIF BUTTONS */}
            {[
              ["video", "/video", "/homepage/gif8.gif"],
              ["paintings", "/paintings", "/homepage/gif9.gif"],
              // ["sketchbook", "/journal", "/homepage/gif10.gif"],
              ["illustrations", "/illustrations", "/homepage/gif11.gif"],
              ["about me", "/aboutme", "/homepage/gif12.gif"],
            ].map(([label, href, gif], index) => (
              <Link
                key={index}
                href={href}
                style={{
                  width: "100%",
                  padding: "0.5rem 0",
                  textAlign: "center",
                  textDecoration: "none",
                  // borderTop: "1px solid black",
                  display: "block",
                }}
              >
                <img
                  src={gif}
                  alt={label}
                  style={{
                    width: "100px",
                    display: "block",
                    margin: "0 auto",
                    cursor: "pointer",
                  }}
                />
              </Link>
            ))}
          </nav>
        )}

        {/* MAIN CONTENT */}
        <main style={{ padding: "2rem", flexGrow: 1 }}>{children}</main>
      </body>
    </html>
  );
}
