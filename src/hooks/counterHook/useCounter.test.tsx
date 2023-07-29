import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the intial count", () => {
    const { result } = renderHook(useCounter);
    const {
      current: { count },
    } = result;
    expect(count).toBe(0);
  });
  test("should except and render the intial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        intialCount: 10,
      },
    });
    const {
      current: { count },
    } = result;

    expect(count).toBe(10);
  });
  test("increment the count", () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.increment());
    const {
      current: { count },
    } = result;
    expect(count).toBe(1);
  });
  test("decrement the count", () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.decrement());
    const {
      current: { count },
    } = result;
    expect(count).toBe(-1);
  });
});
