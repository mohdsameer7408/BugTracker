import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBug, removeBug, resolveBug } from './actions';
import './App.css';

function App() {
  const [bug, setBug] = useState('');

  const bugs = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setBug(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBug(bug));
    setBug('');
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} id="bug" name="bug" value={bug} />
        <button>Add</button>
      </form>
      <hr />
      <div>
        {bugs.map(bug => (
          bug.resolved ?
            <strike style={{ display: "block" }} key={bug.id} onClick={() => dispatch(resolveBug(bug.id))}>
              "Id: {bug.id}, Description: {bug.description}, Resolved: {bug.resolved.toString() + '"  '}
              <button onClick={() => dispatch(removeBug(bug.id))}>-</button>
              <hr />
            </strike>
            :
            <span style={{ display: "block" }} key={bug.id} onClick={() => dispatch(resolveBug(bug.id))}>
              "Id: {bug.id}, Description: {bug.description}, Resolved: {bug.resolved.toString() + '"  '}
              <button onClick={() => dispatch(removeBug(bug.id))}>-</button>
              <hr />
            </span>
        ))}
      </div>
    </div>
  );
}

export default App;
