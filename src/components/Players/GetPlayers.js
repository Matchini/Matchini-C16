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
          <div class="sticky bg-white shadow-md rounded-lg border max-w-md ml-24 p-8 sm:p-4 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                {e.fullName}
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
                        {e.city}
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
