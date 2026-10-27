import { useEffect, useState } from "react";

function MouseTracker() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>Mouse X = {mouse.x}</p>
      <p>Mouse Y = {mouse.y}</p>
    </div>
  );
}

export default MouseTracker;