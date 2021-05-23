import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import DeckList from './components/deck-list'
import DeckDetail from './components/deck-detail'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers/index'
import NewDeck from './components/new-deck'
import CardView from './components/card-view'
import NewCard from './components/new-card'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import middleWare from './middleware'

export default class App extends Component {
  render() {
    return (
    <StoreProvider store={createStore(reducer, middleWare)} >
      <PaperProvider>
      <AppContainer>

      </AppContainer>
      </PaperProvider>
    </StoreProvider>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: DeckList
  },
  DeckDetail: {
    screen: DeckDetail
  },
  NewDeck: {
    screen: NewDeck
  },
  CardView: {
    screen: CardView
  },
  NewCard: {
    screen: NewCard
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});