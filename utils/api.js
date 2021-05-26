import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'
import { TouchableHighlight } from 'react-native-gesture-handler'

const STORAGE_KEY = 'So-Flasy:flashcards'
const NOTIFICATION_KEY = 'So-Flashy:notifications'

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

export function getDailyReminderValue() {

}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: 'Study time',
    body: 'Don\'t forget to study!',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
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
                console.log('the notification is ' + notification);
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            })
            .catch(e=>console.log("error in scheduleNotificationAsync ",e))
            }
          })
      }
    })
}
