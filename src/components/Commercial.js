import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Commercial() {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return <div>hello</div>;
}

export default Commercial;
