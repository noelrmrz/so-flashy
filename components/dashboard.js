import React, { Component } from "react"
import { connect } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import NewDeck from './new-deck'
import CardView from './card-view'
import NewCard from './new-card'
import DeckList from './deck-list'
import DeckDetail from './deck-detail'
import { handleGetAllDecks } from '../actions/shared'
import { setLocalNotification } from '../utils/api'

class Dashboard extends Component {

  componentDidMount() {
    this.props.getAllDecks()
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

function mapDispatchToProps(dispatch, props) {
  return {
    getAllDecks: () => {
      dispatch(handleGetAllDecks())
    }
  }
}

function mapStateToProps({ decks }) {
  return {
    loading: decks === null
  }
}

const AppContainer = createAppContainer(AppNavigator);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)