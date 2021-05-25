import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'So-Flasy:flashcards'

export const storeData = async (value) => {
  try {
    value.id = generateID()
    value.cards = []
    const result = await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({[value.title]: value}))
    return value
  } catch (e) {
    console.log
  }
}

export const removeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.removeItem(STORAGE_KEY, jsonValue)
  } catch (e) {
    // deleting error
  }
}

export const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}

function generateID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function getData() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(stringData => {
      return JSON.parse(stringData)
    })
}

export function saveCard(deckId, card) {
  const oCard = card
  oCard.id = generateID()
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      let allDecks = JSON.parse(results)

      allDecks[deckId].cards.push(oCard)

      return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(allDecks))
    })
}
