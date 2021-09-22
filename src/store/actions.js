import { ADD_TO_CART, ADD_COUNT } from "./mutation-types";

export default {
  addCart(context, palyload) {
    const oldProduce = context.state.cartList.find((item) => {
      return item.iid === palyload.iid;
    });
    if (oldProduce) {
      context.commit(ADD_COUNT, oldProduce);
    } else {
      palyload.count = 1;
      context.commit(ADD_TO_CART, palyload);
    }
  },
};
