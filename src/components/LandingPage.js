import React from "react";
import Pub from "../assets/player.png";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Com from "./Com";
import Comm from "./Comm";
import Commm from "./Commm";

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
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-green mt-4 lg:mt-0"
            >
              Register
            </a>
            <a
              onClick={() => history.push("/Login")}
              href=""
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-green mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Comm />
        </div>
        <div>
          <Com />
        </div>
        <div>
          <Commm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
