import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors, parameters, title} from '../../global/styles';
import {Button} from 'react-native-paper';
export default function SignInWelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://images5.alphacoders.com/415/415257.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-photo/mutton-biryani-food-photography_162831-2.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://thedietxperts.in/wp-content/uploads/2020/02/Tandoori-Fish-Tikka.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://img.etimg.com/thumb/msid-81950336,width-1200,height-900,imgsize-1378867,resizemode-8,quality-100/magazines/panache/curious-what-a-balanced-diet-looks-like-eggs-fruits-and-seeds-can-make-a-wholesome-meal.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 0}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            mode="contained"
            style={[styles.styledButton, styles.titleStyleButton]}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}>
            Sign In
          </Button>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <Button
            style={[styles.createButton, styles.createButtonTitle]}
            mode="outlined"
            onPress={() => console.log('Pressed')}>
            Create an account
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  slide1: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
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
    color: colors.grey2,
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
    borderColor: colors.buttons,
    height: 50,
    color: '#ff8c52',
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
});
