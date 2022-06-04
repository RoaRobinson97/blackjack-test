/* eslint-disable react/button-has-type */
import React from 'react';
import styles from '../../styles/pages/home.module.scss';

/** Display controls of the game */
function Controls({ hit, stand, status }) {
  return (
    <div className={styles.controls}>
      <div className={styles.controls__column}>
        <button type="submit" className={styles.controls__button__black}> Play </button>
        <button type="reset" className={styles.controls__button__black}> Restart </button>
      </div>
      <div>
        <h1 className={styles.controls__title}>21 Blackjack</h1>
        <h2 className={styles.controls__subtitle}>and some weird rules</h2>
        <h1 className={(status === 'You win') ? styles.controls__status__win : styles.controls__status__lose}>{status}</h1>
      </div>
      <div className={styles.controls__column}>
        <button type="button" className={styles.controls__button__red} onClick={stand}> Stand </button>
        <button disabled={(status === 'You lose')} type="button" className={styles.controls__button__green} onClick={hit}> Hit </button>
      </div>
    </div>
  );
}

export default Controls;
