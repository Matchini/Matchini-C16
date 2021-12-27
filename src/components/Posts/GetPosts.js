import React, { useState, useEffect } from "react";
import axios from "axios";
// import logo from "../../assets/logo.png";

const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  //get stored data from DB
  const getData = () => {
    axios
      .get(`https://matchini.herokuapp.com/match`)
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
      {posts &&
        posts.map((e, key) => {
          return (
            // <div
            //   key={key}
            //   class="sticky bg-white shadow-md rounded-lg border max-w-md ml-24 p-8 sm:p-4 dark:bg-gray-800 dark:border-gray-700"
            // >
            //   <div class="flex items-center justify-between mb-4">
            //     <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            //       {e.fullName}
            //     </h3>
            //   </div>
            //   <div class="flow-root">
            //     <ul
            //       role="list"
            //       class="divide-y divide-gray-200 dark:divide-gray-700"
            //     >
            //       <li class="py-3 sm:py-4">
            //         <div class="flex items-center space-x-4">
            //           <div class="flex-shrink-0">
            //             <img
            //               class="h-8 w-8 rounded-full"
            //               src={logo}
            //               alt="image"
            //             />
            //           </div>
            //           <div class="flex-1 min-w-0">
            //             <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            //               {e.city} and the stadium is : {e.stadium}
            //             </p>
            //             <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            //               {e.time}
            //             </p>
            //           </div>

            //           <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            //             {e.number}
            //           </div>
            //         </div>
            //       </li>
            //     </ul>
            //   </div>
            // </div>
            <div class="flex items-center" key={key}>
              <div class="container ml-auto mr-auto flex flex-wrap items-start">
                <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                  <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <figure class="mb-2">
                      <h3 class="h-12 ml-auto mr-auto"> {e.fullName} </h3>
                    </figure>
                    <div class="rounded-lg p-4 bg-green-500 flex flex-col">
                      <div>
                        <h5 class="text-white text-2xl font-bold leading-none">
                          {e.city} || {e.stadium}
                        </h5>
                        <span class="text-xs text-black-400 leading-none">
                          {e.time}
                        </span>
                      </div>
                      <div class="flex items-center">
                        <div class="text-lg text-white font-light">
                          {e.number}
                        </div>
                        {/* <button
                          href="javascript:;"
                          class="rounded-full bg-gray-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="stroke-current m-auto"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button> */}
                      </div>
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
