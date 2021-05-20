export const ADD_NEW_DECK = 'ADD_NEW_DECK'

export function addDeck(deck) {
  return {
    type: ADD_NEW_DECK,
    deck
  }
}