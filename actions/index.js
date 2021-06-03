import {RECEIVE_DECKS, ADD_CARD, ADD_DECK, DELETE_DECK } from './types'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addCard({deckID, card}) {
    return {
        type: ADD_CARD,
        deckID,
        card,
    }
}

export function deleteDeck(deckID) {
    return{
        type: DELETE_DECK,
        deckID,
    }
}