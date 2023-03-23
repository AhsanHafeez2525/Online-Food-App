import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {colors} from './src/global/styles';
import RootNavigation from './src/navigation/RootNavigation';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <RootNavigation />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
