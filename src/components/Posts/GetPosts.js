import React, { useState, useEffect } from "react";
import axios from "axios";
const GetPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/matches/`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {posts &&
        posts.map((e, key) => {
          return (
            <div key={key}>
              <h1>{e.fullName}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default GetPosts;
