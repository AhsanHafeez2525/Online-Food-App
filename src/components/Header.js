import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import {colors,parameters} from '../global/styles'
import Icon from 'react-native-vector-icons/AntDesign'



const Header = ({title,type}) => {
  return (
    <View style={styles.header}>
    <View style={{marginLeft: 20}}>
        <Icon 
        name={type} 
        size={28} 
        color="white"
        onPress={() =>{}}
        />
    </View>
     <Text style={styles.headerText}>{title}</Text>
    </View>

   
  )
  
}
    
  



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },
    headerText:{
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30


    }

})
export default Header
