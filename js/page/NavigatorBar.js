/**
 * Created by gaobin on 2017/7/14.
 */
import React,{Component,PropTypes} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native'
const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
export default class NavigatorBar extends Component{
    static propTypes = {
        style:View.propTypes.style,
        title:PropTypes.string,
        titleView:PropTypes.element,
        hide:PropTypes.bool,
    }
}
