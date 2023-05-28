<template lang="">
    <div>
        <button @click="onClick" :class="'btn w-full mt-2 rounded-md hover:bg-[#ef6807] bg-[#ef6807] border-none'+' '+size">{{title}}</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props:{
        title:{
            type:String,
            required: true
        },
        size:{
            type:String,
            required:false,
            default:""
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