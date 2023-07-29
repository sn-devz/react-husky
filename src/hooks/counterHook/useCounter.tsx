import { useState } from "react"
import { IUseCounter } from "./useCounter.typs";


export const useCounter = ({intialCount = 0}: IUseCounter ={}) => {
    const [count, setCount] = useState(intialCount);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return {count, increment, decrement}
}