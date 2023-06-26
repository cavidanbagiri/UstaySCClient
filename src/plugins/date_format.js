
import Date_Format_Comp from '../layouts/Date_Format_Comp.vue';

const dateFormat = {
    install(app, options){
        app.component('DateFormat', Date_Format_Comp);
    }
}

export default dateFormat;