import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeckPreview from './components/deck-preview'
import DeckList from './components/deck-list'
import { Connect } from 'react-redux'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <DeckList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});