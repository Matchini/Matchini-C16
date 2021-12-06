import React from "react";
import Pub from "../assets/player.png";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

function LandingPage() {
  const history = useHistory();
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-black-500 p-6">
        <div>
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-black">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              onClick={() => history.push("/Register")}
              href=""
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-green mt-4 lg:mt-0"
            >
              Register
            </a>
            <a
              onClick={() => history.push("/Login")}
              href=""
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-green mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      <div>
        <div>commercial text kima fel figma first link</div>
        <div>
          <img src={Pub} alt="pub" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
