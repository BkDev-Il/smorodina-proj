<template>

  <div class="flex flex-col md:flex-row justify-center items-start pb-10 md:space-x-4 space-y-4 md:space-y-0">
    <div class="w-full md:w-full">
      <select 
        v-model="selectedCategory" 
        @change="fetchSubCategories" 
        class="relative py-3 ps-4 pe-9 block w-full cursor-pointer bg-white border font-montserrat border-pink-700 rounded-lg text-sm text-black focus:outline-none  focus:ring-pink-600"
        style="overflow: hidden; overflow-y: auto; max-height: 72px;"
      >
        <option
          value="" 
          class="py-2 px-4 text-sm text-black cursor-pointer font-montserrat hover:bg-white rounded-lg focus:outline-none focus:bg-white">
          Все категории
        </option>
        <option 
          v-for="category in categories" 
          :key="category.id" 
          :value="category.id" 
          class="py-2 px-4 text-sm text-black cursor-pointer font-montserrat hover:bg-white rounded-lg focus:outline-none focus:bg-white"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div v-if="selectedCategory && subCategories.length > 0" class="w-full md:w-1/5">
      <select 
        v-model="selectedSubCategory" 
        @change="updateSubCategory" 
        class="relative py-3 ps-4 pe-9 block w-full cursor-pointer bg-white border font-montserrat border-pink-700 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
        style="overflow: hidden; overflow-y: auto; max-height: 72px;"
      >
        <option :value="null" class="text-black">
          Выберите подкатегорию
        </option>
        <option 
          v-for="subCategory in subCategories" 
          :key="subCategory.id" 
          :value="subCategory.id" 
          class="py-2 px-4 text-sm text-black cursor-pointer font-montserrat hover:bg-white rounded-lg focus:outline-none focus:bg-white"
        >
          {{ subCategory.name }}
        </option>
      </select>
    </div>
  </div>
  <div class="w-full h-full">
    <ProductSearch />
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { mapState, mapActions } from 'pinia';
import { api } from '~/store/api.js';
import { categoryId } from "~/store/category.js";

export default {
  data() {
    return {
      token: '',
      categories: [],
      subCategories: [],
      selectedCategory: '',
      selectedSubCategory: null, 
    };
  },
  computed: {
    ...mapState(api, ['url']),
    ...mapState(categoryId, ["id"]),
  },
  mounted() {
    this.token = Cookies.get('authtoken');
    this.getCategories();
    this.$patch({ id: '' });
  },
  methods: {
    ...mapActions(categoryId, ['$patch']),
    async getCategories() {
      try {
        const response = await axios.get(`${this.url}api/cp/categories/`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`,
          },
        });
        if (response.data.message === 'Error') {
          this.$router.push('/auth/login');
        } else {
          this.categories = response.data;
        }
      } catch (error) {
        console.error('ОШИБКА:', error);
        this.$router.push('/auth/login');
        Cookies.remove('authtoken');
      }
    },
    fetchSubCategories() {
      if (this.selectedCategory === '') {
        this.subCategories = [];
        this.selectedSubCategory = null; 
        this.$patch({ id: null });
        return;
      }
      const selectedCategoryObj = this.categories.find(category => category.id === this.selectedCategory);
      if (selectedCategoryObj && Array.isArray(selectedCategoryObj.subcategories)) {
        this.subCategories = selectedCategoryObj.subcategories;
        this.selectedSubCategory = null;
        this.$patch({ id: this.selectedCategory });
      } else {
        this.subCategories = [];
        this.selectedSubCategory = null; 
        this.$patch({ id: '' });
      }
    },
    updateSubCategory() {
      this.$patch({ id: this.selectedSubCategory });
    },
  },
};
</script>
