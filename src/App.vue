<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  body {
    background-color: #ddd;
    background-image: url("./assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  html {
    height: 100vh;
  }
</style>
