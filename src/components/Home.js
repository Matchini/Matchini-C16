import React from "react";
import Login from "./Login";
import LandingPage from "./LandingPage";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history= useHistory();

  return (
    <div className="wrap-body">
      <div className="top flex items-center">
      <img onClick={() => history.push('/Landing')} className="h-12 w-20 ml-12" src="https://lh3.googleusercontent.com/proxy/qboTH2huBGtNTLBLo7QiMtGB37XP2cRAmxm7sB6t86pf53zGvDydsOUB3QAORfBXoJztCTb5fSaPci9snvUD8Us0WcYc-lGhCRFZxjiNLZXyUIkpUnTO2xZ5dkKrXYycUYUAu9_r-i_Iz_eeCxb-44ro1g"/>
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
