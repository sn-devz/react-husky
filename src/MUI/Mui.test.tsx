import { render, screen } from "../test-utils";
// import { AppProvider } from "../providers/app-provider";
import { MuiMode } from "./MuiMode";

describe("mui test" , () => {
    test("MuiMode", () => {
        render(<MuiMode/>
        // ,
        //  {
        //     wrapper: AppProvider
        // }
        )
        const elemnt = screen.getByRole("heading");
        expect(elemnt).toHaveTextContent("dark mode");
    })
})