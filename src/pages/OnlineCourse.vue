<template lang="">
    <Navbar/>
    <div v-if="loadingStatus"
        class="fixed z-[60] inset-0 bg-[#494c51] opacity-90 flex justify-center items-center">
        <Loading/>
    </div>
    <div v-if="loadingStatus == false" class="flex flex-col items-center w-full">
        <section class="w-full flex flex-col items-center container-class mt-10 ">
            <div class="w-full bg-[#f1f2f3] p-6 rounded-md relative">
                <p class="font-semibold text-xl text-[#1d1e20] mb-5">Online Course Terpopuler</p>
                <div class="carousel w-full">
                    <div
                        v-for="(item, index) in card"
                        :key="index"
                        :id="'slide' + (index+1)"
                        class="carousel-item  relative w-[23%] mx-[1%]">
                        <CardVidio :title="item.title" :cover="item.cover" :level="item.level"/>
                    </div>
                </div>
                <a
                    :href="slide"
                    @click="backCarousel"
                    class="btn btn-circle bg-white absolute -left-5 top-[180px]">
                    <i class="fa-solid fa-angle-left text-black"></i>
                </a>
                <a
                    :href="slide"
                    @click="moveCorousel"
                    class="btn btn-circle bg-white absolute -right-5 top-[180px]">
                    <i class="fa-solid fa-angle-right text-black"></i>
                </a>
            </div>
            <div class="w-full bg-[#f1f2f3] p-6 rounded-md relative mt-8">
                <p class="font-semibold text-xl text-[#1d1e20] mb-5">Online Course Untuk Pemula</p>
                <div class="carousel w-full">
                    <div
                        v-for="(item, index) in card"
                        :key="index"
                        :id="'slide' + item"
                        class="carousel-item  relative w-[23%] mx-[1%]">
                        <CardVidio :title="item.title" :cover="item.cover" :level="item.level"/>
                    </div>
                </div>
                <a
                    :href="slide"
                    @click="backCarousel"
                    class="btn btn-circle bg-white absolute -left-5 top-[180px]">
                    <i class="fa-solid fa-angle-left text-black"></i>
                </a>
                <a
                    :href="slide"
                    @click="moveCorousel"
                    class="btn btn-circle bg-white absolute -right-5 top-[180px]">
                    <i class="fa-solid fa-angle-right text-black"></i>
                </a>
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
            <div class="w-full grid grid-cols-4 gap-4">
                <div
                    v-for="(item, index) in card"
                    :key="index"
                    class="w-full relative cursor-pointer">
                    <div class="flex absolute top-1 z-[11] right-6">
                        {{item.id}}
                        <button
                            @click="showModal(item.id)"
                            class="bg-[#1cb314] w-8 h-8 rounded-full flex justify-center items-center">
                            <i class="fa-regular fa-pen-to-square fa-md"></i>
                        </button>
                        <DeletModal v-if="modalStatus" :id="id" @on-delete="handleDelete"/>
                        <button
                            @click="modalShown(item.id)"
                            class="bg-error w-8 h-8 rounded-full flex justify-center items-center">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    <CardVidio :title="item.title" :cover="item.cover" :level="item.level"/>
                </div>
            </div>
            <div class='w-full flex justify-center'>
                <button
                    @click="moveToAddVidio"
                    class="btn btn-outline hover:bg-white hover:text-[#1d1e20]">Tambah Data</button>
            </div>
            <EditVidioModal
                v-if="modalDeleteStatus"
                @on-click="showModal"
                :id="id"
                @on-edit="handleGetVidio"/>

        </section>
    </div>
    <Footer v-if="loadingStatus == false" />
</template>
<script lang="ts">
    import {defineComponent} from 'vue'
    import CardVidio from "../components/molecules/CardVidio.vue"
    import Footer from '../components/organisms/Footer.vue';
    import Navbar from '../components/organisms/Navbar.vue';
    import EditVidioModal from "../components/molecules/EditVidioModal.vue"
    import DeletModal from '../components/molecules/DeletModal.vue';
    import Loading from "../components/atoms/Loading.vue"
    import axios from 'axios';

    const token = localStorage.getItem('token')

    interface Data {
        card: ICard[]
        count: number,
        slide: string,
        modalDeleteStatus: boolean,
        modalStatus: boolean,
        id: number,
        loadingStatus:boolean
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
            return {
                card: [],
                count: 4,
                slide: '',
                modalDeleteStatus: false,
                modalStatus: false,
                id: 0,
                loadingStatus:false
            }
        },
        components: {
            CardVidio,
            Footer,
            Navbar,
            EditVidioModal,
            DeletModal,
            Loading
        },
        methods: {
            moveCorousel() {
                if (this.count < 4) {
                    this.count = 4
                } else if (this.count < this.card.length) {
                    this.count += 1
                    this.slide = `#slide${this.count}`
                }
            },
            backCarousel() {
                if (this.count > 1) {
                    if (this.count > (this.card.length - 4)) {
                        this.count -= 4
                        this.slide = `#slide${this.count}`
                    } else {
                        this.count--
                        this.slide = `#slide${this.count}`
                    }
                }
            },
            handleGetVidio() {
                this.loadingStatus = true
                axios
                    .get(`https://fazz-track-sample-api.vercel.app/video`, {
                        headers: {
                            Authorization: token
                        }
                    })
                    .then((res) => {
                        this.card = res.data.data
                        this.loadingStatus = false
                    })
            },
            moveToAddVidio() {
                this
                    .$router
                    .push("/add-vidio")
            },
            showModal(param : number) {
                this.id = param
                this.modalDeleteStatus = !this.modalDeleteStatus
            },
            handleDelete(data : any) {
                if (data.value === "confirm") {
                    this.deleteAction(data.id)
                    this.modalStatus = false
                } else {
                    this.modalStatus = false
                }
            },
            deleteAction(id : number) {
                axios
                    .delete(`https://fazz-track-sample-api.vercel.app/video/${id}`, {
                        headers: {
                            Authorization: token
                        }
                    })
                    .then((_res) => {
                        this.handleGetVidio()
                    })

            },
            modalShown(param : number) {
                console.log('hahah', param);
                this.id = param
                this.modalStatus = !this.modalStatus
            }
        },
        mounted() {
            this.handleGetVidio()
        }
    })
</script>