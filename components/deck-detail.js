import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, StatusBar } from "react-native"
import { Text, Button } from 'react-native-elements'
import { connect } from 'react-redux'

class DeckDetail extends Component {

    handleStartQuiz = () => {

    }

    handleAddQuestion = () => {

    }

    render() {
        return (
            
            <View style={styles.container}>
                <Text h5 style={styles.countText}>{this.props.navigation.state.params.item.cards.length} Cards</Text>
                <Text h3 style={styles.headerText}>{this.props.navigation.state.params.item.title}</Text>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('CardView', {item: this.props.navigation.state.params.item})} >
                    <Text style={styles.buttonText}> Start Quiz </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('NewCard', {item: this.props.navigation.state.params.item}) }>
                    <Text style={styles.buttonText}> Add Questions </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: '#fff'
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
    buttonText: {
        fontWeight: 'bold'
    },
    countText: {
        flex: 1,
        margin: 16
    },
    headerText: {
        flex: 2,
        alignSelf: 'center'
    }
  })

/* function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const questionAuthor = users[question.author]

    return {
        authedUser,
        question,
        questionAuthor
    }
} */

/* function mapDispatchToProps(dispatch, props) {
    const { id } = props;

    return {
        saveQuestionAnswer: (answer) => {
            dispatch(handleAnswer(id, answer))
        }
    }
} */

export default connect()(DeckDetail)