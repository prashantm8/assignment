import React from 'react'
import {View , Text} from 'react-native'
import styles from './styles';
import { CustomButton } from '../customButton';

export const Header = (props) =>{
    
    return(
        <View style={styles.wrapper}>
            <Text style= {styles.text}>{props.headerText}</Text>
            <Text>{`${props.selectedQuestion}/${props.totalQuestions}`}</Text>
        </View>
    )
}