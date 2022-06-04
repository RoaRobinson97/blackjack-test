import axios from 'axios';

const API_URL = 'http://deckofcardsapi.com/api/deck';
const headers = { 'Content-Type': 'application/json' };

const DeckService = {
  async newDeck() {
    return axios.get(`${API_URL}/new`, { headers });
  },
};

export default DeckService;
