// "use client";
// import { useState } from "react";

// type Post = {
//   id: number;
//   text: string;
//   votes: number;
//   dislikes: number;
//   replies: { id: number; text: string }[];
// };

// export default function Discussions() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [newPost, setNewPost] = useState("");
//   const [replyText, setReplyText] = useState<{ [key: number]: string }>({});

//   const handlePost = () => {
//     if (newPost.trim()) {
//       const newEntry: Post = { id: posts.length + 1, text: newPost, votes: 0, dislikes: 0, replies: [] };
//       setPosts([newEntry, ...posts]);
//       setNewPost("");
//     }
//   };

//   const handleVote = (id: number, change: number) => {
//     setPosts(posts.map(post =>
//       post.id === id ? { ...post, votes: post.votes + (change > 0 ? 1 : 0), dislikes: post.dislikes + (change < 0 ? 1 : 0) } : post
//     ));
//   };

//   const handleReply = (id: number) => {
//     if (replyText[id]?.trim()) {
//       setPosts(posts.map(post =>
//         post.id === id ? { ...post, replies: [...post.replies, { id: post.replies.length + 1, text: replyText[id] }] } : post
//       ));
//       setReplyText({ ...replyText, [id]: "" });
//     }
//   };

//   return (
//     <div style={{
//         backgroundColor: "#C1D6EC",
//         minHeight: "auto",
//         padding: "20px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         width: "90%",
//         maxWidth: "800px",
//     }}>
//       <div style={{
//         maxWidth: "800px",
//         backgroundColor: "#FFFFFF",
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
//         textAlign: "center",
//       }}>
//         <h1 style={{
//           fontFamily: "'League Script', cursive",
//           fontSize: "2.5rem",
//           color: "red",
//         }}>
//           Questions? Comments? Concerns?
//         </h1>
        
//         {/* Input Form */}
//         <textarea
//           value={newPost}
//           onChange={(e) => setNewPost(e.target.value)}
//           placeholder="Type your question or comment..."
//           style={{
//             width: "90%",
//             padding: "10px",
//             margin: "10px 0",
//             borderRadius: "5px",
//             fontFamily: "'Times New Roman', serif",
//           }}
//         />
//         <button onClick={handlePost} style={{
//           padding: "10px 20px",
//           backgroundColor: "#66bb6a",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           fontFamily: "'Courier Prime', monospace",
//         }}>
//           Post
//         </button>

//         {/* Discussion Threads */}
//         <div style={{ marginTop: "20px" }}>
//           {posts.sort((a, b) => b.votes - a.votes).map(post => (
//             <div key={post.id} style={{
//               padding: "10px",
//               margin: "10px 0",
//               backgroundColor: "#f4f4f4",
//               borderRadius: "5px",
//               textAlign: "left",
//             }}>
//               <p style={{ fontFamily: "'Courier Prime', monospace" }}>{post.text}</p>
//               <button onClick={() => handleVote(post.id, 1)} style={{ marginRight: "5px" }}>👍 {post.votes}</button>
//               <button onClick={() => handleVote(post.id, -1)}>👎 {post.dislikes}</button>

//               {/* Reply Section */}
//               <div style={{ marginTop: "10px" }}>
//                 <textarea
//                   value={replyText[post.id] || ""}
//                   onChange={(e) => setReplyText({ ...replyText, [post.id]: e.target.value })}
//                   placeholder="Reply..."
//                   style={{
//                     width: "90%",
//                     padding: "5px",
//                     borderRadius: "5px",
//                     fontFamily: "'Courier Prime', monospace",
//                   }}
//                 />
//                 <button onClick={() => handleReply(post.id)} style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#ff9800",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   marginTop: "5px",
//                   fontFamily: "'Courier Prime', monospace",
//                 }}>
//                   Reply
//                 </button>
//               </div>

//               {/* Display Replies */}
//               {post.replies.length > 0 && (
//                 <div style={{
//                   marginTop: "10px",
//                   paddingLeft: "10px",
//                   borderLeft: "2px solid #888",
//                 }}>
//                   {post.replies.map(reply => (
//                     <p key={reply.id} style={{ fontSize: "0.9rem", fontFamily: "'Courier Prime', monospace" }}>
//                       ↳ {reply.text}
//                     </p>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

export default function Snail() {
    return (
      <div style={{ minHeight: '100vh', padding: '20px' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            padding: '40px',
            border: '2px solid #000080',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
            textAlign: 'center',
          }}
        >
          {/* <h1 style={{ color: 'red', fontFamily: "'League Script', cursive", fontSize: '3rem' }}>
            discussion post
          </h1> */}
          <p style={{ fontFamily: "'Times New Roman', serif", fontSize: '1.5rem', marginTop: '20px' }}>
            enjoy. 
          </p>
          <img 
  src="/snail.gif" 
  alt="Moving Snail" 
  style={{
    position: "absolute",
    bottom: "10px",
    left: "0",
    width: "80px",
    animation: "snailMove 5s linear infinite"
  }} 
/>
<style jsx>{`
  @keyframes snailMove {
    from { left: -100px; }
    to { left: 100vw; }
  }
`}</style>


        </div>
      </div>
    );
  }
  