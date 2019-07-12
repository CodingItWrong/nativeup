import React from 'react';
import { Text, View } from 'react-native';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text testID="welcome">Hello, world</Text>
      </View>
    );
  }
}
