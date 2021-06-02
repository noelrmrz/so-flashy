import React, { Component } from "react"
import { Provider as PaperProvider } from 'react-native-paper'
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import NewDeck from './new-deck'
import CardView from './card-view'
import NewCard from './new-card'
import DeckList from './deck-list'
import DeckDetail from './deck-detail'
import { setLocalNotification } from '../utils/api'

class Dashboard extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <PaperProvider>
        <AppContainer>

        </AppContainer>
      </PaperProvider>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: 'Home',
      headerTintColor: '#3e545b',
      headerStyle: {
        backgroundColor: '#cadeef'
      }
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: '#3e545b',
      headerStyle: {
        backgroundColor: '#cadeef'
      }
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'Add a deck',
      headerTintColor: '#3e545b',
      headerStyle: {
        backgroundColor: '#cadeef'
      }
    }
  },
  CardView: {
    screen: CardView,
    navigationOptions: {
      headerTintColor: '#3e545b',
      headerStyle: {
        backgroundColor: '#cadeef'
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Add a card',
      headerTintColor: '#3e545b',
      headerStyle: {
        backgroundColor: '#cadeef'
      }
    }
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default Dashboard