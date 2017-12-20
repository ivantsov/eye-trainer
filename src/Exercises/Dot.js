import React from 'react';

import styles from './Dot.css';

export default function Dot({className}) {
  return <div className={`${styles.component} ${className}`}/>;
}
