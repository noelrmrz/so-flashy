import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements'

class Card extends Component {

    state = {
        index: 0,
        score: 0
    }

    handleSubmit = (event, answer) => {
        // Right answer, increment the score
        if (answer === this.props.navigation.state.params.item.cards[this.state.index].value) {
            this.setState({
                score: this.state.score + 1
            })
        }

        // Increase index
        this.setState({
            index: this.state.index + 1
        })
    }

    render() {
        if (this.state.index === this.props.navigation.state.params.item.cards.length) {
            return (
                <View style={styles.container}>
                    <Text h4>You got {this.state.score}/{this.props.navigation.state.params.item.cards.length}</Text>
                    <TouchableOpacity
                            style={styles.submitButton}
                            onPress={(e) => this.props.navigation.navigate('Home')} >
                            <Text style={styles.submitButtonText}> Home </Text>
                        </TouchableOpacity>
                </View>
                
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <Text h5 style={styles.countText}>{this.state.index + 1} / {this.props.navigation.state.params.item.cards.length}</Text>
                    <View style={styles.upperContainer} >
                        <Text h4>{this.props.navigation.state.params.item.cards[this.state.index].question}</Text>
                    </View>
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
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
    }
})

export default Card;