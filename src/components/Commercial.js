import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";

function Commercial() {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default Commercial;
