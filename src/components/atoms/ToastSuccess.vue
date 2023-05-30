<template>
    <div class="toast z-[120]">
        <div class="alert alert-success">
            <p class="text-white text-lg text-center">{{ title }}</p>
        </div>
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
    }
})

</script>