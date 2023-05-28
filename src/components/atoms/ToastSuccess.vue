<template>
    <div class="toast">
        <div class="alert alert-success">
            <div>
                <span>{{ title }}</span>
            </div>
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