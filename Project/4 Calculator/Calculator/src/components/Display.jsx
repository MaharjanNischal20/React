import styles from "./Display.module.css";

const Display = ({ handleronkeyDown }) => {
  return (
    <input
      type="text"
      className={styles.innerBox}
      onKeyDown={handleronkeyDown}
    />
  );
};
export default Display;
