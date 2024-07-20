# :blue_car:Camper Rent Application

## :dart:Overview

This project is created as part of a technical assignment for a company. <br />
This is an application for a company that provides camper rentals.

The application consists of three main pages:

- `Home Page:` General description of the company's services.
- `Catalog Page:` Catalog of campers with filtering options by location,
  equipment, and type.
- `Favorites Page:` List of user-added favorite ads.

## :star:Features

- Ad Card: Users can add/remove ads to/from favorites and view detailed camper
  information in a modal.
- Pagination: Displays 4 ads per page, with a "Load more" button for additional
  ads.
- Persistent Favorites: Favorites are saved in local storage to persist across
  page refreshes.
- Filtering: Users can filter campers by location, equipment, and type.

## :computer:Technical Stack:

<br />
<br />

**:large_blue_diamond:Front-end**<br />

<p>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
</a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
</a> 
<a href="https://redux.js.org" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
</a> 
<a href="https://reactrouter.com" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" alt="react-router" width="40" height="40" />
</a>
</p>
<br />
<br />

**:large_blue_diamond:Back-end**<br />

<a href="https://mockapi.io" target="_blank" rel="noreferrer">MockAPI</a> for
development

<br />
<br />

**:large_blue_diamond:Libraries and Tools:**<br />

- Forms and Validation:
  <a href="https://formik.org" target="_blank" rel="noreferrer">Formik</a> and
  <a href="https://github.com/jquense/yup" target="_blank" rel="noreferrer">Yup</a>

```
 const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    bookingDate: Yup.date()
      .required('Booking date is required')
      .min(new Date(), 'Booking date must be in the future'),
    comment: Yup.string().max(500, 'Comment can contain up to 500 characters'),
  });

```

- Requests:
  <a href="https://axios-http.com" target="_blank" rel="noreferrer">Axios</a>

  ```
  import axios from 'axios';

  const instance = axios.create({
  baseURL: 'https://669908cb2069c438cd711199.mockapi.io',
  });

  const requestGetCampers = async () => {
  const { data } = await instance.get('/adverts');
  return data;
  };

  export { requestGetCampers };

  ```

- Modals:
  <a href="https://github.com/reactjs/react-modal" target="_blank" rel="noreferrer">react-modal</a>

- Date Picker:
  <a href="https://reactdatepicker.com" target="_blank" rel="noreferrer">react-datepicker</a>

  ```
         <li className={`${css.formGroup} ${css.datePickerGroup}`}>
              <label htmlFor="bookingDate"></label>

              <DatePicker
                ref={datePickerRef}
                className={`${css.field} ${css.datePicker}`}
                name="bookingDate"
                type="date"
                selected={values.bookingDate}
                onChange={date => setFieldValue('bookingDate', date)}
                placeholderText="Booking date"
              />

              <button
                type="button"
                className={css.buttonCalendar}
                onClick={handleCalendarClick}
              >
                <Iconsvg className={css.iconCalendar} iconName="calendar" />
              </button>
              <ErrorMessage
                className={css.error}
                name="bookingDate"
                component="span"
              />
            </li>
  ```

- Loading Spinner:
  <a href="https://mhnpd.github.io/react-loader-spinner/" target="_blank" rel="noreferrer">react-loader-spinner</a>

  ![Spinner Image](src/assets/readme-gallery/spinner.png)

- Styling: Custom
  <a href="https://www.w3schools.com/css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a>
  and
  <a href="https://github.com/sindresorhus/modern-normalize" target="_blank" rel="noreferrer">modern-normalize</a>
  <br /> <br />

**:large_blue_diamond:Utilites**<br />

<a href="https://app.netlify.com" target="_blank" rel="noreferrer">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" alt="netlify" width="40" height="40" />
</a>
<a href="https://www.figma.com/" target="_blank" rel="noreferrer">
<img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
</a>
<a href="https://postman.com" target="_blank" rel="noreferrer">
<img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
</a>

## :view:Gallery:

![Home Page](src/assets/readme-gallery/homePage.png)
![Favorites Page](src/assets/readme-gallery/favorites.png)
![Filters](src/assets/readme-gallery/filters.png)
![Validation](src/assets/readme-gallery/validation.png)
![Not Found Page](src/assets/readme-gallery/notFound.png)
![Modal & Features](src/assets/readme-gallery/modalFeatures.png)
![Modal & Reviews](src/assets/readme-gallery/modalReviews.png)
