import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import {colors, parameters} from '../../global/styles';
import {filterData, restaurantsData} from '../../global/Data';
import FoodCard from '../../components/FoodCart';
import MapMarker from 'react-native-vector-icons/FontAwesome';
import ClockCircle from 'react-native-vector-icons/AntDesign';
import TuneIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapMarkerFloating from 'react-native-vector-icons/FontAwesome';
import Countdown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={true}>
        <View
          style={{backgroundColor: colors.cardbackground, paddingBottom: 5}}>
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
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.smallCardSelected}
                      : {...styles.smallCard}
                  }>
                  <Image
                    style={{height: 60, width: 60, borderRadius: 30}}
                    source={item.image}
                  />

                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? {...styles.smallCardTextSected}
                          : {...styles.smallCardText}
                      }>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headercategoriesview}>
          <Text style={styles.headercategoriestext}>Free Delivery now</Text>
        </View>
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
                color: colors.grey2,
              }}>
              Options changing in
            </Text>
            <Countdown
              until={3600}
              size={14}
              digitStyle={{backgroundColor: colors.lightgreen}}
              digitTxtStyle={{color: colors.cardbackground}}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Min', s: 'Sec'}}
            />
          </View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headercategoriesview}>
          <Text style={styles.headercategoriestext}>Promotions available</Text>
        </View>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headercategoriesview}>
          <Text style={styles.headercategoriestext}>
            Restaurants in your Area
          </Text>
        </View>

        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {restaurantsData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantMapScreen');
            }}>
            <MapMarkerFloating
              name="map-marker"
              size={32}
              color={colors.buttons}
            />

            <Text style={{color: colors.grey2}}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
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
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: '#FFB52E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  smallCardTextSected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },

  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
});
