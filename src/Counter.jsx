import { useState } from "react";

const Counter = () => {
  // usestate is a hook that allows you to store state in a functional component
  let [counter, updateCounter] = useState(0);

  // let stateValue = stateSeAayiHuiValue[0];
  // const updateKarneWalaFunction = stateSeAayiHuiValue[1];

  return (
    <div className="flex items-center justify-center h-20 w-72 border-2 border-black rounded">
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => updateCounter(counter + 1)}
      >
        Increment
      </button>
      <p>Count: {counter}</p>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => updateCounter(counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
