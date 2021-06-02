import { ADD_DECK, ADD_CARD, RECEIVE_DECKS, DELETE_DECK } from '../actions'

/* const initialState = {
  allDecks: []
}

export default function decks(state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        allDecks: {
          ...state.allDecks,
          [action.deck.title]: action.deck
        }
      }

    case ADD_CARD:
      return {
        ...state,
        allDecks: {
          ...state.allDecks,
          [action.deckTitle]: {
            ...state.allDecks[action.deckTitle],
            cards: state.allDecks[action.deckTitle].cards.concat(action.card)
          }

        }
      }
     case DELETE_DECK:
      const {allDecks} = state
      const {deck} = action

      console.log(allDecks, deck)

      const deckFiltered = _objectWithoutProperties(allDecks, [deck]);
      console.log('result: ', deckFiltered)

      return {
        ...state,
        allDecks: {
        ...deckFiltered
        }
      } 
    case INITIAL_DATA:
      return {
        ...state,
        ...action
      }
    default:
      return state
  }
} */

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