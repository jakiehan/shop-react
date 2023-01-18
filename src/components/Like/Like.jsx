import React from 'react';
import iconLike from '../../assets/images/like-card.svg';
import iconLikeActive from '../../assets/images/like-card-active.svg';
import styles from './Like.module.scss';

const Like = ({isActive, position = ''}) => {

  const handleClick = (e) => {
    e.stopPropagation();
  }

  return (
    <img
      className={position === 'center' ? `${styles.like} ${styles.likePosition}` : styles.like}
      src={!isActive ? iconLike : iconLikeActive}
      alt="like"
      onClick={handleClick}
    />
  );
};

export default Like;
