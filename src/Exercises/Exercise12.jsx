import { useState } from "react";

function Counter (){
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
      return(

        <div>
            <h1>Count:{count}</h1>
        <button onClick={increment} >increment</button>
        <button onClick={decrement} disabled={count===0}>decrement</button>
        </div>
    )


    }
  
    export default Counter;
