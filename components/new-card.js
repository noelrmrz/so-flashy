import React, { Component } from 'react';
import { Text, TextInput, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

class NewCard extends Component {

    state = {
        answered: ''
    }

    handleChange = event => {
        this.setState({
            answered: event
        })
        // animate card to flip show answer
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
                        placeholder="Give your deck a name"
                        onChangeText={event => this.handleChange(event)}
                        defaultValue={this.state.name}
                    />
                </View>
            <TouchableOpacity
               style = {styles.submitButton}
               value = {false}
               onPress={() => this.props.navigation.navigate('Home') }>
               <Text style = {styles.submitButtonText}> Submit </Text>
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

export default NewCard;