import React from "react";
import Pub from "../assets/player3.png";

const Com = () => {
  return (
    <div>
      <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <img
                src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                alt="profilepic"
              />
            </div>
            <span className="pt-1 ml-2 font-bold text-sm">Kawarji</span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
        </div>
        <img className="w-full bg-cover" src={Pub} />
        <div className="px-3 pb-2">
          <div className="pt-2">
            <i className="far fa-heart cursor-pointer"></i>
            <span className="text-sm text-gray-400 font-medium">12 likes</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">Kawarji</span> Huge game
              tonight ! somewhere were missing the team , I wish him to come
            </div>
          </div>

          <div className="mb-2">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">With Matchini</span> Find your
              Teammate ! Avoid playing with missing players in your team
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Com;
