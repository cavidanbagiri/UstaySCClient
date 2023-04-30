<template>

    <div class="border-2 p-3 ">
        {{ selected_user }}
        <button v-html="selected_user" class="border py-2 px-6 w-60 bg-blue-500 text-white font-bold"
            @click="show_dropdown = !show_dropdown">

        </button>

        <!-- <transition enter-active-class="transition ease-out duration-750" enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-750"
            leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"> -->

            <transition enter-active-class="transition ease-out duration-750" enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-750"
            leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">

            <!-- Dropdown menu -->
            <div id="dropdownUsers" v-if="show_dropdown" class="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                <ul class="h-48 py-2  overflow-y-auto text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUsersButton">
                    <li class="text-xs" @click="changeBtnText($event)">
                        <div class="">
                            <a href="#"
                                class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <img class="w-6 h-6 mr-2 rounded-full"
                                    src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                                    alt="Jese image">
                                Cavidan Bagirli
                            </a>
                        </div>
                    </li>
                    <li class="text-xs">
                        <a href="#"
                            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <img class="w-6 h-6 mr-2 rounded-full"
                                src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                                alt="Jese image">
                            Mehmet Ugur Dogan
                        </a>
                    </li>
                    <li class="text-xs">
                        <a href="#"
                            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <img class="w-6 h-6 mr-2 rounded-full"
                                src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                                alt="Jese image">
                            Ibrahim Avsar
                        </a>
                    </li>
                    <li class="text-xs">
                        <a href="#"
                            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            <img class="w-6 h-6 mr-2 rounded-full"
                                src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                                alt="Jese image">
                            Husame Sahin
                        </a>
                    </li>

                </ul>
            </div>
        </transition>

    </div>
    
</template>

<script setup>
import { ref } from 'vue';
const show_dropdown = ref(false);

let selected_user = ref('<div class="flex items-center text-xs"><img class="w-6 h-6 mr-2 rounded-full"' +
    'src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"' +
    'alt="Jese image">' +
    'Supplier Name</div>')

const changeBtnText = (elem) => {
    console.log(elem.target);
    // selected_user.value='<div class="flex items-center text-xs"><img class="w-6 h-6 mr-2 rounded-full"' +
    // 'src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"' +
    // 'alt="Jese image">' +
    // 'Hello world</div>'
    selected_user.value=elem.srcElement
}

</script>

<style lang="scss" scoped></style>