import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from 'react-native-elements'

class DeckPreview extends Component {

    render() {
        return (
      <View style={styles.deck_preview}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text h3>Deck Name</Text>
          <Text h5>Deck Count</Text>
        </TouchableOpacity>
      </View>
        )
    }
}

const styles = StyleSheet.create({
  deck_preview: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default DeckPreview