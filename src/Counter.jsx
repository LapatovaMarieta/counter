import { useState } from "react"
import './Counter.css'

export default function Counter () {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');

    function incrementBtnHandler () {
        setCounter(counter + 1);

        if (message) {
            setMessage('');
        }
    } 

    function decrementBtnHandler () {
        if (!counter) {
            setMessage('You should not go into negative numbers.') 
            return;
        }
        setCounter(counter - 1);
    } 

    function resetBtnHandler () {
        setCounter(0);

        if (message) {
            setMessage('');
        }
    }
    return (
        <div className="counter-container">
            <div className="counter-header">Counter</div>
            <div className="counter">{counter}</div>
            <div className="buttons">
                <button className="btn btn-increment" onClick={incrementBtnHandler}>Increase</button>
                <button className="btn btn-decrement" onClick={decrementBtnHandler}> Decrease</button>
                <button className="btn btn-reset" onClick={resetBtnHandler}>Reset</button>
            </div>
            <div>{message}</div>
        </div>
    )
}