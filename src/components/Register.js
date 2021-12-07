import React from "react";

const Register = () => {
  return (
    <div class="w-full mr-64 mt-12 bg-no-repeat bg-cover bg-center">
      <div class="flex justify-end">
        <div class="bg-white  mt-12 w-1/2 flex justify-center items-center">
          <div>
            <div>
              <div>
                <h1 class="text-2xl font-bold">Register to your account</h1>
              </div>
              <div class="my-3">
                <label class="block text-md mb-2" for="email">
                  First Name
                </label>
                <input
                  class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="text"
                  name="FirstName"
                  placeholder="write your first name here"
                />
              </div>
              <div class="my-3">
                <label class="block text-md mb-2" for="email">
                  Last Name
                </label>
                <input
                  class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="text"
                  name="LastName"
                  placeholder="write your last name here"
                />
              </div>
              <div class="my-3">
                <label class="block text-md mb-2" for="email">
                  Email
                </label>
                <input
                  class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="password"
                  placeholder="write your email here"
                />
              </div>
              <div class="mt-5">
                <label class="block text-md mb-2" for="password">
                  Password
                </label>
                <input
                  class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  name="password"
                  placeholder="password here ..."
                />
              </div>

              <div class="flex justify-between">
                <div>
                  <input
                    class="cursor-pointer"
                    type="radio"
                    name="rememberme"
                  />
                  <span class="text-sm">Remember Me</span>
                </div>
                <span class="text-sm text-blue-700 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div class="">
                <button class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                  Register now
                </button>
                <div class="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                  <img
                    class=" h-5 cursor-pointer"
                    src="https://i.imgur.com/arC60SB.png"
                    alt=""
                  />
                  <button> google</button>
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
