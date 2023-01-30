import React from 'react';
import iconLike from 'assets/images/like-card.svg';
import iconLikeActive from 'assets/images/like-card-active.svg';
import classNames from 'classnames';
import styles from './Like.module.scss';

interface LikeProps {
  isActive: boolean;
  position?: string;
}

export const Like = ({ isActive, position = '' }: LikeProps) => {

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
  };

  return (
    <img
      className={classNames(styles.like, {
        [styles.likePosition]: position === 'center',
      })}
      src={!isActive ? iconLike : iconLikeActive}
      alt="like"
      onClick={handleClick}
    />
  );
};

