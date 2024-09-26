import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

export default function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const addHandler = () => {
    dispatch(counterAction.addition(inputElement.current.value));
    inputElement.current.value = "";
  };

  const subtractHandler = () => {
    dispatch(counterAction.subtraction(inputElement.current.value));
    inputElement.current.value = "";
  };

  const privacyHandler = () => {
    dispatch(privacyAction.toggle());
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={incrementHandler}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={decrementHandler}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={privacyHandler}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center input-space">
        <input
          type="text"
          placeholder="Enter Number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={addHandler}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={subtractHandler}
        >
          Subtract
        </button>
      </div>
    </div>
  );
}
