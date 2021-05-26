const app = Vue.createApp({
    data() {
        return {
            tittle: 'Registro de usuarios',
            lastUser: '',
            lastScore: 0,
            users: [],
            scores: []
        }
    },
    methods: {
        registerUser(extra) {
            this.users.push(this.lastUser);
            this.scores.push(this.lastScore + extra);
            this.lastScore = 0;
            this.lastUser = '';
        }
    },
}).mount('#app');