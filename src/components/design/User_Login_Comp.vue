

<template>
    <div class="">
        <teleport to='body' v-if="index_store.GETUSERTELEPORT">
            <div class="modal bg-slate-800 p-10 text-white rounded-xl flex flex-col">
                
                <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white mb-3">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6 mt-2">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                      <input type="email" v-model="user_data.email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@ustay.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                      <input type="password" v-model="user_data.password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button  @click="login" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  
              </form>
            </div>
        </teleport>
    </div>
</template>

<script setup>

    import { ref, reactive } from 'vue';

    import IndexStore from '../../store/index.js';
    import UserStore from '../../store/user_store.js';

    const index_store = IndexStore()
    const user_store = UserStore();

    const user_data = reactive({
        email:'',
        password:''
    });

    const login = async () => {
        console.log('from main buttin click');
        await user_store.LOGINSER(user_data)
        .then((respond)=>{
            // Reload Page Again
            router.push('/');
            location.reload();
        }).catch((err)=>{

        })

    }

</script>

<style scoped>

.modal {
        position: fixed;
        z-index: 999;
        top: 10%;
        left: 50%;
        margin-left: -150px;
    }

</style>