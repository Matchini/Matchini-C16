import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://matchini.herokuapp.com/match", data)
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex lg:flex-col flex-col items-center bg-white py-8 px-4 mt-8 ml-24 mr-24 border-2">
        create game
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="off"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Write your full name"
            {...register("fullName")}
          />
        </div>{" "}
        <div className="flex flex-col w-full">
          <label
            htmlFor="Date"
            className="text-gray-800 mt-4 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Date
          </label>
          <input
            id="time"
            name="time"
            type="date"
            autoComplete="off"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Placeholder"
            {...register("time")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="city"
            className="text-gray-800 mt-4 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            city
          </label>
          <input
            id="city"
            name="city"
            autoComplete="off"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="..."
            {...register("city")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="stadium"
            className="text-gray-800 mt-4 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            stadium
          </label>
          <input
            id="stadium"
            autoComplete="off"
            name="stadium"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="win e la3ba"
            {...register("stadium")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="number"
            className="text-gray-800 mt-4 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Number
          </label>
          <input
            id="number"
            name="number"
            autoComplete="off"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="+216 ..."
            {...register("number")}
          />
        </div>
        {/* <button className="mx-2 mt-4 w-full bg-green-500 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
          submit
        </button> */}
        <button
          href="javascript:;"
          class="rounded-full bg-green-500 text-white hover:bg-white hover:text-green-500 hover:shadow-xl focus:outline-none w-full h-10 flex ml-auto transition duration-300"
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
        </button>
        <button
          onClick={() => history.push("/commercialthird")}
          className="mx-2 mt-4 w-full bg-green-500 transition duration-150 ease-in-out hover:bg-white hover:text-green-500 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
        >
          search players
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
