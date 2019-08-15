import React from 'react'
import {View , Text} from 'react-native'
import styles from './styles';
import { CustomButton } from '../customButton';

export const BinaryButton = React.forwardRef((props,ref) =>{
    
    return(
        <View style={styles.buttonWrapper}>
            <CustomButton buttonContainer={props.yesButtonStyle} text={props.firstButtonText || "YES"} onPress={props.onClickYes} buttonText={props.yesButtonText}/>
            <CustomButton ref={ref} buttonContainer={[styles.buttonContainer,props.noButtonStyle]} text={props.secondButtonText || "NO"} onPress={props.onClickNo} buttonText={props.noButtonText}/>
        </View>
    )
})