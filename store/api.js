import { defineStore} from 'pinia'

export const api = defineStore('apiUrl', {
    state: () => ({
        url: 'http://87.249.49.97:81/'
    })
})