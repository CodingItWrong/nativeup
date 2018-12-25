import React from 'react';
import { Text, View } from 'react-native';
import Auth from './src/Auth';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default class App extends React.Component {
  render() {
    return (
      <Auth>
        <View>
          <Text>Hello, world</Text>
        </View>
      </Auth>
    );
  }
}
