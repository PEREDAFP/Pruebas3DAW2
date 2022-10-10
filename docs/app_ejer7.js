const app = Vue.createApp({
    data() {
        return {
            titulo:''      
            
        }
    },
    methods:{
        cambiaTitulo(){
            document.title = this.titulo;
            //para obtener el focus
            this.$refs.inputTitulo.focus();
            this.titulo = '';
            
        }
    },
});
app.mount('#miApp');