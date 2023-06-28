
import TableHeader from '../layouts/Table_Header.vue';

const tableHeader = {
    install(app, options){
        app.component('Table-Header', TableHeader);
    }
}

export default tableHeader;