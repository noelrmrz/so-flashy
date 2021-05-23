import { ADD_DECK, GET_ALL_DECKS, ADD_CARD_TO_DECK, DELETE_DECK } from '../actions/deck'

export default function decks(state = {}, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            console.log("the action is " + JSON.stringify(action))
            const { deck } = action;
            return {
                ...state,
                [deck.title]: deck,
            }
        case ADD_CARD_TO_DECK:
            // Your logic
        case DELETE_DECK:
            // Your logic
        default:
            return state;
    }
}