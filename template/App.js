import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const RootStack = createStackNavigator({
  Home,
  Details,
});

export default createAppContainer(RootStack);
