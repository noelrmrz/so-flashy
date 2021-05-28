import * as api from '../utils/api';

export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const DELETE_DECK = "DELETE_DECK";
export const INITIAL_DATA = "INITIAL_DATA";

export const addDeck = (deck) => dispatch => {
    api.storeData(deck).then(() => {
        dispatch({
            type: ADD_DECK,
            deck
        })
    }).catch(err => console.log(err))
}

/* export const deleteDeck = (deck) => dispatch => {
    api.deleteDeck(deck).then(() => {
        dispatch({
            type: DELETE_DECK,
            deck
        })
    }).catch(err => console.log(err))
} */

export const addCard = (deckTitle, card) => dispatch => {
    api.saveCard(deckTitle, card).then(() => {
        dispatch({
            type: ADD_CARD,
            deckTitle,
            card
        })
    }).catch(err => console.log(err))
}

export const handleInitialData = () => dispatch => {
    api.getData().then(allDecks => {
        dispatch({
            type: INITIAL_DATA,
            allDecks
        })
    })
}