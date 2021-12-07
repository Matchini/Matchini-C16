import React,{useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";

function Commercial() {
  const location = useLocation();
  const history = useHistory();

useEffect(() => {
  console.log(location.state)
  if(location.state){
    console.log(location.state.query)

  }
  else{
    history.push('/Login')
  }
}, [location])
  useEffect(() => {}, [location]);
  return <div>hello</div>;
}

export default Commercial;
