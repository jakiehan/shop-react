import React from 'react';
import styles from './RequestMessage.module.scss';

interface RequestMessageProps {
  msg: string | null
}

export const RequestMessage = ({ msg }: RequestMessageProps) => (
  <div className={styles.container}>
    <p className={styles.msg}>
      {msg}
    </p>
  </div>
);

