import React from "react";
import Post from "./Feed/Post";
import SendPost from "./Feed/SendPost";
import Sort from "./Feed/Sort";

const Feed = () => {
  return (
    <div className="w-[540px] mx-auto">
      <SendPost />
      <Sort />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
