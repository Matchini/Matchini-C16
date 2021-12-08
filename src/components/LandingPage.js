import React from "react";
import Pub from "../assets/player.png";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

function LandingPage() {
  const history = useHistory();
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black-500 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-green"
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

      <div className="grid grid-cols-5 flex grid-rows-1 items-center ">
        <div className="col-start-4 col-end-6 row-start-2 row-end-2">
          <img src={Pub} alt="pub" />
        </div>
        <div className="col-start-1 col-end-4 row-start-2 row-end-2 ml-8 mr-8 mt-8">
          commercial text kima fel figma first link
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
