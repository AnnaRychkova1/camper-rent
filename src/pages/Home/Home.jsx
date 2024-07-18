import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from './Home.module.css';

const Home = () => {
  return (
    <section>
      <DocumentTitle>CampersRent</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to CamperRent</h1>
        <h2 className={css.subtitle}>
          Book a camper today and start your adventure!
        </h2>
        <Link className={css.bookLink} to="/catalog">
          Book
        </Link>
      </div>
    </section>
  );
};

export default Home;
