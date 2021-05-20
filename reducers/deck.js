import { ADD_NEW_DECK, GET_ALL_DECKS } from '../actions/deck'

export default function deck(state = {}, action) {
    switch (action.type) {
        case ADD_NEW_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck
            }
        case GET_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state
    }
}