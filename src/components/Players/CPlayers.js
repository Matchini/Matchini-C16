import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const CPlayers = () => {
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://matchini.herokuapp.com/player", data)
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
      <div className="flex lg:flex-col flex-col items-center bg-white border-2 py-8 px-4 mt-8 ml-24 mr-24">
        create your profile
        <div className="flex flex-col w-full">
          <label
            htmlFor="fullName"
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
            htmlFor="time"
            className="text-gray-800 mt-4 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Available Time
          </label>
          <input
            id="time"
            name="time"
            type="date"
            autoComplete="off"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Placeholder"
            {...register("availableTime")}
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
            htmlFor="role"
            className="text-gray-800 mt-4 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            role
          </label>
          <input
            id="role"
            autoComplete="off"
            name="role"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 dark:focus:border-green-100 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="what's your position in the field"
            {...register("role")}
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
        <button className="mx-2 mt-4 w-full bg-green-500 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600">
          submit
        </button>
        <button
          onClick={() => history.push("/commercialsec")}
          className="mx-2 mt-4 w-full bg-green-500 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
        >
          Search Games
        </button>
      </div>
    </form>
  );
};

export default CPlayers;
