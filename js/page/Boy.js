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
import Gril from 'Gril'
import NavigatorBar from '../common/NavigatorBar'
export default class Boy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title={'Boy'}
                    style={{
                        backgroundColor:'#365EFC'
                    }}
                    leftButton={
                        <TouchableOpacity>
                            <Image source={require('../../res/images/ic_arrow_back_white_36pt.png')}/>
                        </TouchableOpacity>
                    }
                    rightButton={
                        <TouchableOpacity>
                            <Image source={require('../../res/images/ic_star.png')}/>
                        </TouchableOpacity>
                    }
                />
                <Text style={styles.text}>I am boy</Text>
                <Text style={styles.text} onPress={() => {
                    this.props.navigator.push({
                            component: Gril,
                            params: {
                                word: '一支玫瑰',
                                onCallBack: (word) => {
                                    this.setState({
                                        word: word
                                    })
                                }
                            }
                        })
                }}>送妹子一支玫瑰</Text>
                <Text style={styles.text}>{this.state.word}</Text>
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