<template>
    <div class="wrapper">
        
        <div class="header">
            <p class="header--supertitle">Добро пожаловать в Админ панель</p>
            <h1 class=" font-sans    header--title">Smorodina</h1>
        </div>

        <div class="authorization font-mono">
            <form class="authorization--form">
                <label class="authorization--label">
                    <p class="authorization--name">Логин</p>
                    <input v-model="login" type="email" id="email" name="email" placeholder="user@mail.com"class="authorization--input">
                         <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                            <svg class="size-5 text-pink-400" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>
                </label>
                <label class="authorization--label">
                    <p class="authorization--name">Пароль</p>
                    <input v-model="password" type="password" id="password" name="password" placeholder="********" class="authorization--input">
                        <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                            <svg class="size-5 text-pink-400" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        </div>  
                </label>
                <button  type="button" @click="sendData" class="authorization--submit">Войти</button>
            </form>
        </div>

        <!-- toast -->
<transition name="toast" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="showToast" class="toast fixed top-4 left-4 max-w-xs bg-pink-100 border border-pink-300 rounded-xl shadow-lg dark:bg-pink-700 dark:border-pink-600" role="alert" tabindex="-1" aria-labelledby="hs-toast-error-example-label">
        <div class="flex p-4">
            <div class="shrink-0">
                <svg class="shrink-0 size-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                </svg>
            </div>
            <div class="ms-3">
                <p id="hs-toast-error-example-label" class="text-sm text-pink-700 dark:text-pink-300">
                    {{ toastMessage }}
                </p>
            </div>
            <button type="button" class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white bg-pink-900 hover:bg-pink-600 focus:outline-none focus:bg-pink-700" aria-label="Close" @click="hideToast">
                <span class="sr-only">Close</span>
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
import axios from 'axios';
import Cookies from 'js-cookie';
import { mapState } from 'pinia';
import { api } from '~/store/api.js';

export default {
    data() {
        return {
            login: '',
            password: '',
            token: '',
            showToast: false,
            toastMessage: '',
            toastTimeout: null
        };
    },
    mounted() {
        this.token = Cookies.get('authtoken');
        this.checkedUser();
    },
    computed: {
        ...mapState(api, ['url']),
    },
    methods: {
        async sendData() {
            try {
                const response = await axios.post(`${this.url}api/sign-in/email-password/`, {
                    email: this.login,
                    password: this.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.data.token) {
                    Cookies.set('authtoken', response.data.token);
                    this.$router.push('/admin'); 
                } else {
                    
                }
            } catch (error) {
                console.error('ОШИБКА:', error);
                this.toastMessage = 'Произошла ошибка при входе. Пожалуйста, проверьте введенные данные и попробуйте снова.';
                this.showToast = true;
                if (this.toastTimeout) clearTimeout(this.toastTimeout);
                this.toastTimeout = setTimeout(() => {
                    this.hideToast();
                }, 5000);
            }
        },
        async checkedUser() {
            if (this.token) {
                this.$router.push('/admin'); 
            } else {
                this.$router.push('/auth/login'); 
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

.wrapper {
    display: grid;
    grid-template-rows: 35vh 1fr;
    gap: 50px;
    background-color: #c8234c15;
    height: 100vh;
    width: 100vw;
}

.header {
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 0 0 20px 20px;
}

.header--supertitle {
    font-size: 20px;
    text-align: center;
}

.header--title {
    text-align: center;
    font-size: 88px;
    color: #C8234B;
    text-transform: uppercase;
}

.authorization {
    padding: 20px;
    max-width: 400px;
    width: 100%;
    justify-self: center;
}

.authorization--form {
    display: grid;
    gap: 20px;
    width: 100%;
}

.authorization--label {
    width: 100%;
}

.authorization--input {
    border-radius: 15px;
    margin-top: 10px;
     width: 100%;
    font-size: 18px;
    color: black;
    padding: 10px 12px;
}

.authorization--submit {
    background-color: #C8234B;
    color: white;
    padding: 8px 14px;
    border-radius: 15px;
    transition: color .2s, background-color .2s;
    font-size: 18px;
    &:hover {
        background-color: transparent;
    color: #C8234B;
    }
    &:active {
        outline: 2px solid #C8234B;
    }
}

</style>



<!-- 


     <div class="form border rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
            <div class="text-center">
                <h1 class="form--title text-2xl font-bold  dark:text-pink-200 font-montserrat">Войти <span class="form--pink">Smorodina</span> </h1>
            </div>
            <div class="mt-6">
                <form>
                    <div class="grid gap-y-4">
                        <div>
                            <label for="email" class="block text-sm mb-2 text-pink-600 dark:text-pink-300 font-montserrat">Логин</label>
                            <div class="relative">
                                <input v-model="login" type="email" id="email" name="email" class="py-3 px-4 block w-full border-pink-300 rounded-lg font-montserrat text-sm focus:border-pink-400 focus:ring-pink-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-pink-500 dark:text-pink-200 dark:placeholder-pink-400 dark:focus:ring-pink-400" required aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                    <svg class="size-5 text-pink-400" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                </div>
                            </div>
                            <p class="hidden text-xs text-pink-500 mt-2 font-montserrat" id="email-error">Пожалуйста, укажите действующий адрес электронной почты</p>
                        </div>
                        <div>
                            <div class="flex justify-between items-center">
                                <label for="password" class="block text-sm mb-2 text-pink-600 dark:text-pink-300 font-montserrat">Пароль</label>
                            </div>
                            <div class="relative">
                                <input v-model="password" type="password" id="password" name="password" class="py-3 px-4 block w-full border-pink-300 font-montserrat rounded-lg text-sm focus:border-pink-400 focus:ring-pink-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-pink-500 dark:text-pink-200 dark:placeholder-pink-400 dark:focus:ring-pink-400" required aria-describedby="password-error">
                                <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                    <svg class="size-5 text-pink-400" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                </div>
                            </div>
                            <p class="hidden text-xs text-pink-500 mt-2 font-montserrat" id="password-error">Требуется 8+ символов</p>
                        </div>
                        <button type="button" @click="sendData" class="w-full py-3 px-4 inline-flex justify-center font-montserrat items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:bg-pink-600 disabled:opacity-50 disabled:pointer-events-none">Войти</button>
                    </div>
                </form>
            </div>
        </div>-->