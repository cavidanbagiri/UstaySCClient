<template>
        <tr :class="checked_style ? 'text-white bg-blue-600  hover:bg-blue-500 ' : '' "
            class="border-b  hover:bg-gray-100 hover:cursor-pointer" >
            <td class="w-1 p-4 py-2 ">
                <div class="flex items-center">
                    <label class="relative flex cursor-pointer items-center rounded-sm p-1" for="selected_row"
                        data-ripple-dark="true">
                        <input :id="prop.each.id" type="checkbox" @change="checkedRows(prop.each.id)"
                            class=" before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border-2 border-blue-gray-200 transition-all before:absolute 
                            before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500
                             before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10" />
                        <div
                            class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </label>
                </div>
            </td>
            <th class="px-2 py-2 font-medium text-center">
                {{ prop.index + 1 }}
            </th>
            <th class="px-2 font-medium text-center border-y ">
                <div>
                    <span class="bg-orange-100 text-orange-500 py-1 px-2 rounded-xl"> {{ prop.each.stf_num }}</span>
                </div>
            </th>
            <th class="px-2 py-2 font-medium  text-center border-y">
                <p>{{ prop.each.created_at }}</p>
            </th>
            <th class="font-medium text-start border-y px-2 ">
                <div v-if="prop.each.situation==='Waiting'" >
                    <span class=" bg-red-100 w-full text-red-500 py-1 px-2 rounded-md">
                        &#9679 {{ prop.each.situation }} 
                    </span>
                </div>
                <div v-else-if="prop.each.situation==='Processing'" >
                    <span class="bg-blue-100 w-w-full text-blue-500 py-1 px-2 rounded-md">
                        &#9679 {{ prop.each.situation }} 
                    </span>
                </div>
                <div v-else-if="prop.each.situation==='Received'" >
                    <span class="bg-green-100 w-w-full text-green-500 py-1 px-2 rounded-md">
                        &#9679 {{ prop.each.situation }} 
                    </span>
                </div>
            </th>
            <th class="px-2 py-2 font-medium  border-y">
                {{ prop.each.material_type }}
            </th>
            <th class="px-2 py-2  font-medium border-y">
                {{ prop.each.material_name }}
            </th>
            <th class="px-2 py-2  font-medium text-start border-y">
                {{ prop.each.count }}
            </th>
            <th class="px-2 py-2  font-medium text-center border-y">
                {{ prop.each.unit }}
            </th>
            <th class="px-2 py-2 font-medium  text-start border-y">
                {{ prop.each?.field_name }}
            </th>
        </tr>

</template>

<script setup>

    import { ref } from 'vue';
    import OrderStore from '../../../store/order_store';
    const order_store = OrderStore();

    const prop = defineProps(['each','index'])

    const checked_style = ref(false);

    const checkedRows = () => {
        checked_style.value = !checked_style.value
        if(checked_style.value){
            order_store.selecting_rows.push(prop.each.id)
            console.log('add order store selected rows : ',order_store.selecting_rows);
        }
        else{
            order_store.selecting_rows = order_store.selecting_rows.filter((item)=>item!=prop.each.id)
            console.log('remove order store selected rows : ',order_store.selecting_rows);
        }
    }


</script>

<style scoped>

</style>