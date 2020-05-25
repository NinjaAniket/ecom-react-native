import React from 'react';
import {View, Text} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';

import ShopNavigation from './navigation/ShopNavigation';
import {composeWithDevTools} from 'redux-devtools-extension';
const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
};

export default App;
