import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

class NewDeck extends Component {

    state = {
        name: '',
        isFocused: false
    }

    handleChange = event => {
        this.setState({
            name: event
        })
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
                <View style={styles.upperContainer} >
                    <TextInput
                        selectionColor={BLUE}
                        underlineColorAndroid={
                            this.state.isFocused ? BLUE : LIGHT_GRAY
                        }
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        style={styles.textInput}
                        placeholder="Give your deck a name"
                        onChangeText={e => this.handleChange(e)}
                        defaultValue={this.state.name}
                    />
                </View>
                <View style={styles.lowerContainer} >
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.props.navigation.navigate('Home') }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
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

export default NewDeck;