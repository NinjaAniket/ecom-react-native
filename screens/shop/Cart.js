import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import Colors from '../../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../components/shop/CartItem';
import * as CartActions from '../../store/actions/cart';
const Cart = () => {
  const totalPrice = useSelector(state => state.cartReducer.totalAmount);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => {
    let cartItemArr = [];

    for (let item in state.cartReducer.items) {
      cartItemArr.push({
        id: item,
        title: state.cartReducer.items[item].title,
        amount: state.cartReducer.items[item].amount,
        quantity: state.cartReducer.items[item].quantity,
        sum: state.cartReducer.items[item].sum,
      });
    }
    return cartItemArr;
  });

  const deleteHandler = () => {};
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>{totalPrice.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          color={Colors.primary}
          disabled={cartItems.length === 0}
        />
      </View>
      <FlatList
        data={cartItems}
        renderItem={itemData => (
          <CartItem
            title={itemData.item.title}
            price={itemData.item.amount}
            quantity={itemData.item.quantity}
            deleteItemFromCart={() =>
              dispatch(CartActions.deleteFromCart(itemData.item.id))
            }
          />
        )}
      />
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    borderRadius: 10,
  },
  amount: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
