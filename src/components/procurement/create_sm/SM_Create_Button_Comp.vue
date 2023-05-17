
<template>
    <div class="my-1 flex justify-between ">
        <button v-if="procurement_store.GETCHECKEDVALUES.length>=1" @click="createSTF" class="bg-red-600 font-medium text-xs py-2 px-3 rounded-md text-white">
            Create SM
        </button>
        <div class="flex">
            <div>
                <input class="border outline-none font-sans rounded-lg w-full h-full p-3 text-xs" type="date" name="" id="" v-model="common_data.procurement_coming_date">
            </div>
            <div>
                <select class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs" v-model="common_data.VendorModelId">
                    <option v-for="i in vendor_list" :value="i.id">{{ i.vendor_name }}</option>
                </select>
            </div>
            <div>
                <select class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs" v-model="common_data.supplierName">
                    <option v-for="i in supplier_list" :value="i.id">{{ i.username }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { ref, reactive, watchEffect, computed} from 'vue';

    import ProcurementStore from '../../../store/procurement_store';
    const procurement_store = ProcurementStore();

    const common_data = reactive({
        procurement_coming_date : '',
        VendorModelId : 0,
        supplierName : 0,
    })

    // Get All Vendors and Show in vendors List
    const vendor_list = computed(()=>{
        return procurement_store.GETCOMPANIESNAMES;
    })
    // Get All Suppliers and show in supplier List
    const supplier_list = computed(()=>{
        return procurement_store.GETPROCUREMENTUSERSNAMES;
    })

    const createSTF = async () => {
        let check_valid = true;
        if(common_data.VendorModelId === 0 ){
            check_valid = false;
            alert('Vendor name must be choosed')
        }
        else if(common_data.supplierName === 0 ){
            check_valid = false;
            alert('Supplier Name Must Be Choosed')
        }
        else{
            for( let i = 0 ; i < procurement_store.GETCREATINGSTFDATA.length; i ++ ){ 
                if(procurement_store.GETCREATINGSTFDATA[i].price <=0 ){
                    check_valid = false;
                    alert(`Price Must Be Greater Than 0 in ${i+1} Row`)
                    break;
                }
                else{
                    procurement_store.creating_STF_datas[i].VendorModelId = common_data.VendorModelId;
                    procurement_store.creating_STF_datas[i].supplierName = common_data.supplierName;
                }
            }
        }
        if(check_valid){
            await procurement_store.createSTF(procurement_store.GETCREATINGSTFDATA)
            .then((respond)=>{
                console.log("respond from checkvalid : ",respond);
                procurement_store.creating_STF_datas = [];
            }).catch((err)=>{

            })
        }

    }

</script>

<style lang="scss" scoped></style>