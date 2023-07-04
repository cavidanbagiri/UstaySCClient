
import TableFilter from '../layouts/Table_Filter.vue';

const tableFilter = {
    
    install(app, options){
        app.component('table-filter', TableFilter);
    }

}

export default tableFilter;