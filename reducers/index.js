import { ADD_DECK, ADD_CARD, RECEIVE_DECKS, DELETE_DECK } from '../actions/types'

function decks(state = {}, action) {
  switch (action.type) {
      case RECEIVE_DECKS: {
          return {
              ...state,
              ...action.decks,
          }
      }
      case ADD_DECK: {
          const {deck} = action
          return {
              ...state,
              [deck.id]: {
                  id: deck.id,
                  title: deck.title,
                  cards: []
              }
          }
      }
      case DELETE_DECK: {
          let newState = state;
          delete newState[action.deckID]
          return {
              ...newState
          }
      }
      case ADD_CARD: {
          const {deckID, card} = action;
          return {
              ...state,
              [deckID]: {
                  ...state[deckID],
                  cards: [
                      ...state[deckID].cards,
                      card
                  ]
              }
          }
      }
      default:
          return state;
  }
}

export default decks