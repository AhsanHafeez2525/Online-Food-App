import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import {colors,parameters} from '../../global/styles'
import Icon from 'react-native-vector-icons/AntDesign'
import Header from '../../components/Header'

export function SignInScreen({title}){
    return(
        <View style={styles.container}>
         <Header title='MY ACCOUNT' type='arrowleft'/>
         <View style={{marginLeft:20, marginTop: 10}}>
            <Text style={styles.text2}>Sign-In</Text>
         </View>
         <View>
            <Text style={styles.text4}>Please enter the email and password</Text>
         </View>

        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1:{
        color:colors.grey4,
        fontSize: 16
    },
    text2: {
        color: '#ff8c52',
        fontSize: 38,
        // textAlign: 'center',

    }
})