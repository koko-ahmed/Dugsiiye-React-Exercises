import { useEffect, useState } from "react";

function GreetingTitle() {
  const [Name, setName] = useState("");
  const [Greating, setGreating] = useState("Hello");
  useEffect(() => {
    if (Name === "") {
      document.title = "Welcome!";
    } else {
      document.title = `${Greating}, ${Name}`;
    }
  }, [Name, Greating]);
  return (
    <div>
      <h2>Enter your name:</h2>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Choose a Greating:</h2>
      <input
        type="text"
        value={Greating}
        onChange={(e) => setGreating(e.target.value)}
      />
    </div>
  );
}
export default GreetingTitle;
