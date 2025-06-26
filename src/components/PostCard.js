import React, { useState } from "react";

function PostCard({ title, description }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={() => setLikes(likes + 1)}>❤️ {likes} Likes</button>
    </div>
  );
}

export default PostCard;
