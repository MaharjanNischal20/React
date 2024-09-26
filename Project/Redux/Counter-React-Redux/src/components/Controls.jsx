import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addHandler = () => {
    dispatch({
      type: "ADD",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const subtractHandler = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const privacyHandler = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
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
          class="btn btn-success"
          onClick={decrementHandler}
        >
          -1
        </button>

        <button type="button" class="btn btn-danger" onClick={privacyHandler}>
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
        <button type="button" class="btn btn-warning" onClick={subtractHandler}>
          Subtract
        </button>
      </div>
    </div>
  );
}
