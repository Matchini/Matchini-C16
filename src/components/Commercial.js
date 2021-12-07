import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CreatePost from "./Posts/CreatePost";

function Commercial() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state) {
    } else {
      history.push("/commercial");
    }
  }, [location]);
  useEffect(() => {}, [location]);
  return (
    <div>
      <CreatePost />
    </div>
  );
}

export default Commercial;
