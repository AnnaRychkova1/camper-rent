import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favorite/slice';
import { selectFavorite } from '../../redux/favorite/selectors';
import css from './CamperCard.module.css';
import Iconsvg from '../Icon/Icon';

const CamperCard = ({ camper, handleOpenModal }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites.some(fav => fav._id === camper._id)) {
      setIsFavorite(true);
    }
  }, [favorites, camper._id]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper._id));
    } else {
      dispatch(addFavorite(camper));
    }
    setIsFavorite(!isFavorite);
  };

  const { adults, transmission, engine, details } = camper;

  const camperPros = [
    {
      label: adults === 1 ? 'adult' : 'adults',
      value: adults,
      iconName: 'people',
    },
    {
      label: '',
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      iconName: 'automatic',
    },
    {
      label: '',
      value: engine.charAt(0).toUpperCase() + engine.slice(1),
      iconName: 'petrol',
    },
    {
      label: '',
      value:
        details.kitchen > 0
          ? details.kitchen === 1
            ? 'Kitchen'
            : `${details.kitchen} kitchens`
          : '',
      iconName: 'kitchen',
    },
    {
      label: details.beds === 1 ? 'bed' : 'beds',
      value: details.beds,
      iconName: 'bed',
    },
    {
      label: '',
      value: details.airConditioner > 0 ? 'AC' : '',
      iconName: 'airContainer',
    },
  ];

  return (
    <>
      <img
        src={camper.gallery[0]}
        alt={camper.name}
        className={css.camperImage}
      />
      <div className={css.camperInfo}>
        <div>
          <div className={css.camperTitle}>
            <h3>{camper.name}</h3>
            <div className={css.camperTop}>
              <span>&#8364;{camper.price.toFixed(2)}</span>
              <button
                type="button"
                onClick={handleToggleFavorite}
                className={css.addToFavorite}
              >
                <Iconsvg
                  iconName="heart"
                  className={isFavorite ? css.iconHeartPressed : css.iconHeart}
                />
              </button>
            </div>
          </div>
          <div className={css.camperAddInfo}>
            <Iconsvg iconName="rating" className={css.iconRating} />
            <p className={css.camperRating}>{camper.rating}</p>
            <p className={css.camperReviews}>
              &#x2768;{camper.reviews.length} Reviews&#x2769;
            </p>
            <Iconsvg iconName="mapPin" className={css.iconMap} />
            <p>{camper.location}</p>
          </div>
        </div>

        <p className={css.camperDescr}>{camper.description}</p>

        <ul className={css.camperPros}>
          {camperPros.map(
            ({ label, value, iconName }) =>
              value && (
                <li
                  className={css.camperProsItem}
                  key={`${camper._id}-${iconName}`}
                >
                  <Iconsvg
                    className={css.iconCamperItems}
                    iconName={iconName}
                  />
                  {value} {label}
                </li>
              )
          )}
        </ul>

        <button
          className={css.showMore}
          onClick={() => handleOpenModal(camper._id)}
        >
          Show more
        </button>
      </div>
    </>
  );
};

export default CamperCard;
