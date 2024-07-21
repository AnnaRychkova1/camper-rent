import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <DocumentTitle>Not found</DocumentTitle>
      <p>&#x261D;Sorry, the page you visited does not exist!</p>
      <button className={css.backHome}>
        <Link to="/">Back home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
