import React from "react";
import SendPost from "./Feed/SendPost";
import Sort from "./Feed/Sort";

const Feed = () => {
  return (
    <div className="w-[540px] mx-auto">
      <SendPost />
      <Sort />
      
    </div>
  );
};

export default Feed;
