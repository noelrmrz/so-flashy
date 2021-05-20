import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements'
import { getData, storeData } from '../utils/api'
import { FloatingAction } from "react-native-floating-action";
import { TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';


class DeckList extends Component {

  state = {
    decks: ''
  }

  componentDidMount() {
    storeData([{
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    }, {
      id: 'as7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Second Item',
    }, {
      id: 'asd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Third Item',
    }])

    getData()
      .then((results) => {
        this.setState({
          decks: results
        })
      })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={formatData(this.state.decks, numColumns)}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
        <FloatingAction ref={(ref) => { this.floatingAction = ref }} />
      </SafeAreaView>
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
  <TouchableNativeFeedback >
  <View style={styles.item}>
    <Text h4>{title}</Text>
  </View>
</TouchableNativeFeedback> :
  <TouchableOpacity style={styles.item}>
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
    marginTop: StatusBar.currentHeight || 0,
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
  title: {
    fontSize: 32
  },
});

export default DeckList