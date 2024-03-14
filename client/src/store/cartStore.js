import commonFunctions from "../Helpers/comonFunctions";
import genericStore from "./genericStore";

const cartStore = genericStore("carts", []);
const cartData = {}


cartStore.addCarts = (productId, quantity) => {
  cartData.userId = commonFunctions.generateUUID();
  cartData.cartItem = {"productId":productId,"quantity":quantity}

  cartStore.setState((state) => ({
    carts: [...state.carts, cartData],
  }));
};

const addCarts = cartStore.addCarts;

export default cartStore.getState();
export {addCarts};