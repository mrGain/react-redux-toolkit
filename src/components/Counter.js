import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
	const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter); // useSelector is a hook that allows you to extract data from the redux store state.
    const show = useSelector((state) => state.counter.showCounter)

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const increaseHandler = () => {
		dispatch(counterActions.increase(5))
	}
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
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
