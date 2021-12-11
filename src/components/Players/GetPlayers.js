import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";

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
          <div class="bg-white shadow-md rounded-lg border max-w-md p-4 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                List of players
              </h3>
            </div>
            <div class="flow-root">
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        src={logo}
                        alt="image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {e.fullName}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {e.role}
                      </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {e.number}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GetPlayers;
