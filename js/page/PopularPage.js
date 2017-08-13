/**
 * Created by gaobin on 2017/7/21.
 */
import React,{Component,PropTypes} from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Button
} from 'react-native'
import NavigatorBar from "../common/NavigatorBar";
import DataRepository from "../expand/dao/DataRepository"
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <View style={styles.container}>
            <NavigatorBar
             title={'最热'}
             style={{backgroundColor:'#188fff'}}
            />

        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:20
    },
    tips:{
        fontSize:18
    },
    row:{
        height:50

    },
    line:{
        height:1,
        backgroundColor:'#808080'
    },
    footer:{
        height:60
    },
    header:{
        height:60
    },
    footerText:{
        justifyContent:'center',
        alignItems:'center',
    }
})