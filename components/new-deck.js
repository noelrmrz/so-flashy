import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

class NewDeck extends Component {

    state = {
        name: ''
    }

    handleChange = (text) => {
        this.setState({
            name: text
        })
    }

    handleSubmit = () => {
        // createNewDeck(this.state.name)
    }

    render() {
        return (
            <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder="Give your deck a name"
              onChangeText={this.handleChange}
              defaultValue={text}
            />
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.handleSubmit()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
          </View>
        )
    }
}

export default NewDeck;