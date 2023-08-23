export const ADD_TO_CART = "ADD_TO_CART";
// export const INC_CART = "INC_CART";
// export const DEC_CART = "DEC_CART";
// export const DEL_CART = "DEL_CART";
export const SET_EMAIL = "SET_EMAIL";
export const SET_USER = "SET_USER";
// export const RESET_CART = "RESET_CART";
export const LOG_OUT = "LOG_OUT";
// export const SET_CARTLIST = "SET_CARTLIST";
export const SET_PRODUCT_ID = "SET_PRODUCT_ID";

export function addToCartAction({
  id,
  name,
  image,
  description,
  price,
  units,
}) {
  return {
    type: ADD_TO_CART,
    payload: { id, name, image, description, price, units },
  };
}

// export function incrementUnitsCartAction({
//   id,
//   name,
//   image,
//   description,
//   price,
//   units,
// }) {
//   return {
//     type: INC_CART,
//     payload: { id, name, image, description, price, units },
//   };
// }

// export function decrementUnitsCartAction({
//   id,
//   name,
//   image,
//   description,
//   price,
//   units,
// }) {
//   return {
//     type: DEC_CART,
//     payload: { id, name, image, description, price, units },
//   };
// }

// export function deleteItemFromCart({
//   id,
//   name,
//   image,
//   description,
//   price,
//   units,
// }) {
//   return {
//     type: DEL_CART,
//     payload: { id, name, image, description, price, units },
//   };
// }

export function setUserEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email,
  };
}
export function setProductId(id) {
  return {
    type: SET_PRODUCT_ID,
    payload: id,
  };
}
export function setUserDetails(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
// export function setItemList(CartList) {
//   return {
//     type: SET_CARTLIST,
//     payload: CartList,
//   };
// }

// export function resetCartDetails() {
//   return {
//     type: RESET_CART,
//   };
// }

export function logOutUser() {
  return {
    type: LOG_OUT,
  };
}
