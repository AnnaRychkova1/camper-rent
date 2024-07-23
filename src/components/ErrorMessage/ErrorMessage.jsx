import css from './ErrorMessage.module.css';
import { Link } from 'react-router-dom';

const ErrorMessage = ({ message = '' }) => {
  return (
    <div className={css.errorMessage}>
      <p className={css.errorText}>
        &#x261D;
        {message.length > 0
          ? message
          : 'Whoops, something went wrong! Please try reloading this page!'}
      </p>
      <button className={css.backHome}>
        <Link to="/">Back home</Link>
      </button>
    </div>
  );
};

export default ErrorMessage;
