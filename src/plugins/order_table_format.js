
import OrderTableHeader from '../layouts/Order_Table_Header.vue';

const orderTableHeader = {
    install(app, options){
        app.component('Order-Table-Header', OrderTableHeader);
    }
}

export default orderTableHeader;