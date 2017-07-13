/**
 * Created by gaobin on 2017/4/6.
 */
import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    Button,
    View,
    TextInput,
} from 'react-native';
 export default class login extends Component{
    constructor(props){
        super(props);

    }
    state = {
        username:'',
        password:'',
    };
    _onPress(){
        alert(this.state.username + this.state.password)

    }
    render()
    {
        const {username, password} = this.state;
        return (
            <View style={styles.container}>
                <TextInput name={'username'} placeholder={'username'}
                           onChangeText={(value) => this.setState({username: value})}/>
                <TextInput name={'password'} placeholder={'password'}
                           onChangeText={(value) => this.setState({password: value})}/>
                <Button title="登录" onPress={() => this._onPress()}/>
            </View>
        )
    }
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: metrics.DEVICE_WIDTH,
        height: metrics.DEVICE_HEIGHT,
        paddingTop: 24,
        backgroundColor: 'white'
    }
})

