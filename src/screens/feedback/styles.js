import {StyleSheet, Platform,StatusBar} from 'react-native'
import { Colors } from '../../theme/colors';

export default StyleSheet.create({
   title:{
       color:Colors.Grey,
       fontSize:16,
       paddingTop:10
   },
   questionContainer:{
    paddingVertical:25,
    borderBottomColor:Colors.Silver,
    borderBottomWidth:1
   },
   
   mainContainer:{
       paddingHorizontal:10,
   },
   questionStyle:{
       color:Colors.Black,
       fontSize:16,
       fontWeight:'400'
   },
   highlightButton: {
       backgroundColor: Colors.Red
   },
   highlightButtonText:{
       color:Colors.White
   },
   optionWrapper:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginVertical:5
   },
   optionsContainer: {
       backgroundColor: Colors.Silver,
       borderRadius: 5,
       padding: 10,
       marginRight: 50,
   },
   textInputStyle: {
       backgroundColor: Colors.White,
       borderRadius: 4,
       height: 60,
       borderWidth: 1,
       borderColor: Colors.Grey,
       paddingHorizontal:10,
   },
   BinaryButtonWrapper:{
       paddingVertical:10
   },
   triangle:{
       backgroundColor:Colors.Transparent,
       height:20,
       width:20,
       borderLeftWidth:10,
       borderTopWidth:0,
       borderBottomWidth:20,
       borderRightWidth:10,
       borderLeftColor:Colors.Transparent,
       borderRightColor:Colors.Transparent,
       borderBottomColor:Colors.Silver
   },
   AndroidSafeArea: {
       flex: 1,
       ...Platform.select({
           android: {
               paddingTop: StatusBar.currentHeight
           }
       })
  }
})