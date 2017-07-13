/**
 * Created by gaobin on 2017/4/7.
 */
import React, { Component,} from 'react';
import{
    StyleSheet,
    Image,
    View,
    TextInput,
    Button,
} from 'react-native';
export default class HomeScreen extends Component{
    constructor(props){
        super(props);

    }
    state = {
        username:'',
        password:'',
    };
    _onPress(){
        fetch('//offline-news-api.herokuapp.com/stories')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(stories) {
                console.log(stories);
            });
        alert(this.state.username + this.state.password)

    }

    render()
    {
        const {username, password} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.loginFrom}>
                    <TextInput name={'username'} placeholder={'username'}
                               onChangeText={(value) => this.setState({username: value})}/>
                    <TextInput name={'password'} placeholder={'password'}
                               onChangeText={(value) => this.setState({password: value})}/>
                    <Button title="登录" onPress={() => this._onPress()}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 24,
        backgroundColor: 'white'
    },

    button: {
        backgroundColor: '#1976D2',
        margin: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})
