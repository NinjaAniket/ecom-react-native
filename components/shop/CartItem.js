import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CartItem = ({quantity, title, price, deleteItemFromCart}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Number of Items: {quantity}</Text>
        <Text>Product Name: {title}</Text>
        <Text>Price: {price}</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Button title="delete" onPress={deleteItemFromCart} />
      </View>
    </View>
  );
};

export default CartItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
