/* eslint-disable react/button-has-type */
import React from 'react';
import styles from '../../styles/pages/home.module.scss';

/** Display controls of the game */
function Controls() {
  return (
    <div className={styles.controls}>
      <div className={styles.controls__column}>
        <button type="submit" className={styles.controls__button__black}> Play </button>
        <button type="reset" className={styles.controls__button__black}> Restart </button>
      </div>
      <div>
        <h1 className={styles.controls__title}>21 Blackjack</h1>
        <h2 className={styles.controls__subtitle}>and some weird rules</h2>
      </div>
      <div className={styles.controls__column}>
        <button type="button" className={styles.controls__button__red}> Stand </button>
        <button type="button" className={styles.controls__button__green}> Hit </button>
      </div>
    </div>
  );
}

export default Controls;
