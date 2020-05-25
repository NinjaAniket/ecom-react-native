import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ProductOverview from '../screens/shop/ProductOverview';
import Colors from '../constants/Colors';
import ProductDetail from '../screens/shop/ProductDetail';

const ProductStackNavigator = createStackNavigator(
  {
    ProductOverview,
    ProductDetail,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#fff',
    },
  },
);

export default createAppContainer(ProductStackNavigator);
