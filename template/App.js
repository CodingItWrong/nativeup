import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const RootStack = createStackNavigator({
  Home,
  Details,
});

export default createAppContainer(RootStack);
