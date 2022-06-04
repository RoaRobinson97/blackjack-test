/* eslint-disable no-plusplus */
export default function calculatePoints(cards) {
  const points = 1;
  const sortedCards = cards;
  const aces = [];

  for (let i = 0; i < sortedCards.length; i++) {
    if (sortedCards[i].code === ('AS' || 'AH' || 'AC' || 'AD')) {
      aces.push(sortedCards[i]);
      sortedCards.splice(i, 1);
    }
  }

  sortedCards.concat(aces);
}
