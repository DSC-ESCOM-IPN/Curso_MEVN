const app = Vue.createApp({
    template: `
    <h1>{{tittle}}</h1>
    <div class="container">
        <div class="row">
            <div class="col-6">
            <button type="button" class="btn btn-success" :class="{active: showForm}" @click="showForm = !showForm" >Show Form</button>
            </div>
            <div class="col-6">
                <button type="button" class="btn btn-info" :class="{active: showTable}" @click="showTable = !showTable" >Show Table</button>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <UserForm v-if="showForm" :sales=sales />
            </div>
            <div class="col-6">
                <UserTable v-if="showTable" :sales=sales />
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            tittle: 'Aplicación ventas',
            showForm: true,
            showTable: true,
            sales: []
        }
    },
    beforeCreate() {
        console.log('App: beforeCreate()')
    },
    created() {
        console.log('App: created()')
    },
    beforeMount() {
        console.log('App: beforeMount()')
    },
    mounted() {
        console.log('App: mounted()')
    },
    beforeUpdate() {
        console.log('App: beforeUpdate()')
    },
    updated() {
        console.log('App: updated()')
    },
    beforeUnmount() {
        console.log('App: beforeUnmount()')
    },
    unmounted() {
        console.log('App: unmounted()')
    }
});


app.component('UserForm', {
    template: `
    <div>
        <h2 v-once>{{ tittle }}</h2>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Nombre" v-model="name"/>
            </div>
            <div class="col">
                <input type="text" class="form-control" placeholder="Producto" v-model="product"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="date" class="form-control" placeholder="Fecha de venta" v-model="date" />
            </div>
            <div class="col">
            <input type="number" class="form-control" placeholder="Precio" v-model.number="cost" @keyup.enter="registerSale()" />
            </div>
        </div>
        <div class="row">
            <div class="col">
            <button class="btn btn-primary" @click="registerSale()">{{btnText}}</button>
            </div>
        </div>        
    </div>
    `,
    props: {
        sales: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            tittle: 'Registro de ventas',
            btnText: 'Registrar Venta',
            name: '',
            cost: 0,
            date: '',
            product: '',
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
    },
    beforeCreate() {
        console.log('Form: beforeCreate()')
    },
    created() {
        console.log('Form: created()')
    },
    beforeMount() {
        console.log('Form: beforeMount()')
    },
    mounted() {
        console.log('Form: mounted()')
    },
    beforeUpdate() {
        console.log('Form: beforeUpdate()')
    },
    updated() {
        console.log('Form: updated()')
    },
    beforeUnmount() {
        console.log('Form: beforeUnmount()')
    },
    unmounted() {
        console.log('Form: unmounted()')
    }
});

app.component('UserTable', {
    template: `
    <div class="table-responsive">
    <table class="table table-light table-striped">
            <thead>
                <tr>
                <th scope="col">Seller</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in sales">
                    <td scope="row">{{item.name}}</td>
                    <td>{{item.product}}</td>
                    <td>{{item.cost}}</td>
                    <td>{{item.date}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
    props: {
        sales: {
            type: Array,
            required: true
        }
    },
    beforeCreate() {
        console.log('Table: beforeCreate()')
    },
    created() {
        console.log('Table: created()')
    },
    beforeMount() {
        console.log('Table: beforeMount()')
    },
    mounted() {
        console.log('Table: mounted()')
    },
    beforeUpdate() {
        console.log('Table: beforeUpdate()')
    },
    updated() {
        console.log('Table: updated()')
    },
    beforeUnmount() {
        console.log('Table: beforeUnmount()')
    },
    unmounted() {
        console.log('Table: unmounted()')
    }
});

app.mount('#app');