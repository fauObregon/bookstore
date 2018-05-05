import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import authModule from '@/modules/auth';
import productModule from '@/modules/products';

//export es un return   
export default new Vuex.Store({
    // dentro de un JSON cada objeto se seàra con una coma
    state:{
        processing: false,
        loaded: false,
        alert:{
            type:'success',
            show: false,
            message: ''
        }
    },
    // la mutacciones son los fectos o etados o cambios que tendran las variables globales de mi proyecto
    mutations:{
        // la funcion se alimenta de un estado y una variable
        // las funcines se definen en json "nombreDeFuncion:()=>{}"
        setLoaded:(state, loaded)=>{
            state.loaded = loaded;
        },
        setAlertMessage:(state, data)=>{
            state.alert.type = data.type;
            state.alert.show = data.show;
            state.alert.message = data.message;
            setTimeout(()=>{
                state.alert.type = 'success';
                state.alert.show = false;
                state.alert.message = '';
            },data.setTimeout);
        }
    },
    modules:{
        authModule, productModule
    }
});