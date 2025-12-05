import { useAppSelector } from '../../hooks/redux';
import styles from './ErrorMessage.module.css';

function ErrorMessage(): JSX.Element | null {
  const { error } = useAppSelector((state) => state.app);

  return (error)
    ? <div className={styles.errorMessage}>{error}</div>
    : null;

}

export default ErrorMessage;
