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
              <div className="bg-blue w-full p-8 flex justify-center font-sans">
                <div className="rounded bg-blue-light w-64 p-2">
                  <div className="flex justify-between py-1">
                    <h3 className="text-sm"> Match</h3>
                    <svg
                      className="h-4 fill-current text-grey-dark cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                    </svg>
                  </div>
                  <div className="text-sm mt-2">
                    <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                      Name : {e.fullName}
                    </div>

                    <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                      City / stadium : {e.city} || {e.stadium}
                    </div>

                    <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                      time : {e.time} || Call : {e.number}
                      {/* <div className="text-grey-darker mt-2 ml-2 flex justify-between items-start">
                        <img
                          src="https://miro.medium.com/fit/c/1360/1360/1*uMbeJrgezp8uWkAbZvvDBA.jpeg"
                          className="rounded-full"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GetPosts;
