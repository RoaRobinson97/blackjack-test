import React from 'react';
import DeckService from '../services/deckApi.service';

describe('DECK API testing', () => {
  test('should pass', async () => {
    const response = await DeckService.newDeck();
    expect(response.status).toEqual(200);
  });
});
