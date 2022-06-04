/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
export default function calculatePoints(cards) {
  let points = 0;
  const sortedCards = [...cards];
  const aces = [];

  /** place Aces at the end of the array */

  for (let i = 0; i < sortedCards.length; i++) {
    if (sortedCards[i].value === 'ACE') {
      aces.push(sortedCards[i]);
      sortedCards.splice(i, 1);
    }
  }
  const newCards = sortedCards.concat(aces);

  /** Check value for each case */
  newCards.forEach((card) => {
    if ((card.value === 'JACK') || (card.value === 'QUEEN') || (card.value === 'KING')) {
      points += 10;
    } else
    if (card.value == 'ACE') {
      if (points < 21) {
        points += 10;
      } else {
        points += 1;
      }
    } else {
      points += parseInt(card.value);
    }
  });

  return points;
}
