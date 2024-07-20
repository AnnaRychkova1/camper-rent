import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import FavoriteCamper from '../../components/FavoriteCamper/FavoriteCamper';
import { selectError, selectIsLoading } from '../../redux/camper/selectors';
import css from '../Catalog/Catalog.module.css';
import styles from './Favorites.module.css';
import { Link } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { selectCampers } from '../../redux/camper/selectors';

const getFavoritesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favorites')) || [];
};

const Favorites = () => {
  const adverts = useSelector(selectCampers);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteIds = getFavoritesFromLocalStorage();
    const favoriteCampers = adverts.filter(camper =>
      favoriteIds.includes(camper._id)
    );
    setFavorites(favoriteCampers);
  }, [adverts]);

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
              <FavoriteCamper camper={camper} />
            </li>
          ))}
        </ul>
        {favorites.length === 0 && (
          <>
            <p className={styles.noFavorites}>
              You have no favorites yet. Browse the catalog to find campers you
              love!
            </p>
            <img
              className={styles.imgFavorite}
              src="../../assets/camper.png"
              alt="Camper"
              width={320}
              height={320}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Favorites;
