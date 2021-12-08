import React, { useState, useEffect } from "react";
import axios from "axios";
const GetPosts = () => {
  const [posts, setPosts] = useState([]);

  // const getData = () => {
  //   axios
  //     .get(`http://localhost:3000/matches/`)
  //     .then((res) => {
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(posts);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    function getData() {
      axios
        .get(`http://localhost:3000/match`)
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(posts);
    }
    getData();
  }, []);

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
