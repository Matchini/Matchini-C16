import React from "react";

const Register = () => {
  return (
    <div class="w-full mt-12 bg-no-repeat bg-cover bg-center mr-12">
      <div >
        <div class="bg-white mt-12 w-full justify-center items-center ">
          <div>
            <div>
              <div class="text-center">
                <h1 class="text-2xl font-bold">Welcome to Matchini</h1>
              </div>
              <div class="my-5">
                <label class="block text-md" for="email">
                  Full Name
                </label>
                <input
                  class="px-4 w-full border-2 py-2 rounded-md bg-gray-100 text-sm outline-none"
                  type="text"
                  name="FirstName"
                  placeholder="write your first name here"
                />
              </div>
              <div class="my-5">
                <label class="block text-md" for="email">
                  Email
                </label>
                <input
                  class="px-4 w-full border-2 py-2 rounded-md bg-gray-100 text-sm outline-none"
                  type="email"
                  name="password"
                  placeholder="write your email here"
                />
              </div>
              <div class="mt-5">
                <label class="block text-md" for="password">
                  Password
                </label>
                <input
                  class="px-4 w-full border-2 py-2 rounded-md bg-gray-100 text-sm outline-none"
                  type="password"
                  name="password"
                  placeholder="password here ..."
                />
              </div>

              <div class="flex justify-between">
                <div class="mt-2">
                  <input
                    class="cursor-pointer"
                    type="radio"
                    name="rememberme"
                  />
                  <span class="text-sm ml-3">Remember Me</span>
                </div>
                <span class="text-sm text-blue-700 mt-2 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div class="mt-8">
                <button class=" mb-3 w-full bg-first hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                  Create Account
                </button>
                <div class="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                  <img
                    class=" h-5 cursor-pointer"
                    src="https://i.imgur.com/arC60SB.png"
                    alt=""
                  />
                  <button>Or sign-up with google</button>
                </div>
              </div>
            </div>
            <p class="mt-8"> Dont have an account? </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
