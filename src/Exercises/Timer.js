import React from 'react';

import styles from './Timer.css';

export default function Timer({children}) {
  return (
    <div className={styles.component}>{children.toString().padStart(2, '0')}</div>
  );
}
