/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {n:0, botao:'CRONOMETRAR'};
    this.timer = null;
    this.zerar = this.zerar.bind(this);
    this.cronometrar = this.cronometrar.bind(this);
  }

  cronometrar(){

    let s = this.state;


    //parar o timer
    if (this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      s.botao = "CRONOMETRAR";
    } //iniciar o timer
      else {
      this.timer = setInterval(
          ()=>{
            let s = this.state;
            s.n += 0.1;
            this.setState(s);
          }, 100);
        s.botao = "PAUSAR";
    }
    this.setState(s);

  }

  zerar(){

    if (this.timer != null){
          clearInterval(this.timer);
          this.timer = null;
        } //iniciar o timer
          else {
            let s = this.state;
            s.n = 0;
            s.botao = "CRONOMETRAR"; 
            this.setState(s);
          }
  }


  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./images/relogio.png')} />
        <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>


        <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao} onPress={this.cronometrar}>
            <Text style={styles.botaoText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.zerar}>
            <Text style={styles.botaoText}>ZERAR</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#2c1f30'
    },

    timer: {
      color:'#baa07a',
      fontSize:80,
      fontWeight:'bold',
      backgroundColor:'transparent',
      marginTop:-160

    },
    botaoArea:{
      flexDirection:'row',
      height:40,
      marginTop:80
    },
    botao:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#886532',
      height:40,
      borderRadius:5,
      margin:10

    },
    botaoText:{
      fontSize:18,
      fontWeight:'bold'
    }
});