import { useReducer } from "react";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step < 3 ? state.step + 1 : state.step,
      };

    case "PREV_STEP":
      return {
        ...state,
        step: state.step > 1 ? state.step - 1 : state.step,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};

const Exercise14 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");

    dispatch({
      type: "RESET_FORM",
    });
  };

  return (
    <div>
      <h1>Multi Step Form</h1>

      <p>Step {state.step} of 3</p>

      {state.step === 1 && (
        <div>
          <h2>Profile</h2>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={state.lastName}
            onChange={handleChange}
          />

          <br />
          <br />

          <button
            onClick={() =>
              dispatch({
                type: "NEXT_STEP",
              })
            }
          >
            Next
          </button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h2>Contact</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={state.phone}
            onChange={handleChange}
          />

          <br />
          <br />

          <button
            onClick={() =>
              dispatch({
                type: "PREV_STEP",
              })
            }
          >
            Previous
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "NEXT_STEP",
              })
            }
          >
            Next
          </button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h2>Review</h2>

          <p>First Name: {state.firstName}</p>
          <p>Last Name: {state.lastName}</p>
          <p>Email: {state.email}</p>
          <p>Phone: {state.phone}</p>

          <button
            onClick={() =>
              dispatch({
                type: "PREV_STEP",
              })
            }
          >
            Previous
          </button>

          <button onClick={handleSubmit}>Confirm</button>
        </div>
      )}

      <br />

      <button
        onClick={() =>
          dispatch({
            type: "RESET_FORM",
          })
        }
      >
        Cancel / Reset
      </button>
    </div>
  );
};

export default Exercise14;