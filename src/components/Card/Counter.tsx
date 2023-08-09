import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "../../store/counter"
import {RootState} from "../../store/rooteReducer"

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <button onClick={() => {
                    dispatch(increment())
                }}>Increment
                </button>
                <button onClick={() => {
                    dispatch(decrement())
                }}>Decrement
                </button>
            </div>
            <div>
                <p>Count: {count.counter}</p>
            </div>
        </>
    )

}
export default Counter;