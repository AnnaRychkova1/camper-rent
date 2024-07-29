import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Favorites.module.css';
import css from '../Catalog/Catalog.module.css';

import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import CamperCard from '../../components/CamperCard/CamperCard';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { selectError, selectIsLoading } from '../../redux/camper/selectors';
import { selectFavorite } from '../../redux/favorite/selectors';

const Favorites = () => {
  const favorites = useSelector(selectFavorite);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  console.log(favorites);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <div className={styles.containerFavorite}>
        <h2 className={styles.favoriteTitle}>Favorites</h2>
        {favorites.length > 0 && (
          <p className={styles.description}>
            Here you can find all your favorite campers that you have saved.
            Explore and enjoy your favorite choices!
          </p>
        )}
        <Link to="/catalog" className={styles.backToCatalog}>
          Back to Catalog
        </Link>
        <ul className={css.camperList}>
          {favorites.map(camper => (
            <li className={css.camperItem} key={camper._id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
        {favorites.length === 0 && (
          <>
            <p className={styles.noFavorites}>
              You have no favorites yet. Browse the catalog to find campers you
              love!
            </p>
            <div className={styles.imgFavorite}></div>
          </>
        )}
      </div>
    </>
  );
};

export default Favorites;
