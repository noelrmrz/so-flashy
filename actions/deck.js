export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const GET_ALL_DECKS = 'GET_ALL_DECKS'

export function addDeck(deck) {
  return {
    type: ADD_NEW_DECK,
    deck
  }
}

export function getAllDecks(decks) {
  return {
    type: GET_ALL_DECKS,
    decks
  }
}