<template lang="">
    <Navbar/>
    <div class="flex flex-col items-center w-full">
        <section class="w-full flex flex-col items-center container mt-10 ">
            <div class="w-full bg-[#f1f2f3] p-6 rounded-md relative">
                <p class="font-semibold text-xl text-[#1d1e20] mb-5">Online Course Terpopuler</p>
                <div class="carousel w-full">
                    <div v-for="(item, index) in card" :key="index" :id="'slide' + item" class="carousel-item  relative w-[23%] mx-[1%]">
                        <CardVidio :title="item.title" :cover="item.cover" :level="item.level"/>
                    </div>
                </div>
                <a :href="slide" @click="backCarousel"  class="btn btn-circle bg-white absolute -left-5 top-[180px]"><i class="fa-solid fa-angle-left text-black"></i></a> 
                <a :href="slide" @click="moveCorousel" class="btn btn-circle bg-white absolute -right-5 top-[180px]"><i class="fa-solid fa-angle-right text-black"></i></a>
            </div>
            <div class="w-full bg-[#f1f2f3] p-6 rounded-md relative mt-8">
                <p class="font-semibold text-xl text-[#1d1e20] mb-5">Online Course Untuk Pemula</p>
                <div class="carousel w-full">
                    <div v-for="(item, index) in card" :key="index" :id="'slide' + item" class="carousel-item  relative w-[23%] mx-[1%]">
                        <CardVidio :title="item.title" :cover="item.cover" :level="item.level"/>
                    </div>
                </div>
                <a :href="slide" @click="backCarousel"  class="btn btn-circle bg-white absolute -left-5 top-[180px]"><i class="fa-solid fa-angle-left text-black"></i></a> 
                <a :href="slide" @click="moveCorousel" class="btn btn-circle bg-white absolute -right-5 top-[180px]"><i class="fa-solid fa-angle-right text-black"></i></a>
            </div>
            <div class="w-full mt-10">
                <p class="mb-10 font-semibold text-2xl text-[#1d1e20]">Semua Online Course</p>
                <div
                    class='w-full wrap-input p-3 border mb-10 rounded-md focus-within:border-red-900 focus-within:shadow-[0_0_0.25rem_rgba(242,129,48,.2)]'>
                    <i class="fa fa-search mr-3"></i>
                    <input
                        type="serach"
                        placeholder="Cari kelas untuk pekerjaan impianmu"
                        class="focus:outline-none border-l-[1px] pl-3 w-full max-w-md"/>
                </div>
            </div>
            <div class="w-full flex flex-wrap justify-between">
                <div v-for="(item, index) in card" :key="index" class="w-[23%]">
                    <CardVidio :title="item.title" :cover="item.cover" :level="item.level"/>
                </div>
            </div>
            <div class='w-full flex justify-center'>
                <button @click="moveToAddVidio" class="btn btn-outline hover:bg-white hover:text-[#1d1e20]">Tambah Data</button>
            </div>
        </section>
    </div>
    <Footer/>
</template>
<script lang="ts">
    import {defineComponent} from 'vue'
    import CardVidio from "../components/molecules/CardVidio.vue"
    import Footer from '../components/organisms/Footer.vue';
    import Navbar from '../components/organisms/Navbar.vue';
    import axios from 'axios';

    const token = localStorage.getItem('token')

    interface Data {
        card: ICard[]
        count: number,
        slide: string
    }
    interface ICard {
        id: number;
        created_at: Date;
        title: string;
        description: string;
        cover: string;
        rating: number;
        level: string;
        price: number;
    }

    export default defineComponent({
        data(): Data {
            return {card: [], count: 4, slide: ''}
        },
        components: {
            CardVidio,
            Footer,
            Navbar
        },
        methods: {
            moveCorousel() {
                if (this.count < this.card.length) {
                    this.count += 4
                    this.slide = `#slide${this.count}`
                } else {
                    this.count = 1
                }
            },
            backCarousel() {
                if (this.count > 1) {
                    this.count -= 4
                    this.slide = `#slide${this.count}`
                } else {
                    this.count = this.card.length
                }
            },
            handleGetVidio() {
                console.log(token);
                axios
                    .get(`https://fazz-track-sample-api.vercel.app/video`, {
                        headers: {
                            Authorization: token
                        }
                    })
                    .then((res) => {
                        this.card = res
                            .data
                            .data
                    })
            },
            moveToAddVidio(){
                this.$router.push("/add-vidio")
            }
        },
        mounted() {
            this.handleGetVidio()

        }
    })
</script>
<style lang="">
    /* .wrap-input{
        input:focus {
            outline-color: $blue;
        }
    } */
</style>