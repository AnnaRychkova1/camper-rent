import { Link } from 'react-router-dom';
import css from './Home.module.css';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const Home = () => {
  return (
    <>
      <DocumentTitle>CampersRent</DocumentTitle>
      <section className={css.containerHero}>
        <h1 className={css.title}>Welcome to CamperRent</h1>
        <h2 className={css.subtitle}>
          Book a camper today and start your adventure!
        </h2>
        <Link className={css.bookLink} to="/catalog">
          Book
        </Link>
      </section>
    </>
  );
};

export default Home;
