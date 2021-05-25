import React, { Component } from 'react';
import { Text, TextInput, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { handleAddCard } from '../actions/shared'
import { connect } from 'react-redux'

class NewCard extends Component {

    state = {
        questionText: '',
        explanationText: '',
        answer: false
    }

    handleChange = (event, whichText) => {
        if (whichText === 'question') {
            this.setState({
                questionText: event
            })
        }
        else {
            this.setState({
                explanationText: event
            })
        }
    }

    handleSubmit = (event, userAnswer) => {
        this.setState({
            answer: userAnswer
        })
        this.props.saveNewCard(this.props.navigation.state.params.item.title, { question: this.state.questionText, value: userAnswer, explanation: this.state.explanationText })
        this.props.navigation.navigate('DeckDetail', { item: this.props.navigation.state.params.item })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperContainer} >
                    <TextInput
                        selectionColor={BLUE}
                        underlineColorAndroid={
                            this.state.isFocused ? BLUE : LIGHT_GRAY
                        }
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        style={styles.textInput}
                        placeholder="What is the question"
                        onChangeText={event => this.handleChange(event, 'question')}
                    />
                    <TextInput
                        selectionColor={BLUE}
                        underlineColorAndroid={
                            this.state.isFocused ? BLUE : LIGHT_GRAY
                        }
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        style={styles.textInput}
                        placeholder="What is the explanation"
                        onChangeText={event => this.handleChange(event, 'explanation')}
                    />
                </View>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={(e) => this.handleSubmit(e, true)}>
                    <Text style={styles.submitButtonText}> Set True </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={(e) => this.handleSubmit(e, false)}>
                    <Text style={styles.submitButtonText}> Set False </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#fff',
    },
    upperContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    lowerContainer: {

    },
    submitButton: {
        backgroundColor: '#f9c2ff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        marginBottom: 16,
        width: 200,
        height: 75,
        zIndex: 3, // works on ios
        elevation: 3, // works on android
        alignSelf: 'center',
        borderRadius: 5
    },
    submitButtonText: {
        fontWeight: 'bold'
    },
    textInput: {
        height: 40,
        paddingLeft: 6,
        margin: 16
    }
})

function mapDispatchToProps(dispatch, props) {
    return {
        saveNewCard: (deckTitle, card) => {
            dispatch(handleAddCard(deckTitle, card))
        }
    }
}

export default connect(null, mapDispatchToProps)(NewCard)