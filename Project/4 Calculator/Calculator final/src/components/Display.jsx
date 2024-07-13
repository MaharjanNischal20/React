import styles from "./Display.module.css";

const Display = ({ calVal }) => {
  return (
    <input type="text" className={styles.innerBox} value={calVal} readOnly />
  );
};
export default Display;
