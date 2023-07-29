import { screen, render } from "@testing-library/react";
import { Skills } from "./skills";
import userEvent from "@testing-library/user-event";

describe("Skills", () => {
  const skills = ["a", "b", "c"];
  // Show render successfully
  test("render the component", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  // render the list
  test("render the list for skills", () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skills.length);
  });
  // check the text start with and end with
  test("function", () => {
    render(<Skills skills={skills} />);
    const findDivTxt = screen.getByText(
      (i) => i.startsWith("Y") && i.endsWith("!")
    );
    expect(findDivTxt).toBeInTheDocument();
  });
  // render button
  test("render button", () => {
    render(<Skills skills={skills} />);
    const btn = screen.getByRole("button", {
      name: "Login",
    });
    expect(btn).toBeInTheDocument();
  });
  // when button is not required
  test("button is not required", () => {
    render(<Skills skills={skills} />);
    const btn = screen.queryByRole("button", { name: "Start Learning" });
    expect(btn).not.toBeInTheDocument();
  });

  // increment the text
  test("Increment Text", () => {
    render(<Skills skills={skills} />);
    const btn = screen.getByTestId("incText");
    expect(btn).toHaveTextContent("0");
  });
  
  // increment the text by 1
  test("render incremnet to plus 1", async () => {
    render(<Skills skills={skills} />);
    const text = screen.getByTestId("incText");
    expect(text).toHaveTextContent("0");
    const btn = screen.getByRole("button", { name: "Counter" });
    await userEvent.click(btn);
    expect(text).toHaveTextContent("1");
  });
});
