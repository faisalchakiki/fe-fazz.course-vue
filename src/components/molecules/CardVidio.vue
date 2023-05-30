<template>
    <div class="card max-w-[250px] bg-base-100 shadow-md rounded-md flex justify-center mb-5 hover:scale-[1.03] duration-100">
        <figure>
            <img
                :src="cover"
                class="h-[127px] w-full"
                alt="TUTORIAL JAVA DASAR BAHASA INDONESIA"></figure>
        <div class="card-body p-4 min-h-[185px] flex flex-col justify-between">
            <h2 class="card-title text-base">{{ title }}</h2>
            <div>
                <div class="flex w-full justify-between items-center mb-2">
                    <i
                        v-for="(_item, index) in iconStar"
                        :key="index"
                        class="fa-solid fa-star fa-sm text-[#ef6807]"></i>
                    <p class="text-end text-[#494c51]">level {{ level?.toLocaleLowerCase() }}</p>
                </div>
                <hr>
                <div class="flex justify-between mt-2">
                    <p class="text-[#494c51]">Harga:</p>
                    <p class="text-[#ef6807] text-end font-semibold ">Gratis</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';
    export default defineComponent({
        data() {
            return {
                iconStar: [1, 2, 3, 4, 5]
            }
        },
        props:{
            cover:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            level:{
                type:String,
                required:true
            },
            price:{
                type:String,
                required:false,
                default:""
            },
            
        }
    })
</script>