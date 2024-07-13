import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ buttons, bought, buttonOnClick }) => {
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((item) => (
        <button
          key={item}
          onClick={() => buttonOnClick(item)}
          className={`${styles.button} btn btn-info ${bought && "active"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
