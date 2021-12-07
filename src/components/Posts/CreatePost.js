import React from "react";

const CreatePost = () => {
  return (
    <div className="flex lg:flex-col flex-col items-center py-8 px-4">
      create game
      <div className="flex flex-col lg:mr-16">
        <label
          htmlFor="email"
          className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
        >
          Full Name
        </label>
        <input
          id="fullName"
          autoComplete="off"
          className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          placeholder="Write your full name"
        />
      </div>{" "}
      <div className="flex flex-col lg:mr-16">
        <label
          htmlFor="email"
          className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
        >
          Email
        </label>
        <input
          id="email"
          autoComplete="off"
          className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          placeholder="Placeholder"
        />
      </div>
      <div className="flex flex-col lg:mr-16">
        <label
          htmlFor="number"
          className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
        >
          Number
        </label>
        <input
          id="number"
          autoComplete="off"
          className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          placeholder="+216 ..."
        />
      </div>
      <div className="flex flex-col lg:mr-16">
        <label
          htmlFor="city"
          className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
        >
          city
        </label>
        <input
          id="city"
          autoComplete="off"
          className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          placeholder="+216 ..."
        />
      </div>
      <div className="flex flex-col lg:mr-16">
        <label
          htmlFor="stadium"
          className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
        >
          stadium
        </label>
        <input
          id="stadium"
          autoComplete="off"
          className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          placeholder="+216 ..."
        />
      </div>
    </div>
  );
};

export default CreatePost;
