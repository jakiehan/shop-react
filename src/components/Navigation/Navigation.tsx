import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from 'utils/constants';
import styles from './Navigation.module.scss';

export const Navigation = () => (
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
