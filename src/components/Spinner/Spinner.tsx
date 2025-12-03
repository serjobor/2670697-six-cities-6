import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.spinnerContainer}>
      <div className={styles.spinnerOuterCircle}></div>
      <div className={styles.spinnerInnerCircle}></div>
    </div>
    <p className={styles.spinnerText}>Loading...</p>
  </div>
);

export default Spinner;
