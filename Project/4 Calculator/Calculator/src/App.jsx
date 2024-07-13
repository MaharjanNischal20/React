import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  let [buttons, setButtons] = useState([]);

  const onkeyDown = (event) => {
    if (event.key === "Enter") {
      let newbuttons = [...buttons, event.target.value];
      setButtons(newbuttons);
    }
  };
  const buttonOnClick = (items, event) => {
    if (event.key === "Enter") {
      let newbuttons = [...buttons, items];
      setButtons(newbuttons);
    }
  };

  return (
    <div className={styles.outerBox}>
      <Display handleronkeyDown={onkeyDown} />
      <ButtonContainer
        buttons={buttons}
        bought={buttons.includes(buttons)}
        buttonOnClick={(event) => buttonOnClick(buttons, event)}
      />
    </div>
  );
}

export default App;
