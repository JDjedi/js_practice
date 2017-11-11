import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Herro world!</Text>
        <Image
          style={{width: 350, height: 350}}
          source={{uri: 'https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/22708847_1671533629557873_4408230363894120448_n.jpg'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
