import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements'
import { getData, storeData } from '../utils/api'

class DeckList extends Component {

  state = {
    decks: ''
  }

      componentDidMount() {
        storeData([{
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
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
              data={this.state.decks}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        )
    }
}

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default DeckList