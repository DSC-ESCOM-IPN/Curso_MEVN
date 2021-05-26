const app = Vue.createApp({
    data() {
        return {
            vueLogo: '<img class="hero-logo" src="https://vuejs.org/images/logo.svg" alt="Vue logo">',
        }
    },
    methods: {
        toggleVueLogo() {
            if (this.vueLogo === '')
                this.vueLogo = '<img class="hero-logo" src="https://vuejs.org/images/logo.svg" alt="Vue logo">';
            else
                this.vueLogo = '';
        },
        showEvent(event){
            console.log(event);
            alert(`Mouseover detected in ${event.x} and ${event.y}`)
        }
    },
}).mount('#app');