import { addDeck, getAllDecks, addCard } from '../actions/deck'
import { storeData , getData, saveCard } from '../utils/api'

export function handleAddDecks(deckTitle) {
    return (dispatch) => {
        return storeData(deckTitle)
            .then((deck) => {
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

export function handleAddCard(deckTitle, card) {
    return (dispatch) => {
        return saveCard(deckTitle, card)
            .then(() => {
                dispatch(addCard(deckTitle, card));
            })
    }
}
