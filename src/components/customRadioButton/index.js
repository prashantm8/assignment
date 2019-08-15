import React from 'react'
import {TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { Colors } from '../../theme/colors';

export const CustomRadioButton = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.outerCircle,props.isSelected ? {borderColor:Colors.Red}:{}]}>
            <View style={[styles.innerCircle, props.isSelected ? {backgroundColor:Colors.Red}:{}]}/>
        </TouchableOpacity>
    )
}
