import React from 'react';
import styles from './Description.module.scss';

interface DescriptionProps {
  textTitle: string;
  textDescription: string;
  type?: string;
}

export const Description = ({
  textTitle,
  textDescription,
  type = '',
}: DescriptionProps) => {
  const CustomTag = type === 'subtitle' ? 'h3' : 'h2';

  return (
    <>
      <CustomTag className={type === 'subtitle' ? `${styles.title} ${styles.subtitle}` : styles.title}
      >
        {textTitle}
      </CustomTag>
      <p className={styles.description}>
        {textDescription}
      </p>
    </>
  );
};
