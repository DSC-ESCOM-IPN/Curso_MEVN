Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('capname', function (value) {
    if (!value) return ''
    let names = value.toString().split(' ')
    let final = [];
    names.forEach((name) => {
        final.push(name.charAt(0).toUpperCase() + name.slice(1))
    })
    return final.join(' ');
})

Vue.filter('capname2', function (value) {
    if (!value) return ''
    value = value.toString()
    let space = true;
    let final = [];
    for (let i = 0; i < value.length; i++) {
        if (space) {
            final.push(value[i].toUpperCase());
        } else {
            final.push(value[i]);
        }
        space = value[i] === ' ';
    }
    return final.join('');
})

Vue.filter('currency', function (value) {
    return accounting.formatMoney(value);
})

Vue.filter('saledate', function (value) {
    return moment(value).format('MMMM Do YYYY');
})

const app = new Vue({
    el: '#app',
    data: {
        tittle: 'Registro de ventas',
        btnText: 'Registrar Venta',
        name: '',
        cost: 0,
        date: '',
        product: '',
        sales: []
    },
    methods: {
        registerSale: function () {
            this.sales.push({
                name: this.name,
                date: this.date,
                cost: this.cost,
                product: this.product
            })
            this.cost = 0;
            this.name = '';
            this.date = '';
            this.product = '';
        }
    },
    watch: {
        name: function (val) {
            this.name = this.$options.filters.capname2(val);
        },
        product: function (val) {
            this.product = this.$options.filters.capitalize(val);
        }
    }
});
