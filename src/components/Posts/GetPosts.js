import React, { useState, useEffect } from "react";
import axios from "axios";
const GetPosts = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    axios
      .get(`http://localhost:3000/match/`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(posts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {posts &&
        posts.map((e, key) => {
          return (
            <div key={key}>
              <h1> Creator Full name : {e.fullName}</h1>
              <h6> Where is the Game : {e.city}</h6>
              <h6>When : {e.time}</h6>
              <h6>Contact : {e.number}</h6>
              <h6> Stadium :{e.stadium}</h6>
            </div>
          );
        })}
    </div>
  );
};

export default GetPosts;
