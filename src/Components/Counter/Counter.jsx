import React, { useState } from "react";
import { CounterWrp } from "./Counter-styles";
import { Button } from "../CustomButton/CustomButton-styles";
const Counter = () => {
  const [count, setCount] = useState(1);

  const incrementCounter = (event) => {
    //
    event.stopPropagation();
    setCount(count + 1);
  };

  const decrementCounter = (event) => {
    event.stopPropagation();

    setCount(Math.max(1, count - 1));
  };
  //COMPROVANT SI EL VALOR PREVI ÉS >1, SI ÉS 1 NO DECREMENTA
  // const decrementCounter = () =>
  //   setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));

  return (
    <CounterWrp>
      <Button variant="counter" onClick={decrementCounter}>
        -
      </Button>
      <p>{count}</p>
      <Button variant="counter" onClick={incrementCounter}>
        +
      </Button>
    </CounterWrp>
  );
};

export default Counter;
