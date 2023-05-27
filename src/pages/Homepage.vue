<template>
  <Navbar />
  <div class="h-[180vh] bg-orange-300"></div>
  <Footer />
  <Contact />
</template>
<script lang="ts">
  import Contact from '../components/atoms/Contact.vue'
  import Footer from '../components/organisms/Footer.vue'
  import Navbar from '../components/organisms/NavUser.vue';
 
  export default {
    components:{
      Contact,
      Footer,
      Navbar
    },
  }
</script>
<style lang="">
  
</style>