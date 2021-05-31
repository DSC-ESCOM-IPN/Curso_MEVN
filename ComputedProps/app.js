const app = Vue.createApp({
    data() {
        return {
            tittle: 'Registro de ventas',
            btnText: 'Registrar Venta',
            name: '',
            cost: 0,
            date: '',
            product: '',
            sales: []
        }
    },
    methods: {
        registerSale() {
            this.sales.push({
                name: this.name,
                date: this.saledate,
                cost: this.currency,
                product: this.product
            })
            this.cost = 0;
            this.name = '';
            this.date = '';
            this.product = '';
        }
    },
    computed: {
        capitalize() {
            return this.product.charAt(0).toUpperCase() + this.product.slice(1);
        },
        capname() {
            let names = this.name.toString().split(' ')
            let final = [];
            names.forEach((name) => {
                final.push(name.charAt(0).toUpperCase() + name.slice(1))
            })
            return final.join(' ');
        },
        capname2() {
            let space = true;
            let final = [];
            for (let i = 0; i < this.name.length; i++) {
                if (space) {
                    final.push(this.name[i].toUpperCase());
                } else {
                    final.push(this.name[i]);
                }
                space = this.name[i] === ' ';
            }
            return final.join('');
        },
        currency() {
            return accounting.formatMoney(this.cost);
        },
        saledate() {
            return moment(this.date).format('MMMM Do YYYY');
        }
    },
    watch: {
        name() {
            this.name = this.capname2;
        },
        product(current) {
            if (current.length <= 1)
                this.product = this.capitalize;
        }
    }
}).mount('#app');
