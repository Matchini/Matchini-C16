import React from "react";
const Home = () => {
  return (
    <div className="wrap-body ">
      <div className="top flex items-center">
        <div className="zerogrid">
          <div className="row">
            <div className="f-right">
              <span className="text-white">
                <i className="fa fa-map-marker"></i> All Tunisia
              </span>
              <span className="text-white">
                <i className="fa fa-phone"></i> +216 52 779 617
              </span>
              <span className="text-white">
                <i className="fa fa-envelope"></i> Matchini@gmail.com
              </span>
              <span className="text-white">
                {" "}
                <i className="fas fa-futbol"> </i> Don't walk through life just
                playing football
              </span>
            </div>
            <div>
              <div
                className="text-white "
                onClick={(event) => (window.location.href = "/")}
              >
                {" "}
                <i className="fa fa-home"> </i> Home page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
