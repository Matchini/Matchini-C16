import React from "react";

const Register = () => {
  return (
    <div class="w-full mt-12 bg-no-repeat bg-cover bg-center mr-12">
      <div>
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
                  class="px-4 w-full py-2 rounded-md bg-gray-100 text-sm outline-none"
                  type="text"
                  name="FullName"
                  placeholder="write your full name here"
                />
              </div>
              <div class="my-5">
                <label class="block text-md" for="email">
                  Email
                </label>
                <input
                  class="px-4 w-full py-2 rounded-md bg-gray-100 text-sm outline-none"
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
                  class="px-4 w-full py-2 rounded-md bg-gray-100 text-sm outline-none"
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
              <div class="flex justify-center">
                <button class=" mb-3 w-2/5 h-12 text-xl bg-first hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
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
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
