import { defineStore } from 'pinia';

export const useCurrentLayoutStore = defineStore('currentLayout', {
  state: () => ({
    currentLayout: 'show-product', 
  }),
  actions: {
    setCurrentLayout(layoutName) {
      this.currentLayout = layoutName;
    }
  }
});
