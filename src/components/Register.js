import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Home from "./Home";
import Alert from "@material-tailwind/react/Alert";

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
  };

  return (
    <div class="w-full mt-12 bg-no-repeat bg-cover bg-center mr-12">
      <div>
        <div class="bg-white mt-12 w-full justify-center items-center ">
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
                <p class="mt-8"> Already have an account?  </p>
                <p className="text-first mt-8 ml-2 font-semibold">Log in</p>
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
    </div>
  );
};

export default Register;
