import React, { useContext, useState } from "react";
import "../styles/FormComponents.css";
import GlobalStore from "../context/context";
import TYPES from "../context/types";

const FormComponent = () => {
  const [arr, setArr] = useState("");
  const [error, setError] = useState(false);
  const { dispatch } = useContext(GlobalStore);

  const ChangeInputValueHandler = (e) => {
    setArr(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (arr.trim() === "") {
      setError(true);
      return;
    }
    const temp = arr
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);
    if (temp.length < 1) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    dispatch({ type: TYPES.SET_ARRAY, payload: temp });
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input
          className="input"
          type="text"
          placeholder="Enter comma separated item..."
          value={arr}
          onChange={ChangeInputValueHandler}
        />
        <button type="submit" className="btn">
          View Tree
        </button>
      </form>
      <div className="error-container">
        {error && <span className="error">Please Add valid input</span>}
      </div>
    </>
  );
};

export default FormComponent;
