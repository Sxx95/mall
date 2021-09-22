import { ADD_TO_CART, ADD_COUNT } from "./mutation-types";

export default {
  [ADD_TO_CART](state, palyload) {
    palyload.push(state.cartList);
  },
  [ADD_COUNT](state, palyload) {
    palyload.count += 1;
  },
};
