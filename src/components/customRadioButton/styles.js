import {StyleSheet} from 'react-native'
import { Colors } from '../../theme/colors';

export default StyleSheet.create({
   outerCircle:{
       width:20,
       height:20,
       borderRadius:10,
       borderColor:Colors.Grey,
       backgroundColor:Colors.White,
       borderWidth:1,
       alignItems:'center',
       justifyContent:'center'
   },
   innerCircle:{
    width:10,
    height:10,
    borderRadius:5,
    backgroundColor:Colors.White,
   }
})