import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'
import { connect } from 'react-redux'
import { generateID } from '../utils/api'

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

    handleSubmit = (event) => {
        const deck = { title: this.state.name, id: generateID(), cards: []}
        this.props.dispatch(addDeck(deck))
        saveDeck(deck)

        this.setState({
            name: ''
        })

        this.props.navigation.navigate('Home')
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
                        onPress={(e) => this.handleSubmit(e)}>
                        <Text style={styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const BLUE = "#39ace7";
const LIGHT_GRAY = "#D3D3D3";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    upperContainer: {
        flex: 1,
        justifyContent: 'center'
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
        color: '#3e545b',
    },
    textInput: {
        height: 40,
        paddingLeft: 6,
        margin: 16,
        color: '#3e545b',
    }
})

function mapStateToProps(state){
    return{
        state
    }
}

export default connect(mapStateToProps, null)(NewDeck);