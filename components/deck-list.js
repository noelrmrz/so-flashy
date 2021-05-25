import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements'
import { getData, storeData, clearAsyncStorage } from '../utils/api'
import { FAB } from 'react-native-paper';
import { TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux'
import { handleGetAllDecks } from '../actions/shared'


class DeckList extends Component {

  state = {
    decks: ''
  }

  convertToArray(data) {
  var res = [];
              
  for(var i in data) {
      res.push(data[i])
  }

  return res
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

        getData()
          .then((results) => {
            this.setState({
              decks: this.convertToArray(results)
            })
          })
  }

  render() {
    if (this.state.decks === null) {
      return (
        <View>
          <Text>
            loading
          </Text>
        </View>
      )
    }
    else {
    return (this.state.decks !== undefined ?
      <SafeAreaView style={styles.container}>
        <FlatList
          data={formatData(this.state.decks, numColumns)}
          renderItem={(item) => renderItem(item, this.props.navigation)}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => this.props.navigation.navigate('NewDeck')}
        />
      </SafeAreaView> :
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyListText}>Add a deck!</Text>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => this.props.navigation.navigate('NewDeck')}
        />
      </View>
    )
  }
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

const Item = ({ title, props, deck}) => (
  Platform.OS === 'android' ?
    <TouchableNativeFeedback onPress={() => props.navigate('DeckDetail', {item: deck} )}>
      <View style={styles.item} >
        <Text h4>{title}</Text>
      </View>
    </TouchableNativeFeedback> :
    <TouchableOpacity style={styles.item} onPress={() => props.navigate('DeckDetail')}>
      <View >
        <Text h4>{title}</Text>
      </View>
    </TouchableOpacity>
)

const renderItem = ({ item }, props) => (
  (item.empty === true) ?
    <View style={[styles.item, styles.itemHidden]} /> :
    <Item title={item.title} props={props} deck={item} />
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
});

function mapStateToProps({decks}) {
  return {
    decks: decks
  }
}

export default connect(mapStateToProps)(DeckList)