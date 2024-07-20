import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

const selectCampers = state => state.adverts.campers;
const selectIsLoading = state => state.adverts.loading;
const selectError = state => state.adverts.error;

const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    return campers.filter(camper => {
      const matchesLocation = filter.location
        ? camper.location.toLowerCase().includes(filter.location.toLowerCase())
        : true;
      const matchesForm = filter.form ? camper.form === filter.form : true;
      const matchesDetails = Object.keys(filter.details).every(
        detail => !filter.details[detail] || camper.details[detail]
      );

      //   console.log(filter.details);
      //   console.log(camper);
      //   console.log(filter.details.automatic);
      //   console.log(camper.transmission);
      const matchesTransmission = filter.details.automatic
        ? camper.transmission === 'automatic'
        : true;

      return (
        matchesLocation && matchesForm && matchesDetails && matchesTransmission
      );
    });
  }
);

export { selectIsLoading, selectError, selectFilteredCampers };
