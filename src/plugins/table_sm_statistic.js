
import TableSMStatistic from '../layouts/Table_SM_Statistic.vue';


const tableSMStatistics = {
    install(app, options) {
        app.component('table-sm-statistics', TableSMStatistic);
    }
}

export default tableSMStatistics;