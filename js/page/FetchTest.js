/**
 * Created by gaobin on 2017/7/18.
 */

/**
 * Created by gaobin on 2017/7/14.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar';
import HttpUtil from '../../js/util/HttpUtil'
export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            result:''
        }

    }
    onLoad(url){
        HttpUtil.get(url)
            .then(result=>{
                this.setState({
                   result:JSON.stringify(result)
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                })
            })
    }

    onSubmit(url,data){
      HttpUtil.post(url,data)
            .then(result=>{
                this.setState({
                    result:JSON.stringify(result)
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                })
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title={'Fetch的使用'}
                    style={{
                        backgroundColor:'#365EFC'
                    }}
                />
               <Button title="获取数据" onPress={()=>this.onLoad('http://rapapi.org/mockjsdata/22666/getInfo')} />
                <Button title="提交数据" onPress={()=>this.onSubmit('http://rapapi.org/mockjsdata/22666/login',{username:"gaobin",password:'123123'})} />
                <View>
                    <Text>返回的数据：{this.state.result}</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:20
    }
})