/**
 * Created by gaobin on 2017/7/18.
 */
import React, {Component} from 'react';
import {
    Text,
    ListView,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import NavigatorBar from '../common/NavigatorBar'
var data = {
    "result":[
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        }
        ,
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        },
        {
            "email":"4554256@qq.com",
            "fullname":"陈果"
        }
    ],
    "statusCode":0
}
import Toast, {DURATION}from 'react-native-easy-toast';
export default class ListViewTest extends Component{
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading:true
        };
        this.onLoad();
    }
    renderRow(rowData){
        return <View style={styles.row}>
            <TouchableOpacity
            onPress = {()=>{
                this.toast.show('单机了：'+rowData.fullname,DURATION.LENGTH_LONG)
            }}
            >
            <Text style={styles.tips}>{rowData.fullname}</Text>
            <Text>{rowData.email}</Text>
            </TouchableOpacity>
            </View>
    }
    renderSeparator(rowData, sectionID, rowID, highlightRow){
        return <View  style={styles.line}>
        </View>
    }
    renderFooter(){
        return <View style={styles.footer}>
            <Text style={styles.footerText}>我是有底线的</Text>
        </View>
    }
    onLoad(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },2000)
    }
    render() {
        return (
        <View style={styles.container}>
            <NavigatorBar
            title={'ListViewTest'}
            style={{
                backgroundColor:'#4A9EF2'
            }}
            />
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>this.renderRow(rowData)}
                renderSeparator={(rowData, sectionID, rowID, highlightRow)=>this.renderSeparator(rowData, sectionID, rowID, highlightRow)}
                renderFooter={()=>this.renderFooter()}
                refreshControl = {<RefreshControl refreshing={this.state.isLoading} onRefresh={()=>this.onLoad()}/>}
            />
            <Toast ref = {toast=>{this.toast = toast}}/>
        </View>

        );
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