/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';

class Botao extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth:2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius: 25
      }, 

      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

      },

      botaoText: {
        fontSize:15,
        color:props.color,
        fontWeight:'bold'
      }

    });

  }


  render (){
    return(
        <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress} >
          <View style={this.styles.botaoArea}>
            <Text style={this.styles.botaoText}>{this.props.Text}</Text>
          </View>
        </TouchableOpacity>

      )
  }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {texto:'Frase 0'};
    this.frases = [ 'Frase 1', 'Frase 2', 'Frase 3',
                    'Frase 4', 'Frase 5', 'Frase 6', 
                    'Frase 7', 'Frase 8', 'Frase 9', 
                    'Frase 10', 'Frase 11', 'Frase 12',  ];
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

quebrarBiscoito(){
  let s = this.state;
  let r = Math.floor(Math.random() * this.frases.length);

  s.texto = this.frases[r];
  this.setState(s);
}


  render() {
    return (
        <View style={styles.body}>
          <Image source={require('./images/cookie.png')} />
          <Text style={styles.texto}>"{this.state.texto}"</Text>
          <Botao color='#b59619' Text="Quebrar biscoito" onPress={this.quebrarBiscoito}/> 
        </View>
    );
  }
}


const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    fontSize:17,
    color:'#b59619',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  }
});