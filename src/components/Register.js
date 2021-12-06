import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        console.log(res.data)

      })
      .catch((err) => {
        console.log(err);
      });
    reset();
    history.push("/Login");
  };

  const history = useHistory();

  return (
    <div class="w-full mt-12 bg-no-repeat bg-cover bg-center mr-12">
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
        <div class="bg-white w-full justify-center items-center ">
          <div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="text-center">
                  <h1 class="text-2xl font-bold">Welcome to Matchini</h1>
                </div>
                <div class="my-5">
                  <label class="block text-md" for="email">
                    FirstName
                  </label>
                  <input
                    className="px-4 w-full bg-gray-100 py-2 rounded-md text-sm outline-none"
                    type="text"
                    name="FirstName"
                    {...register("first_name")}
                    placeholder="write your first name here"
                  />
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" for="email">
                    Last Name
                  </label>
                  <input
                    className="px-4 w-full bg-gray-100 py-2 rounded-md text-sm outline-none"
                    type="text"
                    name="LastName"
                    {...register("last_name")}
                    placeholder="write your last name here"
                  />
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" for="email">
                    Email
                  </label>
                  <input
                    className="px-4 w-full bg-gray-100 py-2 rounded-md text-sm outline-none"
                    type="email"
                    name="email"
                    {...register("email")}
                    placeholder="write your email here"
                  />
                </div>
                <div className="mt-5">
                  <label className="block text-md mb-2" for="password">
                    Password
                  </label>
                  <input
                    className="px-4 w-full bg-gray-100 py-2 rounded-md text-sm outline-none"
                    type="password"
                    name="password"
                    {...register("password")}
                    placeholder="password here ..."
                  />
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" for="email">
                    Phonenumber
                  </label>
                  <input
                    className="px-4 w-full bg-gray-100 py-2 rounded-md text-sm outline-none"
                    type="phone"
                    name="phonenumber"
                    {...register("phonenumber")}
                    placeholder="write your phone number here"
                  />
                </div>
                <div class="flex justify-center">
                  <button class=" mt-4 w-2/5 h-12 text-xl bg-first hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                    Create Account
                  </button>
                </div>
                <div class="flex justify-center">
                  <p class="mt-8"> Already have an account? </p>
                  <a
                    onClick={() => history.push("/Login")}
                    className="text-first mt-8 ml-2 hover:text-yellow-300 underline font-semibold"
                  >
                    Log in
                  </a>
                </div>
                <div class="flex justify-center mt-4">
                  <p className="text-lg font-semibold">OR</p>
                </div>
                <div class="flex mt-2 space-x-2 justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                  <img
                    class=" h-6 cursor-pointer mb-1"
                    src="https://i.imgur.com/arC60SB.png"
                    alt=""
                  />
                  <button>sign-up with google</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
