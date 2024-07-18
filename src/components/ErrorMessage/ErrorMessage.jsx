// import Iconsvg from '../Icon/Icon';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ message = '' }) => {
  return (
    <div className={css.errorMessage}>
      {/* <Iconsvg iconName="error" className={css.iconError} /> */}
      <p>
        {' '}
        &#x261D;
        {message.length > 0
          ? message
          : 'Whoops, something went wrong! Please try reloading this page!'}
      </p>
    </div>
  );
};

export default ErrorMessage;
