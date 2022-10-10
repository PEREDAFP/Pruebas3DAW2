const app = Vue.createApp({
    data() {
        return {
            radio:'',
            volumen: 0,
            listaCalculos: [],        
            
        }
    },
    methods:{
        calculaVolumen(){
            document.title ="lo hemos cambiado";
            this.volumen = (4/3) * Math.PI * Math.pow(Math.abs(this.radio), 3);
            this.listaCalculos = [{radio:this.radio, volumen: this.volumen }, ...this.listaCalculos];
            this.radio = '';
            //para obtener el focus
            this.$refs.inputRadio.focus();
            
        }
    },
});
app.mount('#miApp');