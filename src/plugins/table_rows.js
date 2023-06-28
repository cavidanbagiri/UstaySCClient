
import Table_Each_Row from '../layouts/Table_Each_Row.vue';

const tablerow = {
    install(app, options){
        app.component('Table-Row', Table_Each_Row);
    }

}


export default tablerow;