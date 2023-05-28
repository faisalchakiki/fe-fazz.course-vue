<template>
  <div class="bg-white sticky top-[5rem] z-40 flex shadow-1 justify-center">
    <nav class="container-class w-full flex items-center gap-4">
      <p v-for="item in options" :key="item.id" class="text-[#797e86] text-sm hover:text-black font-semibold py-3 cursor-pointer border-b-4 border-white hover:border-[#ef6807]">{{item.value}}</p>
    </nav>
  </div>
</template>
<script lang="ts">
  import {PropType} from 'vue'
  interface IOptions {
      id: number
      value: string
      active: boolean
  }
  export default {
    props:{
      options : {
        type: Array as PropType<IOptions[]>,
        required : true
      }
    },
    methods: {
    
    }
  }
</script>
<style>

</style>