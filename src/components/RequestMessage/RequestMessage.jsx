import React from 'react';
import styles from './RequestMessage.module.scss';

const RequestMessage = ({ msg }) => (
    <div className={styles.container}>
      <p className={styles.msg}>
        {msg}
      </p>
    </div>
  );

export default RequestMessage;
