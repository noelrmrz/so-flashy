import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Text } from 'react-native-elements'

class NewDeck extends Component {

    state = {
        isAnswered: false
    }

    handleSubmit = () => {
        // createNewDeck(this.state.name)
    }

    handleFocus = event => {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    handleBlur = event => {
        this.setState({ isFocused: false });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text h5 style={styles.countText}>Question count</Text>
                <View style={styles.upperContainer} >
                
                    <Text h4>The question text goes here</Text>
                </View>
                <View style={styles.lowerContainer} >
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.handleSubmit
                        }>
                        <Text style={styles.submitButtonText}> True </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.handleSubmit
                        }>
                        <Text style={styles.submitButtonText}> False </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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

export default NewDeck;