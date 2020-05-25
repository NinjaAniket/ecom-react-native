import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = ({
  price,
  description,
  imageUrl,
  title,
  onViewDetail,
  addToCart,
}) => {
  return (
    <TouchableNativeFeedback onPress={onViewDetail}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: imageUrl}} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={onViewDetail}
          />
          <Button
            color={Colors.primary}
            title="Add to Cart"
            onPress={addToCart}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 300,
    margin: 20,
  },

  details: {
    padding: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '25%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 24,
    color: '#888',
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
