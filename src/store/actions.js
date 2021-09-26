import { ADD_TO_CART, ADD_COUNT } from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.cartList.find((item) => {
        return item.iid === payload.iid;
      });
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct);
        resolve("当前商品数量+1");
        reject("添加失败");
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("添加新的商品");
        reject("添加失败");
      }
    });
  },
};
