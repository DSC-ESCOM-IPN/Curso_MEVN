const app = Vue.createApp({
    data() {
        return {
            tittle: 'Registro de usuarios',
            lastUser: '',
            lastScore: 0,
            users: []
        }
    },
    methods: {
        registerUser(extra) {
            var finalScore = this.lastScore + extra;
            if (finalScore > 10.0) finalScore = 10.0;
            this.users.push({
                name: this.lastUser,
                score: finalScore
            })
            this.lastScore = 0;
            this.lastUser = '';
        },
        statusAlert(score) {
            alert(score >= 6.0 ? 'Aprobado' : 'Reprobado');
        }
    },
}).mount('#app');