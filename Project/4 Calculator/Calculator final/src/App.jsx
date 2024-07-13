import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const buttonOnClick = (buttonPressed) => {
    if (buttonPressed === "C") {
      setCalVal("");
    } else if (buttonPressed === "=") {
      setCalVal(eval(calVal));
    } else {
      setCalVal(calVal + buttonPressed);
    }
  };

  return (
    <div className={styles.outerBox}>
      <Display calVal={calVal} />
      <ButtonContainer buttonOnClick={buttonOnClick} />
    </div>
  );
}

export default App;
