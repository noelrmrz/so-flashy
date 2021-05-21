import React, { Component } from 'react';
import { Text, TextInput, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

class NewCard extends Component {

    state = {
        answered: false
    }

    handleSubmit = (event) => {
        this.setState({
            answered: event.target.value
        })
        // animate card to flip show answer
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.questionText}>
                The question text goes here!
            </Text>
            <TouchableOpacity
               style = {styles.submitButton}
               value = {true}
               onPress = {
                  (event) => this.handleSubmit(event)
               }>
               <Text style = {styles.submitButtonText}> True </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               value = {false}
               onPress = {
                  (event) => this.handleSubmit(event)
               }>
               <Text style = {styles.submitButtonText}> False </Text>
            </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#f0f'
    },
    submitButton: {
      backgroundColor: '#f9c2ff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.5,
      margin: 4,
      marginBottom: 16,
      width: 200,
      zIndex: 3, // works on ios
      elevation: 3, // works on android
      alignSelf: 'center',
      borderRadius: 5,
    },
    submitButtonText: {
        fontWeight: 'bold'
    },
    headerText: {
        flex: 2,
        alignSelf: 'center'
    }
  })

export default NewDeck;