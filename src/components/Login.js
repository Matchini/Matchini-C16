import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        console.log(res.data);
        history.push({pathname:["/Commercial"],state:{query:res.data}})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  return (
    <div className="w-full mt-12 bg-no-repeat bg-cover bg-center">
      <div>
        <svg
          onClick={() => history.goBack()}
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
      <div>
        <div className="bg-white mt-12 w-full justify-center items-center px-12">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="text-center">
                <span class="text-2xl font-bold">Welcome back</span>
              </div>
              <div className="my-8">
                <label className="block text-md" for="email">
                  Email
                </label>
                <input
                  className="px-4 w-full h-10 bg-gray-100 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="password"
                  {...register("email")}
                  placeholder="write your email here"
                />
              </div>
              <div className="mt-6">
                <label className="block text-md" for="password">
                  Password
                </label>
                <input
                  className="px-4 w-full h-10 bg-gray-100 py-2 rounded-md text-sm outline-none"
                  type="password"
                  name="password"
                  {...register("password")}
                  placeholder="password here ..."
                />
              </div>

              <div className="flex justify-between pt-6">
                <div>
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="rememberme"
                  />
                  <span className="text-sm ml-2">Remember Me</span>
                </div>
                <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="">
                <div class="flex justify-center">
                  <button
                    type="submit"
                    class=" mt-6 w-3/6 h-12 text-xl bg-first hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                  >
                    LogIn
                  </button>
                </div>
                <div class="flex justify-center mt-6">
                  <p> Dont have an account? </p>
                  <a
                    onClick={() => history.push("/Register")}
                    className="text-first ml-2 hover:text-yellow-300 underline font-semibold"
                  >
                    Sign Up
                  </a>
                </div>
                <div class="flex justify-center mt-6">
                  <p className="text-lg font-semibold">OR</p>
                </div>
                <div className="flex space-x-2 mt-6 h-12 justify-center items-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                  <img
                    className=" h-5 cursor-pointer"
                    src="https://i.imgur.com/arC60SB.png"
                    alt=""
                  />
                  <button>Sign-in with google</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded">
      <Footer />
      </div>
    </div>
  );
};

export default Login;