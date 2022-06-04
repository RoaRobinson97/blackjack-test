import axios from 'axios';

const API_URL = 'http://deckofcardsapi.com/api/deck';
const headers = { 'Content-Type': 'application/json' };

const DeckService = {
  async newDeck() {
    return axios.get(`${API_URL}/new`, { headers });
  },

  async drawCard(id) {
    return axios.get(`${API_URL}/${id}/draw`, { headers });
  },
};

export default DeckService;
