import React from "react";
import { useModal } from "react-hooks-use-modal";
import Profile from "./Profile";
const Nav = () => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-green-700">
      <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span class="font-semibold text-xl tracking-tight">LOGO</span>
        </div>
        <div class="block lg:hidden ">
          <button
            id="nav"
            class="flex items-center px-3 py-2 border-2 rounded text-green-700 border-green-700 hover:text-green-700 hover:border-green-700"
          >
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
      </div>

      <div class="menu w-full lg:block flex-grow  lg:items-center lg:w-auto lg:px-3 px-8">
        <div class="text-md font-bold text-green-700 lg:flex-grow">
          <a
            href="#responsive-header"
            class=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
          >
            Products
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
          >
            Score
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
          >
            About
          </a>
          
        </div>
      </div>
      <div>
        <button onClick={open}>Profile here</button>

        <Modal >
          <Profile close={close} />
        </Modal>
      </div>
    </nav>
  );
};

export default Nav;
