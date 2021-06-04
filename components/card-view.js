import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Text } from 'react-native-elements'
import { setLocalNotification, clearLocalNotification } from '../utils/api'
import { connect } from 'react-redux'

class Card extends Component {

    state = {
        index: 0,
        score: 0,
        bounceValue: new Animated.Value(1),
        isAnswered: false,
        answer: null
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            title: this.props.deck.title,
        })
    }

    handleChange = (event, answer) => {
        this.setState({
            answer: answer
        })
    }

    handleSubmit = (event) => {
        // Animation sequence
        Animated.sequence([
            Animated.timing(this.state.bounceValue, { duration: 200, toValue: 1.04, useNativeDriver: true }),
            Animated.spring(this.state.bounceValue, { toValue: 1, friction: 4, useNativeDriver: true })
        ]).start()

        // Right answer, increment the score
        if (this.state.answer === this.props.deck.cards[this.state.index].answer) {
            this.setState({
                score: this.state.score + 1
            })
        }

        this.setState({
            isAnswered: true
        })
    }

    handleNext = (event) => {
        // Increase index
        this.setState({
            index: this.state.index + 1,
            isAnswered: false
        })
    }

    handleHome = (event, direction) => {
        clearLocalNotification()
            .then(setLocalNotification)

        if (direction === 'home')
            this.props.navigation.navigate('Home')

        // This will restart the quiz if the user didn't select to go home
        this.setState({
            score: 0,
            index: 0,
            isAnswered: false,
            answer: null
        })
    }

    render() {
        let displayText = ''
        const { bounceValue } = this.state
        if (this.state.index !== this.props.deck.cards.length) {
            displayText = this.state.isAnswered ?
                this.props.deck.cards[this.state.index].explanationText :
                this.props.deck.cards[this.state.index].question
        }
        const Buttons = this.state.isAnswered ?
            <View style={styles.lowerContainer} >
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={(e) => this.handleNext(e)} >
                    <Text style={styles.submitButtonText}>Next</Text>
                </TouchableOpacity>
            </View> :
            <View style={styles.lowerContainer} >
                <View style={styles.radioContainer} >
                    <Text style={styles.radioText}>Correct</Text>
                    <TouchableOpacity
                        style={styles.radioCircle}
                        onPress={(e) => this.handleChange(e, true)} >
                        {this.state.answer === true && <View style={styles.selectedRb} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.radioContainer} >
                    <Text style={styles.radioText}>Incorrect</Text>
                    <TouchableOpacity
                        style={styles.radioCircle}
                        onPress={(e) => this.handleChange(e, false)} >
                        {this.state.answer === false && <View style={styles.selectedRb} />}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={(e) => this.handleSubmit(e)} >
                    <Text style={styles.submitButtonText}>Show Answer</Text>
                </TouchableOpacity>
            </View>
        // Final screen
        if (this.state.index === this.props.deck.cards.length) {
            return (
                <View style={styles.container}>
                    <View style={styles.upperContainer}>
                        <Text h4>You got {this.state.score}/{this.props.deck.cards.length}</Text>
                    </View>
                    <View style={styles.lowerContainer}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={(e) => this.handleHome(e, 'home')} >
                            <Text style={styles.submitButtonText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={(e) => this.handleHome(e, 'startover')} >
                            <Text style={styles.submitButtonText}>Start Over</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        // Quiz in-progress screen
        else {
            return (
                <View style={styles.container}>
                    <Text h5 style={styles.countText}>{this.state.index + 1} / {this.props.deck.cards.length}</Text>
                    <View style={styles.upperContainer} >
                        <Animated.Text style={[{ transform: [{ scale: bounceValue }] },  styles.displayText]} >
                            {displayText}
                        </Animated.Text>
                    </View>
                    {Buttons}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    upperContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 16
    },
    countText: {
        alignSelf: 'flex-start',
        padding: 16
    },
    lowerContainer: {

    },
    radioContainer: {
        marginStart: 16,
        marginEnd: 220,
        marginBottom: 32,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#3740ff',
    },
    submitButton: {
        backgroundColor: '#9bd4e4',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
        height: 75,
        zIndex: 3, // works on ios
        elevation: 3, // works on android
        borderRadius: 5
    },
    submitButtonText: {
        fontWeight: 'bold',
        color: '#3e545b',
        fontSize: 20
    },
    displayText: {
        fontSize: 24
    }
})

function mapStateToProps(state, { route }) {
    const deckID = route.params.deckId
    return {
        deck: state[deckID],
        deckID,
    }
}

export default connect(mapStateToProps)(Card)