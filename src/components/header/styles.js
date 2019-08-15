import {StyleSheet,Platform} from 'react-native'
import { Colors } from '../../theme/colors';

export default StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        backgroundColor:Colors.White,
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:25,
        shadowOpacity:0.1,
        shadowColor:Colors.Black,
        shadowOffset:{
            height: 3,
            width:1
        },
        ...Platform.select({
            android:{
                borderBottomWidth:1,
                borderBottomColor:Colors.Silver
            }
        })
    },
    buttonContainer:{
        marginLeft:15
    },
    text:{
        fontSize:18,
        fontWeight:'400'
    }
})