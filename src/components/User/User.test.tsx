import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

describe("Counter Two", () => {
    test("Intial Render of the componet", () => {
      render(<Users  />);
      const textElement = screen.getByText("Users");
      expect(textElement).toBeInTheDocument();
    });

    test("render the user lisy", async() => {
        render(<Users  />);
        const textElement = await screen.findAllByRole("listitem");
        expect(textElement).toHaveLength(3);
      });
})