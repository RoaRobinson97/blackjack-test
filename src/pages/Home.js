import React, { useEffect, useState } from 'react';
import Controls from '../components/Home/controls.fixture';
import Table from '../components/Home/table.fixture';
import DeckService from '../services/deckApi.service';

function Home() {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    deckId: null,
    userPoints: 0,
    housePoints: 0,
    winner: null,
  });

  function getNewDeck() {
    DeckService.newDeck().then((res) => setState({ ...state, deckId: res.data.deck_id })).catch(
      (e) => setError(e.data),
    );
  }

  useEffect(() => {
    getNewDeck();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Controls />
      <Table />
    </div>
  );
}

export default Home;
