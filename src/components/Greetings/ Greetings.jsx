import React from "react";

const Greetings = ({time,name = 'человек' }) =>{
  const getGreetingByTime = () =>{
    if (time >= '12' && time <= '18'){
      return 'Good afternoon!'
    }
  }

  return <p>{getGreetingByTime()}{name}</p>


}

export default Greetings