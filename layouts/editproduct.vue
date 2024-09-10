<template>
  <div class="max-w-8xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-pink-800 rounded-xl shadow p-4 sm:p-7">
      <form>
        <div
          class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-600"
        >
          <div class="sm:col-span-12">
            <h2
              class="text-4xl font-semibold text-center text-white font-montserrat mb-5"
            >
              Товар "{{ ProductName }}"
            </h2>
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-full-name"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Название товара
            </label>
          </div>
          <div class="sm:col-span-9">
            <div class="sm:flex">
              <input
                v-model="ProductName"
                id="af-submit-application-full-name"
                type="text"
                class="font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <div class="inline-block">
              <label
                for="af-submit-application-bio"
                class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
              >
                Описание товара
              </label>
            </div>
          </div>
          <div class="sm:col-span-9">
            <textarea
              v-model="ProductDiscription"
              id="af-submit-application-bio"
              class="font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
              rows="6"
              placeholder=""
            ></textarea>
          </div>
        </div>
        <div
          class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-600"
        >
          <div class="sm:col-span-12">
            <h2 class="text-lg font-semibold text-pink-200">Прочее</h2>
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-full-name"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Избранный товар
            </label>
          </div>
          <div class="sm:col-span-9">
            <div class="sm:flex">
              <div class="relative inline-block">
                <input
                  v-model="ProductFavorite"
                  type="checkbox"
                  id="hs-large-switch-soft-with-icons"
                  class="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-gray-100 border border-pink-600 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-pink-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-pink-100 checked:border-pink-200 focus:checked:border-pink-200 dark:bg-pink-800 dark:border-pink-400 dark:checked:bg-pink-500/30 dark:checked:border-pink-800 dark:focus:ring-offset-pink-600 before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-pink-800 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:transform before:transition before:ease-in-out before:duration-200 dark:before:bg-pink-400 dark:checked:before:bg-pink-500"
                />
                <label for="hs-large-switch-soft-with-icons" class="sr-only"
                  >switch</label
                >
                <span
                  class="peer-checked:text-pink-600 text-gray-500 text-gray-500 size-8 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"
                >
                  <svg
                    class="shrink-0 size-4"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                <span
                  class="peer-checked:text-white size-8 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"
                >
                  <svg
                    class="shrink-0 size-4"
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
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-email"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Активный товар
            </label>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <div class="sm:flex">
              <div class="relative inline-block">
                <input
                  v-model="ProductActive"
                  type="checkbox"
                  id="hs-large-switch-soft-with-icons"
                  class="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-gray-100 border border-pink-600 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-pink-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-pink-100 checked:border-pink-200 focus:checked:border-pink-200 dark:bg-pink-800 dark:border-pink-400 dark:checked:bg-pink-500/30 dark:checked:border-pink-800 dark:focus:ring-offset-pink-600 before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-pink-800 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:transform before:transition before:ease-in-out before:duration-200 dark:before:bg-pink-400 dark:checked:before:bg-pink-500"
                />
                <label for="hs-large-switch-soft-with-icons" class="sr-only"
                  >switch</label
                >
                <span
                  class="peer-checked:text-pink-600 text-gray-500 text-gray-500 size-8 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"
                >
                  <svg
                    class="shrink-0 size-4"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                <span
                  class="peer-checked:text-white size-8 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200 dark:text-neutral-500"
                >
                  <svg
                    class="shrink-0 size-4"
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
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-600"
        >
          <div class="sm:col-span-12">
            <h2 class="text-lg font-semibold text-pink-200">
              Числовые значения
            </h2>
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-email"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Код товара
            </label>
          </div>
          <div class="sm:col-span-9">
            <input
              v-model="ProductCode"
              id="af-submit-application-email"
              type="number"
              class="font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-email"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Бонусы
            </label>
          </div>
          <div class="sm:col-span-9">
            <input
              v-model="ProductBonuses"
              id="af-submit-application-email"
              type="number"
              class="font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-email"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Кол-во в наличии
            </label>
          </div>
          <div class="sm:col-span-9">
            <input
              v-model="ProductStock"
              id="af-submit-application-email"
              type="number"
              class="font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="sm:col-span-3">
            <div class="inline-block">
              <label
                for="af-submit-application-current-company"
                class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
              >
                Цена товара
              </label>
              <br />
            </div>
          </div>

          <div class="sm:col-span-9">
            <input
              v-model="ProductPrice"
              id="af-submit-application-current-company"
              type="number"
              class="font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>

          <div class="sm:col-span-3">
            <div class="inline-block">
              <label
                for="af-submit-application-current-company"
                class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
              >
                Прошлая цена товара
              </label>
              <br />
            </div>
          </div>

          <div class="sm:col-span-9">
            <input
              v-model="ProductOldPrice"
              id="af-submit-application-current-company"
              type="number"
              class="font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
        </div>
        <div
          class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-600"
        >
          <div class="sm:col-span-12">
            <h2 class="text-lg font-semibold text-pink-200">Прочее</h2>
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-linkedin-url"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Категория
            </label>
          </div>
          <div class="sm:col-span-9">
            <div class="w-full md:w-full">
              <select
                v-model="selectedCategory"
                class="relative py-3 ps-4 pe-9 block w-full cursor-pointer bg-pink-700 border font-montserrat border-pink-700 rounded-lg text-sm text-white focus:outline-none focus:ring-pink-600"
                style="overflow: hidden; overflow-y: auto; max-height: 72px"
              >
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                  class="py-2 px-4 text-sm text-white cursor-pointer font-montserrat hover:bg-pink-700 rounded-lg focus:outline-none focus:bg-pink-700"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-twitter-url"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Бренд
            </label>
          </div>
          <div class="sm:col-span-9">
            <div class="sm:col-span-9">
              <div class="w-full md:w-full">
                <select
                  v-model="selectedBrand"
                  class="relative py-3 ps-4 pe-9 block w-full cursor-pointer bg-pink-700 border font-montserrat border-pink-700 rounded-lg text-sm text-white focus:outline-none focus:ring-pink-600"
                  style="overflow: hidden; overflow-y: auto; max-height: 72px"
                >
                  <option
                    v-for="brands in brands"
                    :key="brands.id"
                    :value="brands.id"
                    class="py-2 px-4 text-sm text-white cursor-pointer font-montserrat hover:bg-pink-700 rounded-lg focus:outline-none focus:bg-pink-700"
                  >
                    {{ brands.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-600"
        >
          <div class="sm:col-span-12">
            <h2 class="text-lg font-semibold text-pink-200">
              Неизменяемы данные
            </h2>
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-desired-salary"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Отзыв
            </label>
          </div>
          <div class="sm:col-span-9">
            <p
              class="select-none font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg"
            >
              d 
            </p>
          </div>
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-desired-salary"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Характеристика
            </label>
          </div>
          <div class="sm:col-span-9">
            <p
              class="select-none font-montserrat py-2 px-3 pe-11 block w-full border-pink-600 bg-pink-700 text-pink-100 shadow-sm text-sm rounded-lg"
            >
              d 
            </p>
          </div>
        </div>
        <div class="my-10">
          <label
            for="file-upload"
            class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-pink-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
          >
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              class="sr-only"
              @change="handleFileUpload"
            />
            <svg
              class="size-10 mx-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
              />
              <path
                d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
              />
            </svg>
            <span
              class="mt-2 block text-sm text-gray-800 dark:text-neutral-200"
            >
              Загрузить изображение
              <span class="group-hover:text-blue-700 text-blue-600"
                >Нажмите</span
              >
            </span>
            <span class="mt-1 block text-xs text-gray-200">
              Максимальный размер файла 2МБ
            </span>
          </label>
          <div v-if="preview" class="mt-4">
            <img
              :src="preview"
              alt="Preview"
              class="w-full max-w-[500px] max-h-[500px] mx-auto object-cover"
            />
          </div>
        </div>

        <button
          @click="updateProduct"
          type="button"
          class="font-montserrat w-4/5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Изменить
        </button>
        <button
          @click="deleteProduct"
          type="button"
          class="font-montserrat w-1/5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Удалить
        </button>
      </form>
    </div>
  </div>

  <transition
    name="toast"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-if="showToast"
      class="toast fixed top-4 left-4 max-w-xs bg-pink-100 border border-rose-300 rounded-xl shadow-lg dark:bg-pink-700 dark:border-pink-600"
      role="alert"
      tabindex="-1"
      aria-labelledby="hs-toast-error-example-label"
    >
      <div class="flex p-4">
        <div class="shrink-0"></div>
        <div class="ms-3">
          <p
            id="hs-toast-error-example-label"
            class="text-sm text-pink-700 dark:text-pink-300"
          >
            {{ toastMessage }}
          </p>
        </div>
        <button
          type="button"
          class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white bg-pink-900 hover:bg-pink-600 focus:outline-none focus:bg-pink-700"
          aria-label="Close"
          @click="hideToast"
        >
          <span class="sr-only">Close</span>
          <svg
            class="shrink-0 size-4"
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
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { mapState } from "pinia";
import { api } from "~/store/api.js";
import { productID } from "~/store/product.js";
export default {
  data() {
    return {
      token: "",
      brands: [],
      categories: [],
      selectedCategory: "Загрузка...",
      selectedBrand: "Загрузка...",
      toastMessage: "",
      toastTimeout: null,
      showToast: false,
      file: null,
      preview: null,
      uploadImg: false,
      ProductName: "Загрузка...",
      ProductDiscription: "Загрузка...",
      ProductFavorite: true,
      ProductActive: true,
      ProductCode: "",
      ProductBonuses: "",
      ProductStock: "",
      ProductPrice: "",
      ProductOldPrice: "",
    };
  },
  mounted() {
    this.token = Cookies.get("authtoken");
    this.fetchProduct();
    this.fetchCategory();
    this.fetchBrand();
  },
  computed: {
    ...mapState(api, ["url"]),
    ...mapState(productID, ["prodid"]),
  },
  methods: {

    async fetchProduct() {
      try {
        const response = await axios.get(
          `${this.url}api/cp/products/${this.prodid}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        this.ProductName = response.data.name;
        this.ProductDiscription = response.data.description;
        this.ProductFavorite = response.data.isFavorite;
        this.ProductActive = response.data.true;
        this.ProductCode = response.data.code;
        this.ProductBonuses = response.data.bonuses;
        this.ProductStock = response.data.in_stock;
        this.ProductPrice = response.data.price;
        this.ProductOldPrice = response.data.oldPrice;

        this.selectedCategory = response.data.categoryId;
        this.selectedBrand = response.data.brandId;
        if (response.data.images[0]) {
          this.preview = response.data.images.slice(-1)[0].image;
        }
      } catch (error) {
        console.error("ОШИБКА:", error);
        this.$router.push("/auth/login");
      }
    },
    async fetchCategory() {
      try {
        const response = await axios.get(`${this.url}api/cp/categories/all`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
        });

        if (response.data.message === "Error") {
          this.$router.push("/auth/login");
        } else {
          this.categories = response.data;
        }
      } catch (error) {
        console.error("ОШИБКА:", error);
        this.$router.push("/auth/login");
        Cookies.remove("authtoken");
      }
    },
    async fetchBrand() {
      try {
        const response = await axios.get(`${this.url}api/cp/brand`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
        });

        if (response.data.message === "Error") {
          this.$router.push("/auth/login");
        } else {
          this.brands = response.data;
        }
      } catch (error) {
        console.error("ОШИБКА:", error);
        this.$router.push("/auth/login");
        Cookies.remove("authtoken");
      }
    },
    async updateProduct() {
      try {
        if (this.uploadImg) {
          const formData = new FormData();
          formData.append("image", this.file);

          await axios.post(
            `${this.url}api/cp/products/images/${this.prodid}/`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${this.token}`,
              },
            }
          );
        } else {
          await axios.put(
            `${this.url}api/cp/products/${this.prodid}/`,
            {
              name: this.ProductName,
              code: this.ProductCode,
              price: this.ProductPrice,
              oldPrice: this.ProductOldPrice,
              bonuses: this.ProductBonuses,
              isFavorite: this.ProductFavorite,
              description: this.ProductDiscription,
              in_stock: this.ProductStock,
              is_active: this.ProductActive,
              brandId: this.selectedBrand,
              categoryId: this.selectedCategory,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
              },
            }
          );
        }
        this.toastMessage = "Успешно обновлено.";
        this.showToast = true;
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
          this.hideToast();
        }, 5000);
      } catch (error) {
        this.toastMessage = "Ошибка при обновлении информации.";
        this.showToast = true;
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
          this.hideToast();
        }, 5000);
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.size <= 2 * 1024 * 1024) {
        this.file = file;
        this.preview = URL.createObjectURL(file);
        this.uploadImg = true;
      } else {
        this.showToast = true;
        this.toastMessage = "Файл слишком большой";
      }
    },
    async deleteProduct() {;
      try {
          await axios.delete(
            `${this.url}api/cp/products/?ids=${this.prodid}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
              },
            }
          );
    
        this.toastMessage = "Успешно удалено.";
        this.showToast = true;
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
          this.hideToast();
        }, 5000);
      
      } catch (error) {
        this.toastMessage = "Ошибка при удалении товара .";
        this.showToast = true;
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
          this.hideToast();
        }, 5000);
      }
    },
    hideToast() {
      this.showToast = false;
    },
    beforeEnter(el) {
      el.classList.add("toast-enter");
    },
    enter(el, done) {
      el.addEventListener("animationend", done, { once: true });
    },
    leave(el, done) {
      el.classList.add("toast-exit");
      el.addEventListener("animationend", done, { once: true });
    },
  },
};
</script>

<style>
@keyframes toast-enter {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes toast-exit {
  from {
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
.toast-enter {
  animation: toast-enter 0.3s ease-out forwards;
}
.toast-exit {
  animation: toast-exit 0.3s ease-in forwards;
}
.toast {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 9999;
  max-width: 20rem;
}
</style>
