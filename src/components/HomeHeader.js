import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, parameters} from '../global/styles';
import Icon from 'react-native-vector-icons/Entypo';
import Cart from 'react-native-vector-icons/AntDesign';
const HomeHeader = () => {
  //   const CartIcon = Cart(0)(IconCart);
  //   const BadgeIcon = Cart(0)(Icon);

  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon name="menu" color={colors.cardbackground} size={32} />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Xatti's Food
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <Cart name="shoppingcart" size={35} color={colors.cardbackground} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
});
export default HomeHeader;
