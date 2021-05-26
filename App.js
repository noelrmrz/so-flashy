import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers/index'
import middleWare from './middleware'
import Dashboard from './components/dashboard'


export default class App extends Component {

  render() {
    return (
    <StoreProvider store={createStore(reducer, middleWare)} >
      <Dashboard />
    </StoreProvider>
    )
  }
}