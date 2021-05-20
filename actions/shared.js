import { addDeck, getAllDecks } from '../actions/deck'
import { storeData , getData } from '../utils/api'

// deck should be a JSON object if not, create it when calling storeData
export function handleAddQuestion(deck) {
    return async (dispatch, getState) => {
        const deck = await storeData(deck)
        dispatch(addDeck(deck))
    }
}

export function handleGetAllDecks() {
    return async (dispatch) => {
        const decks = await getData()
        dispatch(getAllDecks(decks))
    }
}
