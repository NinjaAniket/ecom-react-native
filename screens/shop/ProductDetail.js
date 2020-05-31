import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetail = ({navigation, addToCart, itemData}) => {
  const productId = navigation.getParam('productId');
  const selectedProducts = useSelector(state =>
    state.productReducer.availableProducts.find(
      product => product.id === productId,
    ),
  );
  ProductDetail.navigationOptions = navData => {
    return {
      headerTitle: navData.navigation.getParam('productName'),
    };
  };

  return (
    <View>
      <Image style={styles.image} source={{uri: selectedProducts.imageUrl}} />
      <View style={styles.btnContainer}>
        <Button
          style={styles.btn}
          color={Colors.primary}
          title="Add to Cart"
          onPress={addToCart}
        />
      </View>
      <Text style={styles.title}>{selectedProducts.title}</Text>
      <Text style={styles.price}>${selectedProducts.price}</Text>
      <Text style={styles.price}>{selectedProducts.description}</Text>
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    marginVertical: 10,
  },
  btnContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
