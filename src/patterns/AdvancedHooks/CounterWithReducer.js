import { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log(state.counte);
      return {
        ...state,
        counte: state.counte + action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counte: state.counte - action.payload,
      };
  }
}

export function CounterWithReducer({ initValue, step }) {
  const [state, dispatch] = useReducer(countReducer, {
    counte: initValue,
  });

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: step });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: step });
  };

  return (
    <div>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
      <p>Счетчик: {state.counte}</p>
    </div>
  );
}
