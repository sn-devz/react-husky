import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("Counter Two", () => {
  test("Intial Render of the componet", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("CounterTwo");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleDecrement={incrementHandler}
        handleIncrement={decrementHandler}
      />
    );
    const incrementBtn = screen.getByRole("button", {name:'Increment'})
    const decrementtBtn = screen.getByRole("button", {name:'Decrement'})
    userEvent.click(incrementBtn);
    userEvent.click(decrementtBtn);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);


  });
});
