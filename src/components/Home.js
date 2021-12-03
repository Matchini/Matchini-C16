import React from "react";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  return (
    <div className="wrap-body">
      <div className="top">
        <div className="zerogrid">
          <div className="row">
            <div className="f-left">
              <span className="text-white">
                <i className="fa fa-map-marker"></i> RBK Tunisie C-16{" "}
              </span>
              <span  className="text-white">
                <i className="fa fa-phone"></i> +216 52 779 617
              </span>
              <span  className="text-white">
                <i className="fa fa-envelope"></i> Elyesbenkhoud377@gmail.com
              </span>
              <span  className="text-white">
                {" "}
                <i className="fas fa-futbol"> </i> Don't walk through life just
                playing football.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
