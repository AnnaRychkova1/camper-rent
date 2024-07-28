import { useState } from 'react';

import css from './CamperModal.module.css';

import ModalWindow from '../../modal/ModalWindow';
import Iconsvg from '../Icon/Icon';
import BookingForm from '../BookingForm/BookingForm';
import AdvantagesList from '../AdvantagesList/AdvantagesList';
import CamperTable from '../CamperTable/CamperTable';
import ReviewsList from '../ReviewsList/ReviewsList';
import CamperImage from '../CamperImage/CamperImage';

const CamperModal = ({ camper }) => {
  const [activeTab, setActiveTab] = useState('Features');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = idx => {
    setImageIndex(idx);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTabChange = tabName => {
    setActiveTab(tabName);
  };

  return (
    <div className={css.modalBody}>
      <div className={css.modalMainInfo}>
        <h2 className={css.modalTitle}>{camper.name}</h2>
        <div className={css.modalMainDescr}>
          <Iconsvg iconName="rating" className={css.iconRating} />
          <p className={css.modalRating}>{camper.rating}</p>
          <p className={css.modalReviews}>
            &#x2768;{camper.reviews.length} Reviews&#x2769;
          </p>
          <Iconsvg iconName="mapPin" className={css.iconMap} />
          <p>{camper.location}</p>
        </div>
        <p className={css.modalPrice}>&#8364;{camper.price.toFixed(2)}</p>
      </div>

      <div className={css.modalInfo}>
        <ul className={css.imgContainer}>
          {camper.gallery.map((image, idx) => (
            <li key={idx}>
              <img
                src={image}
                alt={camper.name}
                className={css.camperImg}
                onClick={() => openModal(idx)}
              />
            </li>
          ))}
        </ul>
        <div className={css.modalDescription}>{camper.description}</div>
        <div className={css.buttonWrapper}>
          <button
            type="button"
            onClick={() => handleTabChange('Features')}
            className={
              activeTab === 'Features' ? css.activeTab : css.buttonAddInfo
            }
          >
            Features
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('Reviews')}
            className={
              activeTab === 'Reviews' ? css.activeTab : css.buttonAddInfo
            }
          >
            Reviews
          </button>
        </div>
        <div
          className={
            activeTab === 'Features' ? css.activeContainer : css.hidden
          }
        >
          <div className={css.featuresInfo}>
            <AdvantagesList camper={camper} />
            <h3 className={css.featuresTitle}>Vehicle details</h3>
            <CamperTable camper={camper} />
          </div>
          <BookingForm />
        </div>
        <div
          className={activeTab === 'Reviews' ? css.activeContainer : css.hidden}
        >
          <div className={css.reviewsInfo}>
            <ReviewsList reviews={camper.reviews} />
          </div>
          <BookingForm />
        </div>
      </div>
      <ModalWindow isOpen={modalIsOpen} closeModal={closeModal}>
        <CamperImage images={camper.gallery} imageIndex={imageIndex} />
      </ModalWindow>
    </div>
  );
};

export default CamperModal;
