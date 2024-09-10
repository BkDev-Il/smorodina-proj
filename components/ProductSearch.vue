<template>
  <div class="">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      <a
        v-for="product in products"
        :key="product.id"
        :href="`/admin/product/${product.id}`"
        @click.prevent="changeLayout(product.id)" 
        class="group flex flex-col bg-red-300 shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition"
      >
        <div class="p-4 md:p-5">
          <div class="flex justify-between items-center gap-x-3">
            <div class="grow">
              <div class="flex items-center gap-x-3">
                <div class="w-[38px] h-[38px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    v-if="product.images && product.images.length > 0"
                    class="w-full h-full object-cover"
                    :src="product.images.slice(-1)[0].image"
                    alt="Product image"
                  />

                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-gray-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div class="grow">
                  <h3 class="group-hover:text-gray-200 font-semibold text-white">
                    {{ product.name }}
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="shrink-0 size-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
  <div class="w-full h-full">
    <ProductPaginator />
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { mapState, mapActions } from 'pinia';
import { api } from '~/store/api.js';
import { categoryId } from '~/store/category.js';
import { useCurrentLayoutStore } from '~/store/currentLayout.js';
import { productID } from '~/store/product.js';


export default {
  data() {
    return {
      products: [],
      token: '',
    };
  },
  mounted() {
    this.token = Cookies.get('authtoken');
    this.fetchData(); 
  },
  computed: {
    ...mapState(api, ['url']),
    ...mapState(categoryId, ['id']),
  },
  watch: {
    id: 'fetchData',
  },
  methods: {
    ...mapActions(useCurrentLayoutStore, ['setCurrentLayout']),
    ...mapActions(productID, ['setProdId']),


    async fetchData() {
      try {
        const response = await axios.get(`${this.url}api/cp/products/${this.id ? `?categoryId=${this.id}` : ''}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`,
          },
        });

        if (response.data.message === 'Error') {
          this.$router.push('/auth/login');
        } else {
          this.products = response.data;
        }
      } catch (error) {
        console.error('ОШИБКА:', error);
        this.$router.push('/auth/login');
        Cookies.remove('authtoken');
      }
    },
    
    changeLayout(id) {
      this.setProdId(id);  
      this.setCurrentLayout('editproduct');
      console.log('Текущий макет:', 'editproduct', 'ID продукта:', id);
    }
  }
};
</script>
