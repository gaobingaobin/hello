/**
 * Created by gaobin on 2017/7/14.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar'
export default class Gril extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }
    barButton(image){
        return <TouchableOpacity
            onPress={()=>{
            this.props.navigator.pop();
            }
            }
        >
            <Image  style={{width:22,height:22,margin:5}} source={image}/>
        </TouchableOpacity>
    }
    render(){
        return(
        <View style={styles.container}>
            <NavigatorBar title={'Gril'} style={{
                backgroundColor:'#E1518E'
            }}
            leftButton={
                this.barButton(require('../../res/images/ic_arrow_back_white_36pt.png'))
            }
            rightButton={
                this.barButton(require('../../res/images/ic_star.png'))
            }
            />
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
        backgroundColor:'white'
    },
    text:{
        fontSize:20
    }
})