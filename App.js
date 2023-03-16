import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {colors} from './src/global/styles';
import {SignInScreen} from './src/screens/authScreens/SignInScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Visibility from 'react-native-vector-icons/MaterialIcons';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <SignInScreen />
      <Icon name="lock" style={{color: colors.grey3}} size={16} />
      <Visibility
        name="visibility-off"
        style={{color: colors.grey3, marginRight: 10}}
        size={16}
      />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
