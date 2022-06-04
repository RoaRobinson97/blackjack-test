/* eslint-disable eqeqeq */
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
    status: null,
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

  /** User draw a card from the current deck */
  function userDrawCard() {
    drawCard(state.deckId).then((res) => {
      const { userCards } = state;
      userCards.push(res.data.cards[0]);
      const points = calculatePoints(userCards);
      if (points > 21) {
        setState({
          ...state, userCards, userPoints: points, status: 'You lose!',
        });
      } else {
        setState({ ...state, userCards, userPoints: points });
      }
    });
  }

  /** User stands the game */
  function finishGame() {
    if (state.userPoints == 21
      || (state.userPoints > state.machinePoints && state.userPoints < 21)) {
      setState({ ...state, status: 'You win' });
    } else {
      setState({ ...state, status: 'You lose' });
    }
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
      <h1>Home</h1>
      <Controls
        play={startGame()}
        restart={restartGame()}
        stand={finishGame}
        hit={userDrawCard}
        status={state.status}
      />
      <Table state={state} />
    </div>
  );
}

export default Home;
