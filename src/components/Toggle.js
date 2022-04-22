import { useState } from "react";
import React, {useState} from "react";

function Toggle() {
  const [toggle, setToggle] = useState('OFF')

  function handleClick() {
    toggle ? "OFF": "ON"
  }

  return <button onClick={handleClick}>OFF</button>;
}

export default Toggle;
