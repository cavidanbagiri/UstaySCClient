
import TableSTFStatistic from '../layouts/Table_STF_Statistic.vue';


const tableSTFStatistics = {
    install(app, options) {
        app.component('table-stf-statistics', TableSTFStatistic);
    }
}

export default tableSTFStatistics;