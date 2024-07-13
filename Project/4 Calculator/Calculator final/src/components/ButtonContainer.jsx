import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ buttonOnClick }) => {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((item) => (
        <button
          key={item}
          onClick={() =>
            buttonOnClick(item)
          } /*anonymous function le item ma bhako data pathaideko */
          className={`${styles.button} btn btn-info active"`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
