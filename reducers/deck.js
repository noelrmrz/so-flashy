import { ADD_NEW_DECK } from '../actions/deck'

export default function deck(state = {}, action) {
    switch (action.type) {
        case ADD_NEW_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck
            }
        default:
            return state
    }
}