<template>
<!-- <div class="flex items-center justify-center h-screen ">
    <div class="p-6 text-center  text-7xl text-black font-semibold bg-white-500 rounded-4xl ">
        Happy coding & good luck to you!
    </div>
</div> -->

<router-link to="/"></router-link>
<router-link to="/Login"></router-link>
<router-link to="/ForgotPassword"></router-link>
<router-link to="/OtpPage"></router-link>
<router-link to="/Pass_change_page"></router-link>
<router-view></router-view>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import "../main.css"
export default {
    name: 'App',
    components: {
        // HelloWorld
       
    },
    
}
</script>

