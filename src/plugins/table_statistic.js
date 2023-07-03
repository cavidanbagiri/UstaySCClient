
import TableStatistic from '../layouts/Table_Statistic.vue';


const tableStatistics = {
    install(app, options) {
        app.component('table-statistics', TableStatistic);
    }
}

export default tableStatistics;