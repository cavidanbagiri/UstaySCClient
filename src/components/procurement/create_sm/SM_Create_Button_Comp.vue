
<template>
    <div class="flex my-1">
        <button @click="createSTF" class="bg-red-600 font-medium text-xs py-2 px-3 rounded-md text-white">
            Create STF
        </button>
    </div>
</template>

<script setup>

    import ProcurementStore from '../../../store/procurement_store';
    const procurement_store = ProcurementStore();

    const createSTF = () => {

        procurement_store.createSTF(procurement_store.GETCREATINGSTFDATA);

    }

</script>

<style lang="scss" scoped></style>