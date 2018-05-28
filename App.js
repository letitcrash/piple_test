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
  View,
  Dimensions
} from 'react-native';

//The circle must be centered with a diameter of half the width of the screen.
let diameter = Dimensions.get('window').width / 2
const text = "“My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all”- Stephen Hawking"

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
            <Circle text='ttt' />
      </View>
    );
  }
}

class Circle extends Component {
    render() {
        return (
        <View style={styles.circle}>
                <Text style={styles.innertext}>{this.props.text}!</Text> 
        </View>
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
  innertext: {
    color: '#fff',
    textAlign: "center",
  },
});
