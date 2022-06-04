/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import Controls from '../components/Home/controls.fixture';
import Table from '../components/Home/table.fixture';
import DeckService from '../services/deckApi.service';
import calculatePoints from '../utils/calculatePoints';

function Home() {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    deckId: null,
    machineCards: [],
    userCards: [],
    userPoints: 0,
    machinePoints: 0,
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

  function userDrawCard() {
    drawCard(state.deckId).then((res) => {
      const { userCards } = state;
      userCards.push(res.data.cards[0]);
      const points = calculatePoints(userCards);
      setState({ ...state, userCards, userPoints: points });
    });
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
    /** Get new deck for the game */

    getNewDeck().then((res) => {
      deckId = res.data.deck_id;
      /** Draw one card for the machine */

      drawCard(deckId).then((res) => {
        machineCards.push(res.data.cards[0]);

        /** Draw a second card for the machine */

        drawCard(deckId).then((res) => {
          machineCards.push(res.data.cards[0]);
          const points = calculatePoints(machineCards);
          setState({
            ...state, machineCards, deckId, machinePoints: points,
          });
        });
      });
    });
  }, [state.userCards]);

  return (
    <div>
      <h1>{state.deckId}</h1>
      <Controls play={startGame()} restart={restartGame()} hit={userDrawCard} />
      <Table state={state} />
    </div>
  );
}

export default Home;
