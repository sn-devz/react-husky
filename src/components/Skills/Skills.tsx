import React from "react";
import { ISkills } from "./skills.types";

export const Skills = (props: ISkills) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [count, setCount] = React.useState(0);
  return (
    <>
      <ul>
        {skills.map((item: string) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <div>Yahooooooo!</div>
      <span data-testid={"incText"}>{count}</span>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
