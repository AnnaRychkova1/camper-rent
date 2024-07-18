import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './Favorites.module.css';

const Favorites = () => {
  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div className={css.container}>
        <p>Favorites</p>
      </div>
    </>
  );
};

export default Favorites;
