import clsx from 'clsx';

import css from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

export const Navigation = () => {
  return (
    <header className={css.navigation}>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/catalog" end>
        Catalog
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/favorites" end>
        Favorites
      </NavLink>
    </header>
  );
};
