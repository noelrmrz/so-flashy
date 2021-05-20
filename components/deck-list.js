import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements'
import { getData, storeData } from '../utils/api'
import { FAB } from 'react-native-paper';
import { TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux'
import { handleGetAllDecks } from '../actions/shared'


class DeckList extends Component {

  state = {
    decks: ''
  }

  componentDidMount() {
/*     storeData([{
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    }, {
      id: 'as7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Second Item',
    }, {
      id: 'asd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Third Item',
    }]) */

/*     this.props.dispatch(handleGetAllDecks())
      .then((results) => {
        this.setState({
          decks: results
        })
      }) */

      getData()
        .then((results) => {
          this.setState({
            decks: results
          })
        })
  }

  handleOnPress(deck) {
    // route to deck-detail
  }

  render() {
    return ( this.state.decks !== null ?
      <SafeAreaView style={styles.container}>
        <FlatList
          data={formatData(this.state.decks, numColumns)}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
          <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
      </SafeAreaView> :
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyListText}>Add a deck!</Text>
        <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
      </View>
    )
  }
}

const numColumns = 2

const formatData = (data, numColumns) => {
  const numFullRows = Math.floor(data.length / numColumns)

  let numElementLastRow = data.length - (numFullRows * numColumns)

  while (numElementLastRow !== numColumns && numElementLastRow !== 0) {
    data.push({ key: `blank-${numElementLastRow}`, empty: true })
    numElementLastRow += 1
  }

  return data
}

const Item = ({ title }) => (
  Platform.OS === 'android' ?
  <TouchableNativeFeedback onPress={() => console.log(JSON.stringify({title}) + ' was pressed')}>
  <View style={styles.item}>
    <Text h4>{title}</Text>
  </View>
</TouchableNativeFeedback> :
  <TouchableOpacity style={styles.item} onPress={() => console.log(JSON.stringify({title}) + ' was pressed')}>
    <View >
      <Text h4>{title}</Text>
    </View>
  </TouchableOpacity>
)

const renderItem = ({ item }) => (
  (item.empty === true) ?
    <View style={[styles.item, styles.itemHidden]} /> :
    <Item title={item.title} />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  emptyContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 4,
    height: 200,
    zIndex: 3, // works on ios
    elevation: 3 // works on android
  },
  itemHidden: {
    backgroundColor: 'transparent'
  },
  emptyListText: {
    fontSize: 32
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

/* function mapDispatchToProps(dispatch, props) {
    const { id } = props;

    return {
        saveQuestionAnswer: (answer) => {
            dispatch(handleAnswer(id, answer))
        }
    }
} */

export default connect()(DeckList)