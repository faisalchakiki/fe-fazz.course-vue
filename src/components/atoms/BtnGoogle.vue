<template lang="">
    <div>
        <button @click="onClick" class="w-full flex justify-center items-center py-1 rounded-md font-semibold border border-[#6c757d]  hover:text-black">
            <img class="w-5 h-5 mr-2"  src="../../assets/icon/google.svg" alt="">
            {{title}}
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props:{
        title:{
            type:String,
            required: true
        }
    },
    methods: {
        onClick(){
            this.$emit('event', "")
        }
    },
})
</script>
<style>
    
</style>