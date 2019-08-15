import React from 'react'
import {View , Text, TouchableOpacity} from 'react-native'
import styles from './styles';

export const CustomButton = React.forwardRef((props,ref) =>{
   
    return(
        <TouchableOpacity ref={ref} style ={[styles.buttonContainer, props.buttonContainer ]}onPress = {props.onPress}>
            <Text style={[styles.buttonText,props.buttonText]} >
                {props.text}
            </Text>
        </TouchableOpacity>
    )
})