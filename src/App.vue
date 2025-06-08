<template>
  <div class="p-6 text-center text-2xl text-red-600 font-semibold bg-red-500">
    Tailwind is working! ✅
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import'./assets/tailwind.css'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
} 
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
