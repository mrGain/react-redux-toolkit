import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter); // useSelector is a hook that allows you to extract data from the redux store state.
    const show = useSelector((state) => state.showCounter)

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};
	const increaseHandler = () => {
		dispatch({type: 'increase', amount: 5})
	}
	const decrementHandler = () => {
		dispatch({ type: "decrement" })
	};

	const toggleCounterHandler = () => {
		dispatch({ type: 'toggle' })
	};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            { show && <div className={classes.value}>{counter}</div> }
            <div>
                <button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main> 
    );
};

export default Counter;