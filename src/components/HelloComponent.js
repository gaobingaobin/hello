/**
 * Created by Administrator on 2017-03-26.
 */
import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    } from 'react-native';
export default class HelloComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            count:0,
            txt:"请输入"
        }
        console.log('---constructor---')
    }
    componentWillMount() {
        console.log('---componentWillMount---')

    }
    componentDidMount() {
            console.log('---componentDidMount---')
        }
    componentWillReceiveProps(nextProps){
        console.log('---componentWillReceiveProps---')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('---shouldComponentUpdate---')
        return true
    }
    componentWillUpdate(nextProps,nextState){
        console.log('---componentWillUpdate---')
    }
    componentDidUpdate(nextProps,nextState){
        console.log('---componentDidUpdate---')
    }
    componentWillUnmount(){
        console.log('---componentWillUnmount---')
    }
    render(){
        console.log('---render---')
        return<View>
            <Text style={{fontSize:20}}
                  onPress={()=>{this.setState({count:this.state.count+1,})}}
                >有本事打我啊</Text>
            <Text>你已经被打了{this.state.count}次</Text>
            <TextInput  placeholder={this.state.txt}/>
            <TouchableOpacity
                activeOpacity={0.75}
                style={styles.registerBtn}
            />
        </View>

    }
}
const styles = StyleSheet.create({
    content: {
        paddingTop: 50
    },
    accountWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 30,
        justifyContent: 'space-between',
    },
    accountItem: {
        alignItems: 'center'
    },
    registerBtn: {
        width: 80,
        marginTop: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})