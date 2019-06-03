/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { tsCallSignatureDeclaration } from '@babel/types';


export default class App extends Component {
  render() {

    tsCallSignatureDeclaration(){


      
    }



    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculando IMC</Text>
        <button onPress="this.calcular"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
