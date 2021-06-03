import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'

const STORAGE_KEY = 'So-Flasy:flashcards'
const NOTIFICATION_KEY = 'So-Flashy:notifications'

export function generateID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function fetchDecks(){
  return AsyncStorage.getItem(STORAGE_KEY)
      .then(results => {
          const data = JSON.parse(results)
          return data
      })
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [deck.id]: deck,
  }))
}

export function saveNewCardToDeck({deckID, card}){
  console.log(deckID)
  return AsyncStorage.getItem(STORAGE_KEY)
      .then(results =>{
          const data =JSON.parse(results);
          data[deckID]={
              ...data[deckID],
              cards: [
                  ...data[deckID].cards,
                  card
              ]
          }
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      })
}

export function removeDeck(key){
  return AsyncStorage.getItem(STORAGE_KEY)
      .then((results)=>{
          const data =JSON.parse(results);
          data[key] = undefined;
          delete data[key];
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      })
}

export const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Notifications.requestPermissionsAsync()
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              Notifications.scheduleNotificationAsync({
                content: {
                  title: 'Study Time',
                  body :'Study one quiz daily'
                },
                trigger: {
                  seconds: 60 * 1440, //trigger once every day
                  repeats: true
                },
              })
            .then(notification=>{
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            })
            .catch(e=>console.log("error in scheduleNotificationAsync ",e))
            }
          })
      }
    })
}
