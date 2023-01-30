import React from 'react';
import classNames from 'classnames';
import styles from './Description.module.scss';

type Tag = 'h2' | 'h3';

interface DescriptionProps {
  textTitle: string;
  textDescription: string;
  type?: Tag;
}

export const Description = ({
  textTitle,
  textDescription,
  type = 'h2',
}: DescriptionProps) => {
  const CustomTag = type;

  return (
    <>
      <CustomTag className={classNames(styles.title, {
        [styles.subtitle]: type === 'h3'
      })}>
        {textTitle}
      </CustomTag>
      <p className={styles.description}>
        {textDescription}
      </p>
    </>
  );
};
