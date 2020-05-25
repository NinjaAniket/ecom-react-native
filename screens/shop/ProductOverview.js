import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

const ProductOverview = ({navigation}) => {
  const products = useSelector(state => state.productReducer.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          description={itemData.item.description}
          imageUrl={itemData.item.imageUrl}
          onViewDetail={() =>
            navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productName: itemData.item.title,
            })
          }
          addToCart={() => dispatch(cartActions.addToCart(itemData.item))}
        />
      )}
    />
  );
};

ProductOverview.navigationOptions = {
  headerTitle: 'All Products',
};

export default ProductOverview;
