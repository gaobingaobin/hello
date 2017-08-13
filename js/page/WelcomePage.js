/**
 * Created by gaobin on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react';
import {
    Text,
    View,
} from 'react-native'
import NavigatorBar from "../common/NavigatorBar";
import HomePage from '../../js/page/HomePage';
export default class WelcomePage extends Component{
    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000)
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    render(){
        return <View>
            <NavigatorBar
             title={'欢迎'}
            />
            <Text>欢迎</Text>
        </View>
    }
}