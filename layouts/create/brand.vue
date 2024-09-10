<template>
  <div class="max-w-8xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-gray-500 rounded-xl shadow p-4 sm:p-7">
      <form>
        <div
          class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-pink-600"
        >
          <div class="sm:col-span-3">
            <label
              for="af-submit-application-full-name"
              class="inline-block text-sm font-medium text-white font-montserrat mt-2.5"
            >
              Название бренда
            </label>
          </div>
          <div class="sm:col-span-9">
            <div class="sm:flex">
              <input
                v-model="BrandName"
                id="af-submit-application-full-name"
                type="text"
                class="font-montserrat py-2 px-3 pe-11 block w-full border-gray-300 border-gray-400 text-black shadow-sm text-sm rounded-lg focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"
              />
            </div>
          </div>
        </div>
        <button
          @click="createBrand"
          type="button"
          class="font-montserrat w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-white hover:text-pink-600 transition focus:outline-none focus:bg-white disabled:opacity-50 disabled:pointer-events-none"
        >
          Создать
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
      toastMessage: "",
      toastTimeout: null,
      showToast: false,
      BrandName: "",
    };
  },
  mounted() {
    this.token = Cookies.get("authtoken");
  },
  computed: {
    ...mapState(api, ["url"]),
  },
  methods: {
    async createBrand() {
      try {
        await axios.post(
          `${this.url}api/cp/brand/`,
          {
            name: this.BrandName,
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
        this.toastMessage = "Ошибка при создании бренда.";
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
