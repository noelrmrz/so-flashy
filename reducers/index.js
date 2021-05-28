import { ADD_DECK, ADD_CARD, INITIAL_DATA, DELETE_DECK } from '../actions'

const initialState = {
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
/*     case DELETE_DECK:
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
      } */
    case INITIAL_DATA:
      return {
        ...state,
        ...action
      }
    default:
      return state
  }
}