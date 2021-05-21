import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import DeckList from './components/deck-list'
import DeckDetail from './components/deck-detail'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers'
import NewDeck from './components/new-deck'

export default function App() {
  return (
    <StoreProvider store={createStore(reducer)} >
      <PaperProvider>
        <View style={styles.container}>
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          <NewDeck />
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});