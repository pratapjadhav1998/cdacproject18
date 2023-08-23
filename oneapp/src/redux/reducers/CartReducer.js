import {
  // ADD_TO_CART,
  // RESET_CART,
  SET_EMAIL,
  SET_USER,
  LOG_OUT,
} from "../actions/CartAction";
// import { INC_CART } from "../actions/CartAction";
// import { DEC_CART } from "../actions/CartAction";
// import { DEL_CART } from "../actions/CartAction";
// import { SET_PRODUCT_ID } from "../actions/CartAction";

const initialState = {
  cartList: [],
  total: 0,
  email: "",
  id: 0,
  user: JSON.parse(sessionStorage.getItem("user")),
};

export default function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    //     case ADD_TO_CART: {
    //       let updatedState = null;
    //       const product = action.payload;
    //       const cart = state;
    //       //const cartList =cart.cartList;
    //       console.log("State", cart.cartList);
    //       const checkProduct = cart.cartList.filter((p) => p.id == product.id);
    //       if (checkProduct.length > 0) {
    //         console.log("Here in If" + product);
    //         const otherProduct = cart.cartList.filter((p) => p.id !== product.id);
    //         let units = checkProduct[0].units + 1;
    //         const updated = {
    //           ...checkProduct[0],
    //           units: checkProduct[0].units + 1,
    //         };
    //         updatedState = {
    //           ...cart,
    //           cartList: [...otherProduct, updated],
    //         };
    //       } else {
    //         console.log("Here in else" + product);
    //         product.units = 1;
    //         let cartList = cart.cartList;
    //         cartList.push(product);
    //         updatedState = {
    //           ...cart,
    //           cartList: cartList,
    //         };
    //       }
    //       let totalPrice = 0;
    //       let listC = updatedState.cartList;
    //       updatedState.cartList.forEach((element) => {
    //         console.log(element.units);
    //         totalPrice += element.units * element.price;
    //       });
    //       console.log(totalPrice);
    //       updatedState = {
    //         ...cart,
    //         cartList: listC,
    //         total: totalPrice,
    //       };
    //       console.log("updated", updatedState);
    //       return updatedState;
    //     }
    //     case INC_CART: {
    //       let updatedState = null;
    //       const product = action.payload;
    //       const cart = state;
    //       console.log("State", cart.cartList);
    //       const checkProduct = cart.cartList.filter((p) => p.id == product.id);
    //       console.log("Here in If present" + product);
    //       const otherProduct = cart.cartList.filter((p) => p.id !== product.id);
    //       let units = checkProduct[0].units + 1;
    //       const updated = {
    //         ...checkProduct[0],
    //         units: checkProduct[0].units + 1,
    //       };
    //       updatedState = {
    //         ...cart,
    //         cartList: [...otherProduct, updated],
    //       };
    //       let totalPrice = 0;
    //       updatedState.cartList.forEach((element) => {
    //         console.log(element.units);
    //         let listC = updatedState.cartList;
    //         totalPrice += element.units * element.price;
    //       });
    //       let listC = updatedState.cartList;
    //       updatedState = {
    //         ...cart,
    //         cartList: listC,
    //         total: totalPrice,
    //       };
    //       console.log("updated in inc", updatedState);
    //       return updatedState;
    //     }
    //     case DEC_CART: {
    //       let updatedState = null;
    //       const product = action.payload;
    //       const cart = state;
    //       console.log("State", cart.cartList);
    //       const checkProduct = cart.cartList.filter((p) => p.id == product.id);
    //       if (checkProduct[0].units == 1) {
    //         return cart;
    //       }
    //       console.log("Here in If present dec" + product);
    //       const otherProduct = cart.cartList.filter((p) => p.id !== product.id);
    //       let units = checkProduct[0].units - 1;
    //       const updated = {
    //         ...checkProduct[0],
    //         units: checkProduct[0].units - 1,
    //       };
    //       updatedState = {
    //         ...cart,
    //         cartList: [...otherProduct, updated],
    //       };
    //       let totalPrice = 0;
    //       updatedState.cartList.forEach((element) => {
    //         console.log(element.units);
    //         totalPrice += element.units * element.price;
    //       });
    //       let listC = updatedState.cartList;
    //       updatedState = {
    //         ...cart,
    //         cartList: listC,
    //         total: totalPrice,
    //       };
    //       console.log("updated in dec", updatedState);
    //       return updatedState;
    //     }

    //     case DEL_CART: {
    //       let updatedState = null;
    //       const product = action.payload;
    //       const cart = state;
    //       console.log("State in Delete", cart.cartList);
    //       const checkProduct = cart.cartList.filter((p) => p.id == product.id);
    //       const otherProduct = cart.cartList.filter((p) => p.id !== product.id);
    //       updatedState = {
    //         cartList: otherProduct,
    //       };
    //       let totalPrice = 0;
    //       updatedState.cartList.forEach((element) => {
    //         console.log(element.units);
    //         totalPrice += element.units * element.price;
    //       });
    //       let listC = updatedState.cartList;
    //       updatedState = {
    //         ...cart,
    //         cartList: listC,
    //         total: totalPrice,
    //       };
    //       console.log("updated in del", updatedState);
    //       return updatedState;
    // }
    case SET_EMAIL: {
      const email = action.payload;
      console.log("In reducer of email action", email);
      const updatedState = {
        ...state,
        email: email,
      };
      console.log(updatedState);
      return updatedState;
    }
    // case SET_PRODUCT_ID: {
    //   const id = action.payload;
    //   console.log("In reducer of product id action", id);
    //   const updatedState = {
    //     ...state,
    //     id: id,
    //   };
    //   console.log(updatedState);
    //   return updatedState;
    // }

    case SET_USER: {
      const user = action.payload;
      console.log("In reducer of email action", user);
      const updatedState = {
        ...state,
        user: user,
      };
      sessionStorage.setItem("user", JSON.stringify(user));
      console.log("In user setting", updatedState);
      return updatedState;
    }
    // case RESET_CART: {
    //   return {
    //     ...state,
    //     cartList: [],
    //     total: 0,
    //   };
    // }

    case LOG_OUT: {
      sessionStorage.removeItem("user");
      return {
        cartList: [],
        total: 0,
        email: "",
        user: null,
      };
    }
  }
  return state;
}
