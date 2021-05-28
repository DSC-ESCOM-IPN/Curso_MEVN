const app = Vue.createApp({
    template: `
        <button class="dec" @click="dec()">{{btnDecText}}</button>
        <button class="inc" @click="inc()">{{btnIncText}}</button>
        <table>
            <tr v-for="x in boardList">
                <td v-for="y in boardList" :class="setClass(x+1, y+1)"></td>
            </tr>
        </table>
    `,
    data() {
        return {
            size: 1,
            btnIncText: 'Incrementar',
            btnDecText: 'Decrementar'
        }
    },
    methods: {
        dec() {
            if (--this.size <= 0)
                this.size = 1;
        },
        inc() {
            this.size++;
        },
        isEven(num) {
            return num % 2 == 0;
        },
        setClass(row, col) {
            if (this.isEven(row)) {
                return !this.isEven(col) ? 'white' : 'black';
            }
            return this.isEven(col) ? 'white' : 'black';
        }
    },
    computed: {
        boardList() {
            return [...Array(this.size).keys()];
        }
    }
}).mount('#app');