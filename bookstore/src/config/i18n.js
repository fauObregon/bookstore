import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import messages from '@/translations'

//para exportar el proyecto
export default new VueI18n({
    locale:'es',
    messages
});