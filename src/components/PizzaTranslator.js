
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class pizzaTranslator extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }
    render(){
        return (
            <View>
                <TextInput style={{height: 40}} placeholder="改变"
                           onChangeText={(text)=> this.setState({text})}/>
                <Text style={{padding:10,fontSize:42}}
                      {this.state.text.split(' ').map((word)=> word && '🍕').join(' ')}
                ></Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

