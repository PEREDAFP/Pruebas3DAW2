const app = Vue.createApp({
    data() {
        return {
            radio:'',
            volumen: 0,
        }
    },
    methods:{
        calculaVolumen(){
            this.volumen = (4/3) * Math.PI * Math.pow(Math.abs(this.radio), 3);
            this.radio = '';
        }
    },
});
app.mount('#miApp');