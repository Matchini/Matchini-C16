<<<<<<< HEAD
import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import { Transition } from '@tailwindui/react'

function Commercial() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div>
       <div>
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-black">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-600"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
      <Sidebar show={isOpen}/>
      </Transition>
=======
import CreatePost from "./Posts/CreatePost";

function Commercial() {
  return (
    <div>
      <CreatePost />
>>>>>>> 3761a64c38ebe8fef881448805a175b0eb6dc91b
    </div>
  );
}

export default Commercial;
