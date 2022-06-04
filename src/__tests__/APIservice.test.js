import DeckService from '../services/deckApi.service';

describe('DECK API testing', () => {
  test('Api call to get new deck id', async () => {
    const response = await DeckService.newDeck();
    expect(response.status).toEqual(200);
  });
});
