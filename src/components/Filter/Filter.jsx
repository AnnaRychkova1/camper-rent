import { Formik, Form, Field, ErrorMessage } from 'formik';
import Iconsvg from '../Icon/Icon';
import css from './Filter.module.css';
import * as Yup from 'yup';

const Filter = () => {
  const initialValues = {
    location: '',
    equipment: [],
    vehicleType: '',
  };
  const validationSchema = Yup.object().shape({
    location: Yup.string()
      .min(3, 'Too short city name!')
      .max(58, 'Too long city name!'),
  });
  const handleSearch = (values, { resetForm }) => {
    resetForm();
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSearch}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.filterForm}>
          <div className={css.location}>
            <label htmlFor="location" className={css.label}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <Iconsvg iconName="mapPin" className={css.iconMap} />
              <Field
                type="text"
                id="location"
                name="location"
                className={css.locationInput}
                placeholder="City"
              />
              <ErrorMessage
                className={css.error}
                name="location"
                component="span"
              />
            </div>
          </div>

          <div className={css.filterSection}>
            <label htmlFor="vehicle" className={css.label}>
              Filters
            </label>
            <div className={css.filterEquipment}>
              <h3 className={css.filterTitle}>Vehicle equipment</h3>
              <ul className={css.filterList}>
                <li className={css.filterItem}>
                  <label>
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="airConditioner"
                      className={css.checkbox}
                      onChange={({ target: { checked, value } }) => {
                        if (checked) {
                          setFieldValue('equipment', [
                            ...values.equipment,
                            value,
                          ]);
                        } else {
                          setFieldValue(
                            'equipment',
                            values.equipment.filter(e => e !== value)
                          );
                        }
                      }}
                    />
                    <Iconsvg
                      iconName="airContainer"
                      className={css.iconFilter}
                    />
                    <span>AC</span>
                  </label>
                </li>
                <li className={css.filterItem}>
                  <label>
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="automatic"
                      className={css.checkbox}
                      onChange={({ target: { checked, value } }) => {
                        if (checked) {
                          setFieldValue('equipment', [
                            ...values.equipment,
                            value,
                          ]);
                        } else {
                          setFieldValue(
                            'equipment',
                            values.equipment.filter(e => e !== value)
                          );
                        }
                      }}
                    />
                    <Iconsvg iconName="automatic" className={css.iconFilter} />
                    <span>Automatic</span>
                  </label>
                </li>
                <li className={css.filterItem}>
                  <label>
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="kitchen"
                      className={css.checkbox}
                      onChange={({ target: { checked, value } }) => {
                        if (checked) {
                          setFieldValue('equipment', [
                            ...values.equipment,
                            value,
                          ]);
                        } else {
                          setFieldValue(
                            'equipment',
                            values.equipment.filter(e => e !== value)
                          );
                        }
                      }}
                    />
                    <Iconsvg iconName="kitchen" className={css.iconFilter} />
                    <span>Kitchen</span>
                  </label>
                </li>
                <li className={css.filterItem}>
                  <label>
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="TV"
                      className={css.checkbox}
                      onChange={({ target: { checked, value } }) => {
                        if (checked) {
                          setFieldValue('equipment', [
                            ...values.equipment,
                            value,
                          ]);
                        } else {
                          setFieldValue(
                            'equipment',
                            values.equipment.filter(e => e !== value)
                          );
                        }
                      }}
                    />
                    <Iconsvg iconName="TV" className={css.iconFilter} />
                    <span>TV</span>
                  </label>
                </li>
                <li className={css.filterItem}>
                  <label>
                    <Field
                      type="checkbox"
                      name="equipment"
                      value="shower"
                      className={css.checkbox}
                      onChange={({ target: { checked, value } }) => {
                        if (checked) {
                          setFieldValue('equipment', [
                            ...values.equipment,
                            value,
                          ]);
                        } else {
                          setFieldValue(
                            'equipment',
                            values.equipment.filter(e => e !== value)
                          );
                        }
                      }}
                    />
                    <Iconsvg iconName="shower" className={css.iconFilter} />
                    <span>Shower/WC</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className={css.filterSection}>
            <h3 className={css.filterTitle}>Vehicle type</h3>
            <ul className={css.filterList}>
              <li className={css.filterItem}>
                <label>
                  <Field
                    type="radio"
                    name="vehicleType"
                    value="panelTruck"
                    className={css.radio}
                  />
                  <Iconsvg
                    iconName="camperSmall"
                    className={css.iconFilterCamper}
                  />
                  <span>Van</span>
                </label>
              </li>
              <li className={css.filterItem}>
                <label>
                  <Field
                    type="radio"
                    name="vehicleType"
                    value="fullyIntegrated"
                    className={css.radio}
                  />
                  <Iconsvg
                    iconName="camperMedium"
                    className={css.iconFilterCamper}
                  />
                  <span>Fully Integrated</span>
                </label>
              </li>
              <li className={css.filterItem}>
                <label>
                  <Field
                    type="radio"
                    name="vehicleType"
                    value="alcove"
                    className={css.radio}
                  />
                  <Iconsvg
                    iconName="camperBig"
                    className={css.iconFilterCamper}
                  />
                  <span>Alcove</span>
                </label>
              </li>
            </ul>
          </div>

          <button type="submit" className={css.searchButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;
