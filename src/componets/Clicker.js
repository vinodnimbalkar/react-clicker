import React, { useState } from "react";
import '../style/clicker.css';

const Clicker = () => {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let resetCount = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <div className="clicker border border-secondary rounded">
        <div className="clicker-display d-flex align-items-center bg-light text-secondary">
          <div className="mx-auto display-1">{count}</div>
        </div>
        <div className="clicker-button-panel d-flex flex-row">
          <button
            className="btn btn-success w-100"
            onClick={incrementCount}
          >
            <i className="fas fa-plus fa-2x"></i>
          </button>
          <button className="btn btn-warning w-100" onClick={resetCount}>
            <i className="fa fa-sync-alt fa-2x"></i>            
          </button>
          <button
            className="btn btn-danger w-100"
            onClick={decrementCount}
          >
            <i className="fas fa-minus fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clicker;
