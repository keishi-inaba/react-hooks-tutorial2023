import { useEffect, useState, useContext, useRef, useReducer, useMemo, useCallback } from 'react';
import './App.css'
import KiiContext from './main';
import SomeChild from './SomeChild';
import useLocalStorage from './useLocalStorage';

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const kiiInfo = useContext(KiiContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  // useState
  const handleClick = () => {
    // count++;
    // console.log(count);
    setCount(count + 1);
  }

  // useEffect
  useEffect(() => {
    console.log("hello hooks");
  }, [count]);

  // useRef
  const handleRef = () => {
    console.log(ref.current.value);
  };

  // useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // const square = () => {
  //   let i = 0;
  //   while(i < 2) {
  //     i++;
  //   }
  //   return count02 * count02;
  // };

  const square = useMemo(() => {
    let i = 0;
    while(i < 2000000) {
      i++;
    }
    console.log("クリックされました");
    return count02 * count02;
  }, [count02]);

  // useCallback
  const [counter, setCounter] = useState(0);

  // const showCount = () => {
  //   alert("これは重い処理です");
  // }

  const showCount = useCallback(() => {
    alert("これは重い処理です");
  }, [counter]);

  // customHook
  const [age, setAge] = useLocalStorage("age", 42);

  return (
    <>
      <div>
        <h1>useState, useEffect</h1>
        <button onClick={handleClick}>＋</button>
        <p>{count}</p>

        <hr />
        <h1>useContext</h1>
        <p>{kiiInfo.name}</p>
        <p>{kiiInfo.age}</p>

        <hr />
        <h1>useRef</h1>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>Useref</button>

        <hr />
        <h1>useReducer</h1>
        <p>Count: {state}</p>
        <button onClick={() => dispatch({type: "decrement"})}>ー</button>
        <button onClick={() => dispatch({type: "increment"})}>＋</button>

        <hr />
        <h1>useMemo</h1>
        <div>Count1: {count01}</div>
        <div>Count2: {count02}</div>
        <div>Result: {square}</div>
        <button onClick={() => setCount01(count01 + 1)}>＋</button>
        <button onClick={() => setCount02(count02 + 1)}>＋</button>

        <hr />
        <h1>useCallback</h1>
        <SomeChild showCount={showCount} />

        <hr />
        <h1>customHook</h1>
        <p>{age}</p>
        <button onClick={() => setAge(50)}>年齢をセット</button>
      </div>
    </>
  )
}

export default App
