<template>
  <div class="custom-bg max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="bg-gray-500 rounded-xl shadow p-4 sm:p-7">
      <form>
        <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-700">
          <div class="sm:col-span-12">
            <h2 class="text-lg font-semibold text-pink-100 font-montserrat">
              Профиль
            </h2>
          </div>
          <div class="sm:col-span-3">
            <label for="firstName" class="inline-block text-sm font-medium text-white mt-2.5 font-montserrat">
              Имя
            </label>
          </div>
          <div class="sm:col-span-9">
            <input id="firstName" type="text" v-model="firstName" class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none">
          </div>
          <div class="sm:col-span-3">
            <label for="lastName" class="inline-block text-sm font-medium text-white mt-2.5 font-montserrat">
              Фамилия
            </label>
          </div>
          <div class="sm:col-span-9">
            <input id="lastName" type="text" v-model="lastName" class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none">
          </div>
          <div class="sm:col-span-3">
            <label for="patronymic" class="font-montserrat inline-block text-sm font-medium text-white mt-2.5">
              Отчество
            </label>
          </div>
          <div class="sm:col-span-9">
            <input id="patronymic" type="text" v-model="patronymic" class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none">
          </div>
          <div class="sm:col-span-3">
            <div class="inline-block">
              <label for="tel" class="font-montserrat inline-block text-sm font-medium text-white mt-2.5">
                Номер телефона
              </label>
            </div>
          </div>
          <div class="sm:col-span-9">
            <input id="tel" type="text" v-model="tel" class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm rounded-lg text-sm focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none">
          </div>
        </div>
        <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-700">
          <div class="sm:col-span-12">
            <h2 class="text-lg font-semibold text-pink-100">
              Учетная запись
            </h2>
          </div>
          <div class="sm:col-span-3">
            <label for="email" class="inline-block text-sm font-medium font-montserrat text-white mt-2.5">
              Email
            </label>
          </div>
          <div class="sm:col-span-9">
            <input id="email" type="email" v-model="email" class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none">
          </div>
          <div class="sm:col-span-3">
            <label for="password" class="font-montserrat inline-block text-sm font-medium text-white mt-2.5">
              Пароль
            </label>
          </div>
          <div class="sm:col-span-9">
            <input id="password" type="text" v-model="password" class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none">
          </div>
        </div>
        <button @click="updateUserInfo" type="button" class="font-montserrat w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:border-gray-400 focus:outline-none focus:border-gray-400 disabled:opacity-50 disabled:pointer-events-none">
          Изменить
        </button>
      </form>
    </div>
  </div>

  <transition name="toast" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="showToast" class="toast fixed top-4 left-4 max-w-xs bg-gray-600 border border-rose-300 rounded-xl shadow-lg dark:border-gray-400 dark:border-gray-300" role="alert" tabindex="-1" aria-labelledby="hs-toast-error-example-label">
      <div class="flex p-4">
        <div class="shrink-0">
        </div>
        <div class="ms-3">
          <p id="hs-toast-error-example-label" class="text-sm text-pink-700 dark:text-white">
            {{ toastMessage }}
          </p>
        </div>
        <button type="button" class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white bg-pink-900 hover:bg-pink-600 focus:outline-none focus:border-gray-400" aria-label="Close" @click="hideToast">
          <span class="sr-only">Close</span>
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import { mapState } from 'pinia';
import { api } from '~/store/api.js';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      patronymic: '',
      email: '',
      tel: '',
      password: '',
      showToast: false,
      toastMessage: '',
      toastTimeout: null
    }
  },
  computed: {
    ...mapState(api, ['url']),
  },
  mounted() {
    this.token = Cookies.get('authtoken');
    this.checkedUser();
  },
  methods: {
    async checkedUser() {
      try {
        const response = await axios.get(`${this.url}api/cp/users/me/`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`,
          }
        });
        this.firstName = response.data.firstName;
        this.lastName = response.data.lastName;
        this.patronymic = response.data.patronymic;
        this.email = response.data.email;
        this.tel = response.data.tel;
        this.password = response.data.password;
      } catch (error) {
        console.error('ОШИБКА:', error);
        this.$router.push('/auth/login');
      }
    },
    async updateUserInfo() {
      try {
        const response = await axios.put(`${this.url}api/cp/users/me/`, {
          firstName: this.firstName,
          lastName: this.lastName,
          patronymic: this.patronymic,
          email: this.email,
          tel: this.tel,
          password: this.password,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`,
          }
        });
        this.toastMessage = 'Информация успешно обновлена!';
        this.showToast = true;
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
          this.hideToast();
        }, 5000);
        
      } catch (error) {
        this.toastMessage = 'Ошибка при обновлении информации.';
        this.showToast = true;
        if (this.toastTimeout) clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
          this.hideToast();
        }, 5000);
        console.error('Ошибка при обновлении информации:', error);
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
    }
  }
}
</script>

<style>
@keyframes toast-enter {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes toast-exit {
  from { opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
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

