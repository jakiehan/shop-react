import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss';
import { BASE_URL } from '../../utils/constants';
import Like from '../Like/Like';

const Card = ({ cardInfo }) => {

  const navigate = useNavigate();
  const { id, name, price, like, picture } = cardInfo;

  const handleClick = () => {
    navigate(`/product/${id}`)
  }

  return (
    <article
      className={styles.card}
      onClick={handleClick}
    >
      <Like isActive={like} />
      <img
        className={styles.image}
        src={`${BASE_URL}${picture.path}`}
        alt={name}
      />
      <h2
        className={styles.title}
        title={name}
      >
        {name}
      </h2>
      <p className={styles.price}>
        ${price.value}
      </p>
    </article>
  );
};

export default Card;
