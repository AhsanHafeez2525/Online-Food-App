import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {colors, parameters} from '../../global/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Visibility from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import {Button} from 'react-native-paper';
export function SignInScreen({navigation}) {
  const [textInput2Foccused, setTextInput2Foccused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrowleft" navigation={navigation} />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={styles.text2}>Sign-In</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>
      <View>
        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Foccused ? ' ' : 'fadeInLeft'}
            duration={400}>
            <Icon name="lock" style={{color: colors.grey3}} size={16} />
          </Animatable.View>
          <TextInput
            //  style={styles.TextInput1}
            style={{width: '80%'}}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Foccused(false);
            }}
            onBlur={() => {
              setTextInput2Foccused(true);
            }}
          />
          <Animatable.View
            animation={textInput2Foccused ? ' ' : 'fadeInLeft'}
            duration={400}>
            <Visibility
              name="visibility-off"
              style={{color: colors.grey3, marginRight: 10}}
              size={16}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          mode="contained"
          style={[styles.styledButton, styles.titleStyleButton]}
          onPress={() => console.log('Pressed')}>
          Sign In
        </Button>
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          {' '}
          Forget Password ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <Button
          icon="facebook"
          mode="contained"
          style={[styles.SocialIcon, styles.fbTitle]}
          onPress={() => console.log('Pressed')}>
          Sign In With Facebook
        </Button>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <Button
          icon="google"
          mode="contained"
          style={[styles.GoogleIcon, styles.GoogleTitle]}
          onPress={() => console.log('Pressed')}>
          Sign In With Google
        </Button>
      </View>
      <View style={{marginTop: 25, marginLeft: 20}}>
        <Text style={{...styles.text1}}>New on Xatti'sFood ?</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          style={[styles.createButton, styles.createButtonTitle]}
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Create an account
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  text2: {
    color: '#ff8c52',
    fontSize: 38,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 15,
  },
  styledButton: {
    backgroundColor: '#ff8c52',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderwidth: 1,
    borderColor: '#FfBc52',
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },
  titleStyleButton: {
    color: 'white',
    fontsize: 20,
    fontweight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  SocialIcon: {
    backgroundColor: '#4267B2',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderwidth: 1,
    borderColor: '#FfBc52',
    height: 50,
    paddingHorizontal: 20,
    width: '93%',
    marginLeft: 12,
  },
  fbTitle: {
    color: 'white',
    fontsize: 20,
    fontweight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  GoogleIcon: {
    backgroundColor: '#FF3E30',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderwidth: 1,
    borderColor: '#FfBc52',
    height: 50,
    paddingHorizontal: 20,
    width: '93%',
    marginLeft: 12,
  },
  GoogleTitle: {
    color: 'white',
    fontsize: 20,
    fontweight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    // paddingHorizontal: 1,
    color: '#ff8c52',
    // paddingBottom: 1,
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 38,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
});
