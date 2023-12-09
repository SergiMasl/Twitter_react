import React, { useState } from "react";
import Tweet from "./Tweet";

export default function TwittesContainer() {
  const logoimg =
    "https://www.shutterstock.com/image-vector/british-shorthair-cat-line-draft-260nw-1383432119.jpg";
  const initialTweets = [
    {
      id: 1,
      author: "Alex P",
      content: "This is the first tweet.",
      logo: logoimg,
      userName: "User1",
      isAuth: false,
      img: "",
    },
    {
      id: 2,
      author: "Ritta R",
      content: "Another tweet here.",
      logo: logoimg,
      userName: "User2",
      isAuth: true,
      img: "",
    },
    {
      id: 3,
      author: "Gretta T",
      content:
        "Elevate your outdoor style. Our Men's Outdoor Casual Stand Collar Long Sleeve Shirt combines comfort and versatility for your adventures. Embrace the great outdoors in style. Shop now and embark on your next adventure..",
      logo: logoimg,
      userName: "User3",
      isAuth: true,
      img: "",
    },
    {
      id: 4,
      author: "Tommas K",
      content:
        "🚨BREAKING: Kim Kardashian and Taylor Swift say they will leave the United States if Donald Trump becomes President in 2024. Whas your reaction?",
      logo: logoimg,
      userName: "User4",
      isAuth: false,
      img: "",
    },
    {
      id: 5,
      author: "Angela D",
      content:
        "People are threatening to leave the platform when Elon Musk reinstates Alex Jones. ",
      logo: logoimg,
      userName: "User5",
      isAuth: true,
      img: "",
    },
  ];

  const [tweets, setTweets] = useState(initialTweets);

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}
