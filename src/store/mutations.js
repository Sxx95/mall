import { ADD_TO_CART, ADD_COUNT } from "./mutation-types";

export default {
  [ADD_TO_CART](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  },
  [ADD_COUNT](state, payload) {
    payload.count += 1;
  },
};
