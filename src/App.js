import React, { useState } from "react";
import Login from "./components/Login";
import ProfileCard from "./components/ProfileCard";
import PostCard from "./components/PostCard";
import ClickGame from "./components/ClickGame";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <ProfileCard />
          <PostCard title="Product A" description="Awesome item A!" />
          <PostCard title="Product B" description="Must-have B item!" />
          <ClickGame />
          <FeedbackForm />
        </>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
