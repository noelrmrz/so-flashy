import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'

class DeckDetail extends Component {

    render() {
        const {deck} = this.props;
        return (
            <View style={styles.container}>
                <Text h5 style={styles.countText}>{deck.cards.length} Cards</Text>
                <Text h3 style={styles.headerText}>{deck.title}</Text>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('CardView', {deckId: deck.id})} >
                    <Text style={styles.buttonText}> Start Quiz </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('NewCard', {deckId: deck.id}) }>
                    <Text style={styles.buttonText}> Add Questions </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    submitButton: {
      backgroundColor: '#9bd4e4',
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
        fontWeight: 'bold',
        color: '#3e545b'
    },
    countText: {
        flex: 1,
        margin: 16
    },
    headerText: {
        flex: 2,
        alignSelf: 'center',
        color: '#3e545b'
    }
  })

  function mapStateToProps(state, props) {
    const deckID = props.navigation.state.params.deckId
    return {
        deck: state[deckID],
        deckID,
    }
}

export default connect(mapStateToProps)(DeckDetail)