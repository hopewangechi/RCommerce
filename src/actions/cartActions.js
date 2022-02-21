import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const AddToCartAction = (product) => async (dispatch, getState) => {
  const {
    cartList: { cart },
  } = getState();

  dispatch({
    type: ADD_TO_CART,
    payload: [...cart, { ...product, qty: 1 }],
  });
};

localStorage.setItem('cart', JSON.stringify())

export const RemoveFromCart = (products) => async (dispatch, getState) => {
  const {
    cartList: { cart },
  } = getState();

  dispatch({
    type: REMOVE_FROM_CART,
    payload: cart.filter((p) => p._id !== products._id),
  });
};

export const RemoveFromHeaderCart = (product) => async (dispatch, getState) => {
  const {
    cartList: { cart },
  } = getState();

  dispatch({
    type: REMOVE_FROM_CART,
    payload: cart.filter((p) => p._id !== product._id),
  });
};
