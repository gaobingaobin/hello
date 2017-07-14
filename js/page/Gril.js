/**
 * Created by gaobin on 2017/7/14.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
export default class Gril extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }
    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.text}>I am gril</Text>
            <Text style={styles.text}>收到：{this.props.word}</Text>
            <Text style={styles.text} onPress={() => {
                this.props.onCallBack("一盒巧克力")
                this.props.navigator.pop()//关闭页面
            }}>回赠巧克力</Text>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center'
    },
    text:{
        fontSize:20
    }
})