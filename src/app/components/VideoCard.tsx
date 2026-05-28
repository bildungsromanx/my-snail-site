import React from "react";

const VideoCard = ({ src, caption }: { src: string; caption: string }) => {
  const extractVideoId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/[^\s]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(src);

  return (
    <div style={{ width: "100%", maxWidth: "640px", margin: "auto", padding: "5px" }}>
      {videoId ? (
        <div 
        style={{ 
          position: "relative", 
          width: "100%", 
          paddingBottom: "56.25%", // Maintains correct aspect ratio
          height: 0, 
          maxWidth: "100%", 
          minWidth: "100px", 
          overflow: "hidden", // Prevents content from overflowing outside
          margin: "auto",
          // paddingRight: "10px", // Small right-side padding buffer
        }}
      >
      
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      ) : (
        <p>Invalid video URL</p>
      )}
      <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#555" }}>{caption}</p>
    </div>
  );
};

export default VideoCard;
