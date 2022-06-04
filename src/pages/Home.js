/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import Controls from '../components/Home/controls.fixture';
import Table from '../components/Home/table.fixture';
import DeckService from '../services/deckApi.service';

function Home() {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    deckId: null,
    machineCard: [],
    userCards: [],
    userPoints: 0,
    housePoints: 0,
    winner: null,
  });

  /** Generate a new deck for a new game */
  async function getNewDeck() {
    const response = await DeckService.newDeck()
      .then((res) => res)
      .catch((e) => setError(e.data));
    return response;
  }

  /** Draw a new card from the current deck */
  async function drawCard(id) {
    const response = await DeckService.drawCard(id)
      .then((res) => res)
      .catch((e) => setError(e.data));
    return response;
  }

  /** Start playing --NOT IMPLEMENTED YET--*/
  function startGame() {
    return false;
  }

  /** Disolve the current table and starts a new game --NOT IMPLEMENTED YED--*/
  function restartGame() {
    return false;
  }

  useEffect(() => {
    let deckId = null;
    const machineCards = [];
    const machinePoints = 0;
    /** Get new deck for the game */

    getNewDeck().then((res) => {
      deckId = res.data.deck_id;

      /** Draw one card for the machine */

      drawCard(deckId).then((res) => {
        machineCards.push(res.data.cards[0]);

        /** Draw a second card for the machine */

        drawCard(deckId).then((res) => {
          machineCards.push(res.data.cards[0]);
          console.log(res.data);
        });
      });
    });
  }, []);

  return (
    <div>
      <h1>{state.deckId}</h1>
      <Controls play={startGame()} restart={restartGame()} state={state} />
      <Table state={state} />
    </div>
  );
}

export default Home;
