/* eslint-disable array-callback-return */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import styles from '../../styles/pages/home.module.scss';
import Card from './card.fixture';

/** Display table of the game */
function Table(props) {
  const { state } = props;

  /** Display card for the machine */
  function MachineCards() {
    return (
      <div>
        {state.machineCards.map((card) => (
          <Card key={card.code} url={card.image} />
        ))}
      </div>
    );
  }

  /** Display card for the user */
  function UserCards() {
    return (
      <div>
        {state.userCards.map((card) => (
          <Card key={card.code} url={card.image} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.table}>
      <MachineCards />
      <UserCards />
    </div>
  );
}

export default Table;
