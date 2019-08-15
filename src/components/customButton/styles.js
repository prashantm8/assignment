import {StyleSheet} from 'react-native'
import { Colors } from '../../theme/colors';

export default StyleSheet.create({
    buttonContainer:{
        borderWidth:1,
        borderColor:Colors.Red,
        borderRadius:15,
        paddingHorizontal:18,
        paddingVertical:6,
        backgroundColor:Colors.White
    },
    buttonText:{
        fontSize:14,
        color:Colors.Red
    }
})