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

class Dashboard extends Component {

  componentDidMount() {
    this.props.getAllDecks()
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