import { useState } from "react";

const Buton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <button onClick={toggle}>
        Turn {isOn ? "Off" : "On"}
      </button>

      <p>The Button is {isOn ? "On" : "Off"}</p>
    </>
  );
};

export default Buton;