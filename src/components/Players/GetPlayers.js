import React, { useState, useEffect } from "react";
import axios from "axios";

const GetPlayers = () => {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    axios
      .get(`https://matchini.herokuapp.com/player`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      {posts.map((e, key) => {
        return (
          <div key={key} className="sticky">
            <div className="sticky bg-blue p-1 font-sans">
              <div className="rounded bg-blue-light flex-col w-full border-2 bg-green-300 p-2">
                <div className="text-sm mt-2 flex flex-row bg-white w-full p-2 rounded mt-1 border-b border-grey  hover:bg-grey-lighter">
                  <div>
                    Name : {e.fullName} {" *"}
                  </div>

                  <div className="flex">
                    {"|* "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mt-1 mr-1 pl-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    City : {e.city} {" *"}
                  </div>
                  <div>
                    {"|* "} role : {e.role} {" *"}
                  </div>

                  <div className="flex">
                    {"|* "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 pl-1 mt-1 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    time : {e.availableTime} {" *"}
                  </div>
                  <div>
                    {"|* "} Phone : {e.number}
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

export default GetPlayers;
