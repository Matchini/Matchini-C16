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
          // <div key={key} className="sticky">
          //   <div className="sticky bg-blue p-1 font-sans">
          //     <div className="rounded bg-blue-light flex-col w-full border-2 bg-green-300 p-2">
          //       <div className="text-sm mt-2 flex flex-row bg-white w-full p-2 rounded mt-1 border-b border-grey  hover:bg-grey-lighter">
          //         <div>
          //           Name : {e.fullName} {" *"}
          //         </div>

          //         <div className="flex">
          //           {"|* "}
          //           <svg
          //             xmlns="http://www.w3.org/2000/svg"
          //             className="h-4 w-4 mt-1 mr-1 pl-1"
          //             fill="none"
          //             viewBox="0 0 24 24"
          //             stroke="currentColor"
          //           >
          //             <path
          //               strokeLinecap="round"
          //               strokeLinejoin="round"
          //               strokeWidth="2"
          //               d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          //             />
          //             <path
          //               strokeLinecap="round"
          //               strokeLinejoin="round"
          //               strokeWidth="2"
          //               d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          //             />
          //           </svg>
          //           City : {e.city} {" *"}
          //         </div>
          //         <div>
          //           {"|* "} role : {e.role} {" *"}
          //         </div>

          //         <div className="flex">
          //           {"|* "}
          //           <svg
          //             xmlns="http://www.w3.org/2000/svg"
          //             className="h-4 w-4 pl-1 mt-1 mr-1"
          //             fill="none"
          //             viewBox="0 0 24 24"
          //             stroke="currentColor"
          //           >
          //             <path
          //               strokeLinecap="round"
          //               strokeLinejoin="round"
          //               strokeWidth="2"
          //               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          //             />
          //           </svg>
          //           time : {e.availableTime} {" *"}
          //         </div>
          //         <div>
          //           {"|* "} Phone : {e.number}
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>

          /////////////////////////////////////////////////////////////////////////////////
          <div class="w-screen h-screen flex justify-center items-center">
            <div class="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
              <div class="relative z-10">
                <img
                  class="w-full"
                  src="https://unsplash.com/photos/xNdldoBUECo/download?force=true&w=640"
                  alt="Profile image"
                />
                <div class="text-center absolute w-full">
                  <p class="text-white tracking-wide uppercase text-lg font-bold">
                    John Doe
                  </p>
                  <p class="text-gray-400 text-sm">@johndoe</p>
                </div>
              </div>
              <div class="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
                <p class="flex items-center text-gray-400">
                  <span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  online
                </p>
                <button class="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
                  <svg
                    viewBox="0 0 20 20"
                    enable-background="new 0 0 20 20"
                    class="w-6 h-6"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                          C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                          C15.952,9,16,9.447,16,10z"
                    />
                  </svg>
                </button>
              </div>
              <div class="pt-6 pb-8 text-gray-600 text-center">
                <p>Fullstack Developer </p>
                <p class="text-sm">Coding from Planet Earth</p>
              </div>

              <div class="pb-10 uppercase text-center tracking-wide flex justify-around">
                <div class="posts">
                  <p class="text-gray-400 text-sm">Posts</p>
                  <p class="text-lg font-semibold text-blue-300">76</p>
                </div>
                <div class="followers">
                  <p class="text-gray-400 text-sm">Followers</p>
                  <p class="text-lg font-semibold text-blue-300">964</p>
                </div>
                <div class="following">
                  <p class="text-gray-400 text-sm">Following</p>
                  <p class="text-lg font-semibold text-blue-300">34</p>
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
