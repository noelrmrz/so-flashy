import { ADD_DECK, GET_ALL_DECKS, ADD_CARD_TO_DECK, DELETE_DECK } from '../actions/deck'

export default function decks(state = {}, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            const { deck } = action;
            return {
                ...state,
                [deck.title]: deck,
            }
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [action.deckTitle]: {
                        ...state.decks[action.deckTitle],
                        cards: state.decks[action.deckTitle].cards.concat(action.card)
                    }

                }
            }
        case DELETE_DECK:
        // Your logic
        default:
            return state;
    }
}