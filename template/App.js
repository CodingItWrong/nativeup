import React from 'react';
import { Text, View } from 'react-native';
import Auth from './src/Auth';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text testID="welcome">Hello, world</Text>
        <Auth>
          <View>
            <Text>Logged in</Text>
          </View>
        </Auth>
      </View>
    );
  }
}
