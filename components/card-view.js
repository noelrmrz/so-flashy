import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, Animated } from 'react-native';
import { Text } from 'react-native-elements'
import { setLocalNotification, clearLocalNotification } from '../utils/api'

class Card extends Component {

    state = {
        index: 0,
        score: 0,
        bounceValue: new Animated.Value(1),
        isAnswered: false
    }

    handleSubmit = (event, answer) => {

        // Animation sequence
        Animated.sequence([
            Animated.timing(this.state.bounceValue, { duration: 200, toValue: 1.04, useNativeDriver: true }),
            Animated.spring(this.state.bounceValue, { toValue: 1, friction: 4, useNativeDriver: true })
        ]).start()

        // Right answer, increment the score
        if (answer === this.props.navigation.state.params.item.cards[this.state.index].value) {
            this.setState({
                score: this.state.score + 1
            })
        }

        this.setState({
            isAnswered: true
        })
    }

    handleNext = (event, answer) => {
        // Increase index
        this.setState({
            index: this.state.index + 1,
            isAnswered: false
        })
    }

    handleHome = (event) => {
        clearLocalNotification()
          .then(setLocalNotification)

        this.props.navigation.navigate('Home')
    }

    render() {
        let displayText = ''
        const { bounceValue } = this.state
        if (this.state.index !== this.props.navigation.state.params.item.cards.length) {
            displayText = this.state.isAnswered ?
            this.props.navigation.state.params.item.cards[this.state.index].explanation :
            this.props.navigation.state.params.item.cards[this.state.index].question
        }
        const Buttons = this.state.isAnswered ?
            <View style={styles.lowerContainer} >
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={(e) => this.handleNext(e, true)} >
                    <Text style={styles.submitButtonText}> Next </Text>
                </TouchableOpacity>
            </View> :
            <View style={styles.lowerContainer} >
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={(e) => this.handleSubmit(e, true)} >
                    <Text style={styles.submitButtonText}> True </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={(e) => this.handleSubmit(e, false)} >
                    <Text style={styles.submitButtonText}> False </Text>
                </TouchableOpacity>
            </View>
        // Final screen
        if (this.state.index === this.props.navigation.state.params.item.cards.length) {
            return (
                <View style={styles.container}>
                    <Text h4>You got {this.state.score}/{this.props.navigation.state.params.item.cards.length}</Text>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={(e) => this.handleHome(e)} >
                        <Text style={styles.submitButtonText}> Home </Text>
                    </TouchableOpacity>
                </View>

            )
        }
        // Quiz in-progress screen
        else {
            return (
                <View style={styles.container}>
                    <Text h5 style={styles.countText}>{this.state.index + 1} / {this.props.navigation.state.params.item.cards.length}</Text>
                    <View style={styles.upperContainer} >
                        <Animated.Text style={[{ transform: [{ scale: bounceValue }] }]} >
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
    submitButton: {
        backgroundColor: '#9bd4e4',
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
        fontWeight: 'bold',
        color: '#3e545b'
    }
})

export default Card;