import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AddBill from './screens/AddBill';
import Home from './screens/Home';

const MainNavigator = createStackNavigator({
  Home,

  AddBill,
});

export default createAppContainer(MainNavigator);
