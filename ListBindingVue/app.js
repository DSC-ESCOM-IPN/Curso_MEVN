Vue.createApp({
    data() {
        return {
            tareas: [],
            valor: ''
        }
    },
    methods: {
        agregarTarea() {
            this.tareas.push(this.valor),
                this.valor = ''
        }
    }
}).mount('#app');