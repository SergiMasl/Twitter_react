import React from "react";

export default function Home() {
  const newsJson = [
    {
      id: 1,
      user: "11",
      title: "gg",
      description: "sfdg sdfgsd gsfd",
      likes: 2,
    },
    {
      id: 2,
      user: "11",
      title: "fdsaf",
      description: "sfdg sdfgsd gsfd",
      likes: 2,
    },
    {
      id: 2,
      user: "11",
      title: "edfas",
      description: "sfdg sdfgsd gsfd",
      likes: 3,
    },
  ];
  return (
    <div>
      {newsJson.map((i) => (
        <p>{i.title}</p>
      ))}
    </div>
  );
}
