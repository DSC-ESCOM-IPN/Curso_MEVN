const app = Vue.createApp({
    data() {
        return {
            tittle: 'Registro de usuarios',
            lastUser: '',
            lastScore: 0,
            users: {}
        }
    },
    methods: {
        registerUser(extra) {
            this.users[this.lastUser] = this.lastScore + extra;
            this.lastScore = 0;
            this.lastUser = '';
        }
    },
}).mount('#app');