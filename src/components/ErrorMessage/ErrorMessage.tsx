import { useAppSelector } from '../../hooks/redux';
import { getAppError } from '../../store/selectors/appSelectors';
import styles from './ErrorMessage.module.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getAppError);

  return (error)
    ? <div className={styles.errorMessage}>{error}</div>
    : null;

}

export default ErrorMessage;
