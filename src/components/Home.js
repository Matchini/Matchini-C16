import React from "react";
const Home = () => {
  // onClick={(event) => (window.location.href = "/")}

  return (
    <div className="wrap-body">
      <div className="top flex items-center">
        <div className="zerogrid">
          <div className="row">
            <div className="f-left">
              <span className="text-white">
                <i className="fa fa-map-marker"></i> RBK Tunisie C-16{" "}
              </span>
              <span className="text-white">
                <i className="fa fa-phone"></i> +216 52 779 617
              </span>
              <span className="text-white">
                <i className="fa fa-envelope"></i> Elyesbenkhoud377@gmail.com
              </span>
              <span className="text-white">
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
