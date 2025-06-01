
"use client"; // Ensure this runs as a Client Component

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  "/homepage/gallery2.png",
  "/homepage/gallery3.jpg",
  "/homepage/gallery4.jpg",
  "/homepage/gallery5.jpg",
  "/homepage/gallery6.jpg",
  "/homepage/gallery7.png",
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);


  // Open modal & set active image index
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate images in modal
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div style={{
      // backgroundColor: "#C1D6EC",
      // minHeight: "auto",
      // padding: "20px",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // flexDirection: "column",
      // width: "90%",
      // maxWidth: "800px",

 backgroundColor: "#C1D6EC",
      minHeight: "100vh", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      width: "90%",
      maxWidth: "100vw",
      margin: "0 auto",
    }}>
      <style jsx>{`
        @media (max-width: 600px) {
          .gallery {
            grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
          }
          .mainContainer {
            width: 90%;
            padding: 15px;
          }
        }
      `}</style>

      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        padding: "20px",
        border: "2px solid #000080",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        textAlign: "center",


        minHeight: "80vh", // ✅ Ensures it stays balanced across screen sizes
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <header>
          <h1 style={{
            color: "red",
            fontFamily: "'League Script', cursive",
            fontSize: "3rem",
            marginBottom: "0.5rem",
          }}>
            Eileen Zelaya
          </h1>
          <p style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "1.2rem",
            marginTop: 0,
          }}>
            welcome, this is where i put some of my stuff. 
          </p>
        </header>

        {/* Main Featured Image */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0" }}>
          <Image
            src="/homepage/gallery1.png"
            alt="Art 1"
            layout="responsive"
            width={500}
            height={500}
            style={{ objectFit: "contain", maxWidth: "100%", borderRadius: "5px" }}
          />
          <p style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "0.9rem",
            color: "#666",
            marginTop: "10px",
            textAlign: "center",
            }}>
            This month&apos;s snail is a mouthful to say &apos;&apos;Phyllodesmium iriomotense&apos;&apos;. <em>I picture her eating a gusher tasting baby squid and the ink spreading throughout her body. </em> New snail photo updated every month.
            </p>
        </div>

        {/* Heading & Blurb before Gallery */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2 style={{ fontFamily: "'Times New Roman', serif", fontSize: "1rem", color: "#000080" }}>
            Latest showings:
          </h2>
          <p style={{ fontFamily: "'Times New Roman', serif", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
          below are pictures from Funeral Home where i showed a video piece. Alongside Avi Young and Daniela Llanes. It was a cool curation by Gabriela Fernandez (hi, ur amazing). 
          </p>
        </div>

        {/* Mini Gallery - Single Row */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap", // Makes sure it fits on smaller screens while staying neat
          marginTop: "20px",
        }}>
          {galleryImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={100}
              height={100}
              style={{ objectFit: "cover", borderRadius: "5px", cursor: "pointer" }}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal - Enlarged Image View */}
      {selectedImage && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}>
          <button onClick={closeModal} style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            fontSize: "1.5rem",
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}>✖</button>
          <button onClick={prevImage} style={{
            position: "absolute",
            left: "10px",
            fontSize: "2rem",
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}>◀</button>
          <Image
            src={selectedImage}
            alt="Selected Artwork"
            width={600}
            height={600}
            style={{ objectFit: "contain", borderRadius: "10px" }}
          />
          <button onClick={nextImage} style={{
            position: "absolute",
            right: "10px",
            fontSize: "2rem",
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}>▶</button>
        </div>
      )}
    </div>
  );
}