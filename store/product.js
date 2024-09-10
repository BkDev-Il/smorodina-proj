import { defineStore } from 'pinia';

export const productID = defineStore('product', {
  state: () => ({
    prodid:''
  }),
  actions: {
    setProdId(id) {
      this.prodid = id;
    }
  }
});


export const useProductStore = defineStore('products', {
  state: () => {
    return { products: ['1', '2'] }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    updateProducts(product) {
      this.count = product
    },
  },
})
