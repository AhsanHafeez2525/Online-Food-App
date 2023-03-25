import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import {colors, parameters} from '../../global/styles';
import MapMarker from 'react-native-vector-icons/FontAwesome';
import ClockCircle from 'react-native-vector-icons/AntDesign';
import TuneIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={true}>
        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterview}>
          <View style={styles.addressview}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <MapMarker
                name="map-marker"
                style={{color: colors.grey1}}
                size={26}
              />
              <Text style={{marginLeft: 5}}> 5 Ghori Street</Text>
            </View>
            <View style={styles.clockview}>
              <ClockCircle
                name="clockcircle"
                style={{color: colors.grey1}}
                size={26}
              />
              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View>
            <TuneIcon name="tune" style={{color: colors.grey1}} size={26} />
          </View>
        </View>
        <View style={styles.headercategoriesview}>
          <Text style={styles.headercategoriestext}>Categories</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clockview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressview: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headercategoriestext: {
    color: colors.grey2,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headercategoriesview: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },
});
