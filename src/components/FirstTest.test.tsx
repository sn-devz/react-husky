import {render,screen} from '@testing-library/react'
import FirstTest from './firstTest'


test("our first test case", () => {
    render(<FirstTest/>)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})
test("with props", () => {
    render(<FirstTest name="abc"/>)
    const textElement = screen.getByText("Hello abc")
    expect(textElement).toBeInTheDocument()
    const btnText = screen.getByText("you need to hit")

    expect(btnText).toBeInTheDocument()

})

  
  
  
  
  
  