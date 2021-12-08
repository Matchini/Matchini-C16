import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import { GoogleLogin } from "react-google-login";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const notify = () => toast("Ouuppss ! There is an Error");
  const notify2 = () => toast("Congratulation : you successfully logged in");

  const onSubmit = (data) => {
    axios
      .post("https://matchini.herokuapp.com/login", data)
      .then((res) => {
        setTimeout(() => {
          notify2();
        }, 1000);

        localStorage.setItem("token", res.data.token);
        history.push({ pathname: ["/commercial"], state: { query: res.data } });
      })
      .catch((err) => {
        console.log(err);
        notify();
      });
  };

  const responseGoogleSuccess = () => {
    // axios({
    //   method: "POST",
    //   url: "http://localhost:3000/googlelogin",
    //   data: { tokenId: response.tokenId },
    // })
    //   .then((res) => {
    //     console.log(res, "done wokring login google");
    //   })
    //   .catch((err) => {
    //     console.log(err, "errrr");
    //   });
    history.push("/commercial");
  };
  const responseGoogleFail = () => {
    history.push("/");
  };
  return (
    <div className="w-full mt-12 bg-no-repeat bg-cover bg-center">
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
        <div className="bg-white mt-12 w-full justify-center items-center px-12">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <span className="text-2xl font-bold">Welcome back</span>
              </div>
              <div className="my-8">
                <label className="block text-md" htmlFor="email">
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
                <label className="block text-md" htmlFor="password">
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
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className=" mt-6 w-3/6 h-12 text-xl bg-first hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                  >
                    LogIn
                  </button>
                </div>
                <div className="flex justify-center mt-6">
                  <p> Dont have an account? </p>
                  <a
                    onClick={() => history.push("/Register")}
                    className="text-first ml-2 hover:text-yellow-300 underline font-semibold"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="flex justify-center mt-6">
                  <p className="text-lg font-semibold">OR</p>
                </div>
                <div className="flex space-x-2 mt-6 h-12 justify-center items-center text-white py-2 rounded-md transition ">
                  <GoogleLogin
                    className="bg-transparent"
                    clientId="106433618456-ui38ga6ajm39d35punapvavkk46fsmjc.apps.googleusercontent.com"
                    buttonText="Login with your google account"
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFail}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                <ToastContainer />
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
