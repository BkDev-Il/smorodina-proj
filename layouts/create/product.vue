<template>
  <div class="max-w-8xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-gray-500 rounded-xl shadow p-4 sm:p-7">
      <form>
        <div
          class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-600"
        >
          <div class="sm:col-span-12">
            <h2
              class="text-4xl font-semibold text-center text-white font-montserrat mb-5"
            >
              Создать товар
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
                class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
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
              class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none min-h-5"
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
              class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
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
              class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
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
              class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
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
              class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
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
              class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
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
                 class="relative py-3 ps-4 pe-9 block w-full cursor-pointer bg-white border font-montserrat border-pink-700 rounded-lg text-sm text-black focus:outline-none focus:ring-pink-600"
                style="overflow: hidden; overflow-y: auto; max-height: 72px"
              >
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
                   class="relative py-3 ps-4 pe-9 block w-full cursor-pointer bg-white border font-montserrat border-pink-700 rounded-lg text-sm text-black focus:outline-none focus:ring-pink-600"
                  style="overflow: hidden; overflow-y: auto; max-height: 72px"
                >
                  <option
                    v-for="brands in brands"
                    :key="brands.id"
                    :value="brands.id"
                    class="py-2 px-4 text-sm text-black cursor-pointer font-montserrat hover:bg-white rounded-lg focus:outline-none focus:bg-white"
                  >
                    {{ brands.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          </div>
        <button
          @click="createProduct"
          type="button"
          class="font-montserrat w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-white hover:text-pink-600 transition focus:outline-none focus:bg-white disabled:opacity-50 disabled:pointer-events-none"
        >
          Изменить
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
      class="toast fixed top-4 left-4 max-w-xs bg-pink-100 border border-rose-300 rounded-xl shadow-lg dark:bg-white dark:border-pink-600"
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
          class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white bg-pink-900 hover:bg-pink-600 focus:outline-none focus:bg-white"
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
export default {
  data() {
    return {
      token: "",
      brands: [],
      categories: [],
      characteristics: [],
      selectedCategory: " ",
      selectedBrand: " ",
      selectCharacteristic: " ",
      toastMessage: "",
      toastTimeout: null,
      showToast: false,
      ProductName: " ",
      ProductDiscription: " ",
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
    this.fetchCategory();
    this.fetchBrand();
    this.fetchcharacteristics();
  },
  computed: {
    ...mapState(api, ["url"]),
  },
  methods: {
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
    async fetchcharacteristics() {
      try {
        const response = await axios.get(`${this.url}api/cp/characteristics/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
          },
        });

        if (response.data.message === "Error") {
          this.$router.push("/auth/login");
        } else {
          this.characteristics =  response.data;
        }
      } catch (error) {
        console.error("ОШИБКА:", error);
        this.$router.push("/auth/login");
        Cookies.remove("authtoken");
      }
    },

    async createProduct() {
      try {
        await axios.put(
          `${this.url}api/cp/products/`,
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
            characteristics: this.selectCharacteristic,
            categoryId: this.selectedCategory,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        this.toastMessage = "Успешно создано!.";
        this.showToast = true;
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
          this.hideToast();
        }, 5000);
      } catch (error) {
        this.toastMessage = "Ошибка при создании товара.";
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
