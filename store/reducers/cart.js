import {ADD_TO_CART, DELETE_FROM_CART} from '../actions/cart';
import Cart from '../../models/cart';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedProduct = action.product;
      let productPrice = addedProduct.price;
      let productTitle = addedProduct.title;
      if (state.items[addedProduct.id]) {
        //if id exists item is already in cart just increment the quantity
        const updatedCartItems = new Cart(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice,
        );
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: updatedCartItems},
          totalAmount: state.totalAmount + productPrice,
        };
      } else {
        //   (quantity, amount, title, sum)

        let newCartItem = new Cart(1, productPrice, productTitle, productPrice);
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: newCartItem},
          totalAmount: state.totalAmount + productPrice,
        };
      }
  }

  switch (action.type) {
    case DELETE_FROM_CART:
      let selectedCartItems = state.items[action.productId];
      const currentQty = state.items[action.productId].quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        //reduct qty
        let updatedCartItem = new Cart(
          selectedCartItems.quantity - 1,
          selectedCartItems.amount,
          selectedCartItems.title,
          selectedCartItems.sum - selectedCartItems.amount,
        );
        updatedCartItems = {
          ...state.items,
          [action.productId]: updatedCartItem,
        };
      } else {
        //delete product
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.productId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItems.amount,
      };
  }
  return state;
};
