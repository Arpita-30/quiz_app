import React, { useReducer, useState } from 'react'


const initialState = {
    count: 0,

}


const reducer = (state, action) => {
    switch (action.type) {
        case "INC": {
            return { ...state, count: state.count + 1 }
        }
        case "DEC": {
            return { ...state, count: state.count - 1 }
        }

        case "ADD": {
            console.log(typeof action.payload);
            return { ...state, count: state.count + parseInt(action.payload) }
        }
        default:
            return state;
    }
}

//const store = createStore(combireReducers(reducer));

const New = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [input, setInput] = useState(0);

    //const dispatch = useDispatch();

    // const state = useSelector((rootState )=> rootState.reducer);


    console.log(state.count);


    const handleInc = () => {
        dispatch({ type: "INC" })
    }

    const handleDec = () => {
        dispatch({ type: "DEC" })
    }
    const handleAdd = () => {
        dispatch({ type: "ADD", payload: input })
    }
    const onInput = (e) => {
        const val = e.target.value;
        console.log(val);
        setInput(val);

    }
    return (
        <div>
            <input type="number" value={input} name="val" onChange={onInput} />
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
            <button onClick={handleAdd}>ADD</button>
            <h1>{state.count}</h1>
        </div>
    )

}
export default New