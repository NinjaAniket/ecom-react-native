import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderBtn from '../../components/UI/HeaderButton';

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

ProductOverview.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderBtn}>
        <Item
          title="CART"
          color={'#fff'}
          onPress={() => navData.navigation.navigate('CartScreen')}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductOverview;
