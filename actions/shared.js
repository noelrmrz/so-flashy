import { addDeck, getAllDecks } from '../actions/deck'
import { storeData , getData } from '../utils/api'

export function handleAddDecks(deckTitle) {
    console.log("in top  of handle add decks " + JSON.stringify(deckTitle))
    return (dispatch) => {
        return storeData(deckTitle)
            .then((deck) => {
                console.log("in handle add decks " + JSON.stringify(deck))
                dispatch(addDeck(deck));
            })
    }
}

export function handleGetAllDecks() {
    return (dispatch) => {
        return getData()
            .then((decks) => {
                dispatch(getAllDecks(decks));
            })
    }
}
