import React from "react";
import { useForm, useNavigate } from "react-hook-form";
import axios from "axios";
import Home from "./Home";
const Login = () => {
  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      axios.post('http://localhost:5000/login',data)
      .then((resultat)=>{
        
        console.log(resultat.data)
        localStorage.setItem('token', resultat.data.token)


        })
      .catch((err)=>{
        console.log(err)
      })
    // navigate("/LandingPage");
  };
  return (
  
      <div className="w-full mt-12 bg-no-repeat bg-cover bg-center mr-12">
        <div >
          <div className="bg-white mt-12 w-full justify-center items-center ">
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
                <button class=" mt-6 w-3/6 h-12 text-xl bg-first hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                  LogIn
                </button>
                </div>
                <div class="flex justify-center mt-6">
                <p > Dont have an account?  </p>
                <p className="text-first ml-2 font-semibold">Sign Up</p>
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
      </div>
  );
};

export default Login;
