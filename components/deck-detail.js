import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from 'react-native-elements'

class DeckDetail extends Component {

    render() {
        return (
            <View style={styles.deck_preview}>
                <Text h4>Deck Name</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text h3>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text h3>Add Question</Text>
                </TouchableOpacity>
                <Text h4>Question count</Text>
            </View>
        )
    }
}

export default DeckDetail