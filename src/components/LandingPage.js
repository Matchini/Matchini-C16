import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

import CardsLand from "./CardsLand";

function LandingPage() {
  const history = useHistory();
  return (
    <div>
      <nav className="flex items-center justify-end flex-wrap bg-black-500 p-6">
        <div className=" flex flex-row-reverse ... w-full block flex-grow lg:flex lg:items-center lg:w-auto">
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

      <div>
        {/* <div class="p-4 sm:w-1/2 lg:w-1/3">
          <Comm />
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/3">
          <Com />
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/3">
          <Commm />
        </div> */}
        <CardsLand />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
