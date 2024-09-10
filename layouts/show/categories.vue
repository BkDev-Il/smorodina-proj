<template>
    <div class="page">
      <label v-if="writeActive" class="write">
        <div class="write--wrapper">
          <p class="write--text font-montserrat">
            Переименовать <b>{{ oldName }}</b> в:
          </p>
          <button @click="close()" class="write--close">
            <IconClose />
          </button>
        </div>
        <input
          v-model="inputValue"
          type="text"
          class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none write--input"
        />
        <button
          @click="changeValue()"
          class="write--rename font-montserrat w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-white hover:text-black transition focus:outline-none focus:bg-white disabled:opacity-50 disabled:pointer-events-none"
        >
          Переименовать
        </button>
      </label>
  
      <ul class="list">
        <li class="list--item" v-for="category in categories" :key="category.id">
          <p class="list--text font-montserrat">{{ category.name }}</p>
  
          <div class="list--wrapper">
            <button class="list--show" @click="togglePopup(category)">
              <div class="list--dot"></div>
              <div class="list--dot"></div>
              <div class="list--dot"></div>
            </button>
            <div v-if="category.showPopup" class="list--popup" @click.stop>
              <button @click="editing(category.name, category.id)" class="list--button font-montserrat">
                Изменить объект
              </button>
              <button @click="deleteFn(category.id)" class="list--button font-montserrat">
                Удалить объект
              </button>
            </div>
          </div>
        </li>
      </ul>
  
      <transition name="toast" @before-enter="beforeEnter" @enter="enter" @leave="leave" v-if="showToast">
        <div
          class="toast fixed top-4 left-4 max-w-xs bg-gray-600 border border-rose-300 rounded-xl shadow-lg"
          role="alert"
          tabindex="-1"
          aria-labelledby="hs-toast-error-example-label"
        >
          <div class="toast flex p-4">
            <div class="shrink-0"></div>
            <div class="ms-3">
              <p id="hs-toast-error-example-label" class="text-sm text-pink-700 dark:text-pink-300">
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
    </div>
  </template>
  
  <script>
  import IconClose from '~/components/icons/IconClose.vue';
  import IconPensil from '~/components/icons/IconPensil.vue';
  import axios from 'axios';
  import Cookies from 'js-cookie';
  import { mapState } from 'pinia';
  import { api } from '~/store/api.js';
  import { ref } from 'vue';
  
  export default {
    components: {
      IconClose,
      IconPensil,
    },
    data() {
      return {
        token: '',
        categories: [],
        selectedCategory: '',
        toastMessage: '',
        toastTimeout: null,
        showToast: false,
        categoriesObj: {},
      };
    },
    setup() {
      const oldName = ref('');
      const writeActive = ref(false);
      const inputValue = ref('');
      const id = ref('');
      const refCategory = ref(false);
  
      return {
        oldName,
        writeActive,
        inputValue,
        id,
        refCategory,
      };
    },
    mounted() {
      this.token = Cookies.get('authtoken');
      this.fetchCategory();
      document.addEventListener('click', this.handleDocumentClick);
    },
    beforeUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
    },
    computed: {
      ...mapState(api, ['url']),
    },
    methods: {
      editing(oName, activeId) {
        this.writeActive = !this.writeActive;
        this.oldName = oName;
        this.id = activeId;
        this.closePopup(activeId);
      },
      handleDocumentClick(event) {
        if (!this.refCategory) {
          this.categories.forEach((category) => {
            category.showPopup = false;
          });
        }
      },
      async deleteFn(activeId) {
        this.id = activeId;
        await this.deleteCategory();
        this.fetchCategory();
      },
      togglePopup(category) {
        category.showPopup = !category.showPopup;
        this.refCategory = category.showPopup;
      },
      closePopup(id) {
        const category = this.categories.find((cat) => cat.id === id);
        if (category) {
          category.showPopup = false;
        }
      },
      createCategoriesObj(array) {
        array.forEach((element) => {
          element.showPopup = false;
          this.categoriesObj[element.id] = false;
        });
        console.log('categoriesObj:', this.categoriesObj);
      },
      close() {
        this.inputValue = '';
        this.writeActive = false;
        this.id = '';
      },
      async changeValue() {
        await this.modifyCategory();
        this.fetchCategory();
        this.close();
      },
      async fetchCategory() {
        try {
          const response = await axios.get(`${this.url}api/cp/categories/`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
          });
  
          await this.createCategoriesObj(response.data);
  
          if (response.data.message === 'Error') {
            this.$router.push('/auth/login');
          } else {
            this.categories = response.data;
            console.log(this.categories);
          }
        } catch (error) {
          console.error('ОШИБКА:', error);
          this.$router.push('/auth/login');
          Cookies.remove('authtoken');
        }
      },
      async deleteCategory() {
        try {
          const response = await axios.delete(`${this.url}api/cp/categories/?ids=${this.id}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
          });
  
          if (response.data.message === 'Error') {
            this.$router.push('/auth/login');
          } else {
            this.categories = response.data;
            console.log(this.categories);
          }
        } catch (error) {
          console.error('ОШИБКА:', error);
          this.$router.push('/auth/login');
          Cookies.remove('authtoken');
        }
      },
      async modifyCategory() {
        try {
          const payload = { name: this.inputValue };
  
          await axios.put(`${this.url}api/cp/categories/${this.id}/`, payload, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
          });
  
          console.log(payload);
  
          this.toastMessage = 'Успешно обновлено!';
          this.showToast = true;
          if (this.toastTimeout) clearTimeout(this.toastTimeout);
          this.toastTimeout = setTimeout(() => {
            this.hideToast();
          }, 5000);
        } catch (error) {
          this.toastMessage = 'Ошибка при обновлении товара.';
          console.log(error);
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
        el.classList.add('toast-enter');
      },
      enter(el, done) {
        el.addEventListener('animationend', done, { once: true });
      },
      leave(el, done) {
        el.classList.add('toast-exit');
        el.addEventListener('animationend', done, { once: true });
      },
    },
  };
  </script>

<style scoped>
.toast {
    z-index: 101;
    background-color: #6b7280;
    overflow: hidden;
}

.write {
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
    width: 60vw;
    background-color: #6b7280c4;
    padding: 20px;
    border-radius: 10px;
    z-index: 100;
}

.write--text {
    color: white;
}

.write--wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.write--close {
    height: 20px;
    width: 20px;
    transition: .2s;
    &:hover {
        transform: scale(1.2)
    }
}

.write--rename {
    margin-top: 20px;
}

 .list {
    display: grid;
    gap: 15px;
 }


.list--item {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 10px 15px;
    border-radius: .5rem;
    background-color: white;
    & .list--text {
        color: black !important;
        font-weight: 600;
    }
}

 .list--text {
    font-weight: 500;
    color: white;
 }



 .list--wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;

 }

.list--show {
    display: flex;
    gap: 3px;
    background-color: #be185d;
    padding: 12px 15px;
        transition: .2s;
        border-radius: .5rem;
    &:hover {
        box-shadow: 0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
        background-color: #be185da6;
    }
}

.list--dot {
    height: 5px;
    width: 5px;
    background-color: white;
    border-radius: 50%;
}

.list--popup {
    position: absolute;
    top: 0;
    left: -200px;
    display: grid;
    gap: 15px;
    background-color: white;
    border-radius: .5rem;
    padding: 15px 20px;

}

 .list--button {
    transition: .2s;
    white-space: nowrap;
    padding: 5px;
    border-radius: .5rem;

    &:hover{
        transform: scale(1.1);
        background-color: #e5e7eb;
    }
 }  

</style>