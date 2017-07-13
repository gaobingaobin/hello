/**
 * Created by gaobin on 2017/4/6.
 */
import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
export default class ButtonComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            w: 100,
            h: 100,
        }
    }
  _onPress(){
      this.setState({
          w:this.state.w+15,
          h:this.state.h+15,
      })
  }
    render() {
      return (
          <View>
              <View style={[styles.box,{width: this.state.w, height: this.state.h}]}> </View>
              <TouchableOpacity onPress={this._onPress()}>
                      <Text style={styles.buttonText}>Press me!</Text>
              </TouchableOpacity>
          </View>
      )
    }

}
const styles = StyleSheet.create({
    box:{
        backgroundColor:'red'
    },
    button:{
        width:80,
        height:30,
        backgroundColor:'#465fff'

},
    buttonText:{
        fontSize:20,
        color:'#fbfff9',
    }
})
