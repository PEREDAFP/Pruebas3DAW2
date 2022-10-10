const app = Vue.createApp({
    data() {
        return {
            newElemento:'',
            listaElementos: [],
        }
    },
    methods:{
        addElemento(){
            this.listaElementos.push( this.newElemento );
            this.newElemento = '';
        }
    },
});
app.mount('#miApp');