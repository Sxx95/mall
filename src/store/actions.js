import { ADD_TO_CART, ADD_COUNT } from "./mutation-types";

export default {
  addCart(context, payload) {
    // payload.count = 1;
    // context.commit(ADD_TO_CART, payload);
    const oldProduct = context.state.cartList.find((item) => {
      return item.iid === payload.iid;
    });
    if (oldProduct) {
      context.commit(ADD_COUNT, oldProduct);
    } else {
      payload.count = 1;
      context.commit(ADD_TO_CART, payload);
    }
  },
};
