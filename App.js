/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions
} from 'react-native';

//The circle must be centered with a diameter of half the width of the screen.
let diameter = Dimensions.get('window').width / 2

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            text: '"My goal is simple.It is a complete understanding of the universe, why it is as it is and why it exists at all”- Stephen Hawking',
        };
    }

    render() {
        return (
                <View style={styles.container}>
                <Text style={styles.countText}>{this.state.text.length}</Text>
                <Circle text={this.state.text} />
                <UselessTextInput
            multiline = {true}
            numberOfLines = {4}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
                />
                </View>
        );
    }
}

class Circle extends Component {
    render() {
        if(this.props.text.length < 140) {
            return (
                    <View style={styles.circle}>
                    <Text style={styles.normalText}>{this.props.text}!</Text>
                    </View>
            );
        } else {
            return (
                    <Text style={styles.warningText}>String length exceeded!</Text>
            );
        }
    }
}

class UselessTextInput extends Component {
    render() {
        return (
                <TextInput
            {...this.props}
            style={styles.textInput}
            editable = {true}
            maxLength = {150}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    circle: {
        width: diameter,
        height: diameter,
        borderRadius: diameter / 2 ,
        backgroundColor: '#00BCD4',
        justifyContent: "center",
    },
    normalText: {
        color: '#fff',
        textAlign: "center",
    },
    warningText: {
        color: 'red',
        textAlign: "center",
    },
    countText: {
        color: 'grey',
        textAlign: "right",
    },
    textInput: {
        color: 'grey',
        textAlign: "center",
    },
});
