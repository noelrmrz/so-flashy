import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'So-Flasy:flashcards'

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}

export const storeData = async (value) => {
  try {
    value.id = generateID()
    await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({[value.title]: value}))
  } catch (e) {
    console.log(e)
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

export function generateID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
