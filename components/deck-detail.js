import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from 'react-native-elements'

class DeckDetail extends Component {

    handleStartQuiz = () => {

    }

    handleAddQuestion = () => {

    }

    render() {
        return (
            <View style={styles.deck_preview}>
                <Text h4>Deck Name</Text>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.handleStartQuiz()
                    }>
                    <Text style={styles.submitButtonText}> Start Quiz </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.handleAddQuestion()
                    }>
                    <Text style={styles.submitButtonText}> Add Questions </Text>
                </TouchableOpacity>
                
                <Text h4>Question count</Text>
            </View>
        )
    }
}

export default DeckDetail