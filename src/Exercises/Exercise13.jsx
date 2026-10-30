import { useReducer } from "react";

const initialState = {
  countA: 0,
  countB: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment-A":
      return {
        ...state,
        countA: state.countA + 1,
      };

    case "decrement-A":
      return {
        ...state,
        countA: state.countA > 0 ? state.countA - 1 : 0,
      };

    case "increment-B":
      return {
        ...state,
        countB: state.countB + 1,
      };

    case "decrement-B":
      return {
        ...state,
        countB: state.countB > 0 ? state.countB - 1 : 0,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Double Counter</h2>

      <div>
        <h2>Counter A: {state.countA}</h2>

        <button onClick={() => dispatch({ type: "increment-A" })}>
          A+
        </button>

        <button
          onClick={() => dispatch({ type: "decrement-A" })}
          disabled={state.countA === 0}
        >
          A-
        </button>
      </div>

      <div>
        <h2>Counter B: {state.countB}</h2>

        <button onClick={() => dispatch({ type: "increment-B" })}>
          B+
        </button>

        <button
          onClick={() => dispatch({ type: "decrement-B" })}
          disabled={state.countB === 0}
        >
          B-
        </button>
      </div>
      <br />

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset both
      </button>
    </div>
  );
}

export default CounterWithReducer;