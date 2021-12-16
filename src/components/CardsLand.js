import React from "react";
import Pub from "../assets/player.png";
import Pubb from "../assets/player2.png";
import Pubbb from "../assets/player3.png";
import { useHistory } from "react-router-dom";

const CardsLand = () => {
  const history = useHistory();

  return (
    <div>
      <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 roundedLg overflow-hidden">
                <img
                  className=" w-full object-cover object-center"
                  src={Pub}
                  alt="blog"
                />
                <div className="p-6 hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-green-700 mb-1">
                    Monastir Nov 29, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Striker & Keeper
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Guys ! We are missing a striker and a goal Keeper by today 8
                    AM : Friendly Toornament
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      className=" cursor-pointer text-green-700 inline-flex items-center md:mb-2 lg:mb-0"
                      onClick={() => history.push("/Register")}
                    >
                      Find ()
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="cursor-not-allowed  mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      12K.2
                    </span>
                    <span className="cursor-not-allowed inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      288
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 roundedLg overflow-hidden">
                <img
                  className=" w-full object-cover object-center"
                  src={Pubb}
                  alt="blog"
                />
                <div className="p-6 hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-green-700 mb-1">
                    Tunis , Ariana Dec 05, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">Midfielder</h1>
                  <p className="leading-relaxed mb-3">Midfielder is missing</p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      className="cursor-pointer text-green-700 inline-flex items-center md:mb-2 lg:mb-0"
                      onClick={() => history.push("/Register")}
                    >
                      Find ()
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="cursor-not-allowed  mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      485K.9
                    </span>
                    <span className="cursor-not-allowed inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      662
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 roundedLg overflow-hidden">
                <img
                  className=" w-full object-cover object-center"
                  src={Pubbb}
                  alt="blog"
                />
                <div className="p-6 hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-green-700 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">
                    Lakes are silent
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                  <div className="flex items-center flex-wrap cursor-pointer ">
                    <a
                      className="cursor-pointer text-green-700 inline-flex items-center md:mb-2 lg:mb-0 "
                      onClick={() => history.push("/Register")}
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="cursor-not-allowed  text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1 "
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      784K
                    </span>
                    <span className="cursor-not-allowed text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      315
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsLand;
