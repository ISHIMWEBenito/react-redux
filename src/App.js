import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
import './App.css';

function App() {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  // const increment = () => {
  //   dispatch({ type: 'INC' });
  // };
  // const decrement = () => {
  //   dispatch({ type: 'DEC' });
  // };
  // const addBy = () => {
  //   dispatch({ type: 'ADD', payload: 10 });
  // };
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;

/*

BASIC TERMS

REDUX
A Complex State Management Tool, with a single store as CDS

REDUCERS

Manages the State and Returns the newly updated state.

ACTIONS

Actions have 2 properties type: which is a unique identifier and payload which has data

DISPATCH

Dispatch is used to send actions to update the data
*/
