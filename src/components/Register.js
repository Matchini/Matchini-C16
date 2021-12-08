import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { GoogleLogin } from "react-google-login";

const Register = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const notify = () => toast("Ouuppss ! There is an Error");
  const notify2 = () => toast("Your Account created successfully");

  const onSubmit = (data) => {
    axios
      .post("https://matchini.herokuapp.com/register", data)
      .then((res) => {
        setTimeout(() => {
          notify2();
        }, 1000);
        history.push("/Login");
        reset();
      })
      .catch((err) => {
        console.log(err);
        notify();
      });
  };
  const responseGoogleSuccess = () => {
    history.push("/commercial");
  };
  const responseGoogleFail = () => {
    history.push("/");
  };

  return (
    <div class="w-full mt-12 bg-no-repeat bg-cover bg-center">
      <div>
        <svg
          onClick={() => history.goBack()}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
      <div>
        <div class="bg-white w-full justify-center items-center px-12">
          <div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Welcome to Matchini</h1>
                </div>
                <div className="my-5">
                  <label className="block text-md" htmlFor="email">
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
                  <label className="block text-md mb-2" htmlFor="email">
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
                  <label className="block text-md mb-2" htmlFor="email">
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
                  <label className="block text-md mb-2" htmlFor="password">
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
                  <label className="block text-md mb-2" htmlFor="email">
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
                <div className="flex justify-center">
                  <button className=" mt-4 w-2/5 h-12 text-xl bg-first hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                    Create Account
                  </button>
                  <ToastContainer />
                </div>
                <div className="flex justify-center">
                  <p className="mt-8"> Already have an account? </p>
                  <a
                    onClick={() => history.push("/Login")}
                    className="text-first mt-8 ml-2 hover:text-yellow-300 underline font-semibold"
                  >
                    Log in
                  </a>
                </div>
                <div className="flex justify-center mt-4">
                  <p className="text-lg font-semibold">OR</p>
                </div>
                <div className="flex mt-2 space-x-2 justify-center text-white py-2 rounded-md transition duration-100">
                  <GoogleLogin
                    clientId="106433618456-ui38ga6ajm39d35punapvavkk46fsmjc.apps.googleusercontent.com"
                    buttonText="Login with your google account"
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFail}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
