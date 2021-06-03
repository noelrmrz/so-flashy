import React, { Component } from "react"
import { Provider as PaperProvider } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import NewDeck from './new-deck'
import CardView from './card-view'
import NewCard from './new-card'
import DeckList from './deck-list'
import DeckDetail from './deck-detail'
import { setLocalNotification } from '../utils/api'
import { TransitionSpecs } from '@react-navigation/stack';

class Dashboard extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>
    )
  }
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={DeckList}
      options={{
        title: 'Home',
        headerTintColor: '#3e545b',
        headerStyle: {
          backgroundColor: '#cadeef'
        },
        transitionSpec: {
          open: config,
          close: config,
        },
      }} />
    <Stack.Screen
      name="DeckDetail"
      component={DeckDetail}
      options={{
        title: 'My home',
        headerTintColor: '#3e545b',
        headerStyle: {
          backgroundColor: '#cadeef'
        },
        transitionSpec: {
          open: config,
          close: config,
        },
      }} />
    <Stack.Screen
      name="NewDeck"
      component={NewDeck}
      options={{
        title: 'Add a deck',
        headerTintColor: '#3e545b',
        headerStyle: {
          backgroundColor: '#cadeef'
        }
      }}
    />
    <Stack.Screen
      name="NewCard"
      component={NewCard}
      options={{
        title: 'Add a card',
        headerTintColor: '#3e545b',
        headerStyle: {
          backgroundColor: '#cadeef'
        }
      }}
    />
    <Stack.Screen
      name="CardView"
      component={CardView}
      options={{
        title: 'My home',
        headerTintColor: '#3e545b',
        headerStyle: {
          backgroundColor: '#cadeef'
        },
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    />
  </Stack.Navigator>
)

export default Dashboard