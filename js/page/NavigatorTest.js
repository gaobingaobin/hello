/**
 * Created by gaobin on 2017/7/14.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Navigator
} from 'react-native';
import Boy from "../../js/page/Boy"
export default class NavigatorTest extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Navigator
                    initialRoute={{
                        component:Boy
                    }}
                    renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return <Component navigator = {navigator}{...route.params}
                    />
                }}/>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    page1:{
        flex:1,
        backgroundColor:'red'
    },
    page2:{
        flex:1,
        backgroundColor:'yellow'
    },
    image:{
        height:22,
        width:22
    }
})