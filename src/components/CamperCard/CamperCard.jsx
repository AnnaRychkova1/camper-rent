import { useState } from 'react';
import Iconsvg from '../Icon/Icon';
import css from './CamperCard.module.css';
import CamperModal from '../../modal/CamperModal';

const CamperCard = camper => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              <span>&#8364;{camper.price}.00 </span>
              <button type="button" className={css.addToFavorite}>
                <Iconsvg iconName="heart" className={css.iconHeart} />
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
          <li className={css.camperProsItem}>
            <Iconsvg iconName="people" className={css.iconCamperItems} />
            <span>
              {camper.adults} {camper.adults === 1 ? 'adult' : 'adults'}
            </span>
          </li>
          <li className={css.camperProsItem}>
            <Iconsvg iconName="automatic" className={css.iconCamperItems} />
            <span>
              {camper.transmission.charAt(0).toUpperCase() +
                camper.transmission.slice(1)}
            </span>
          </li>
          <li className={css.camperProsItem}>
            <Iconsvg iconName="petrol" className={css.iconCamperItems} />
            <span>
              {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
            </span>
          </li>
          {camper.details.kitchen > 0 && (
            <li className={css.camperProsItem}>
              <Iconsvg iconName="kitchen" className={css.iconCamperItems} />
              <span>Kitchen</span>
            </li>
          )}
          {camper.details.beds > 0 && (
            <li className={css.camperProsItem}>
              <Iconsvg iconName="bed" className={css.iconCamperItems} />
              <span>
                {camper.details.beds}{' '}
                {camper.details.beds === 1 ? 'bed' : 'beds'}
              </span>
            </li>
          )}
          {camper.details.airConditioner > 0 && (
            <li className={css.camperProsItem}>
              <Iconsvg
                iconName="airContainer"
                className={css.iconCamperItems}
              />
              <span>AC</span>
            </li>
          )}
        </ul>

        <button className={css.showMore} onClick={openModal}>
          Show more
        </button>
      </div>
      <CamperModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        camper={camper}
      />
    </>
  );
};

export default CamperCard;
