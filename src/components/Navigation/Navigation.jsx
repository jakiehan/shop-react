import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { navLinks } from '../../utils/constants';

const Navigation = () => (
  <nav className={styles.links}>
    {navLinks.map((link) => (
      <Link
        className={styles.link}
        key={link.id}
        to={link.to}
      >
        <img
          className={styles.img}
          src={link.img}
          alt={link.imgAlt}
        />
      </Link>
    ))}
  </nav>
);

export default Navigation;
