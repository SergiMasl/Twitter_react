import React from "react";
import "./Tweet.css";

const Tweet = ({ tweet }) => {
  const isAu = "https://pbs.twimg.com/media/FnHg4cUaUAABVRW.jpg";

  return (
    <div className="tweet">
      <img className="twitte_logo" src={tweet.logo} alt={"altText"} />
      <div className="twitte_wrap">
        <div className="user_content">
          <div className="tweet-author">{tweet.author}</div>
          {tweet.isAuth ? (
            <img className="twitte_isAu" src={isAu} alt={"altText"} />
          ) : (
            ""
          )}
          <p className="tweet-user_name">{tweet.userName}</p>
        </div>
        <div className="tweet-content">{tweet.content}</div>
      </div>
    </div>
  );
};

export default Tweet;
