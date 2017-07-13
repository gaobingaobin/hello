/**
 * Created by gaobin on 2017/4/6.
 */
import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View,
   Image,
} from 'react-native';
export default class ImageComponent extends Component{
    render(){
        return (
            <View>
                <Image style={styles.pic} source={{uri: 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>
                </Image>
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
        color: 'red',
    },
    pic: {
        width:100,
        height:100,
    }
});