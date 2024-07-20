import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import Filter from '../../components/Filter/Filter';
import CamperCard from '../../components/CamperCard/CamperCard';
import Loader from '../../components/Loader/Loader';
import css from './Catalog.module.css';
import { getCampers } from '../../redux/camper/operations';
import {
  selectFilteredCampers,
  selectError,
  selectIsLoading,
} from '../../redux/camper/selectors';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectFilteredCampers);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const [visibleCards, setVisibleCards] = useState(4);

  // console.log(adverts);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCards(prevCount => prevCount + 4);
  };

  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <div className={css.container}>
        <Filter />
        <div className={css.campersContainer}>
          <ul className={css.camperList}>
            {adverts.slice(0, visibleCards).map(camper => (
              <li className={css.camperItem} key={camper._id}>
                <CamperCard {...camper} />
              </li>
            ))}
          </ul>
          {visibleCards < adverts.length && (
            <button className={css.loadMore} onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Catalog;
