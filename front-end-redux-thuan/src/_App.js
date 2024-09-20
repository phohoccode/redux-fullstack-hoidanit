import { increaseCounter, decreaseCounter } from "./action/actions";
import { connect, useSelector, useDispatch } from "react-redux";

function App(props) {
    const dispatch = useDispatch()
    const newCount = useSelector((state) => state.counter.count)

    const handleIncrease = () => {
        dispatch(increaseCounter())
    }

    const handleDecrease = () => {
        dispatch(decreaseCounter())
    }

    return (
        <div className="App">
            {/* <div>Count: {props.count}</div> */}
            <div>Count: {newCount}</div>

            {/* <button onClick={() => props.increaseCounter()}>Increase Count</button>
            <button onClick={() => props.decreaseCounter()}>Decrease Count</button> */}
            <button onClick={() => handleIncrease()}>Increase Count</button>
            <button onClick={() => handleDecrease()}>Decrease Count</button>
        </div>
    );
}

// const mapStateToProps = state => {
//     return {
//         count: state.counter.count,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increaseCounter: () => dispatch(increaseCounter()),

//         decreaseCounter: () => dispatch(decreaseCounter()),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App
