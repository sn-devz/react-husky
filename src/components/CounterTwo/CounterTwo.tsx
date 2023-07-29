import React from "react";
import { ICounterTwo } from "./CounterTwo.typs";

export const CounterTwo = (props: ICounterTwo) => {
  return (
    <div>
      <h1>CounterTwo</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};
