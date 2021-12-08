import React, { useState, useEffect } from "react";
import axios from "axios";
const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const GetData = () => {
    axios
      .get(`http://localhost:3000/matches/`)
      .then((res) => {
        setPosts(res.data);
        console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      {posts.map((e, key) => {
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
