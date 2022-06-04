import React from 'react';
import styles from '../../styles/pages/home.module.scss';

/** Display table of the game */
function Table(props) {
  const { children } = props;

  return (
    <div className={styles.table}>
      {children}
    </div>
  );
}

export default Table;
