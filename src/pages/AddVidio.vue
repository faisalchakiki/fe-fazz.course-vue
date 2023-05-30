<template lang="">
    <Navbar/>
    <div class="w-full flex justify-center">
        <div class="container flex justify-center ">
            <form @submit.prevent="handlePostVidio" action="" class="w-full border-[1px] p-4 sm:p-12 md:p-20 rounded-md my-12 max-w-2xl">
                <div class="w-full flex flex-col items-center">
                    <div>
                        <LogoFazz/>
                    </div>
                    <p class="text-xl font-semibold mb-2">Tambah Data Vidio</p>
                </div>
                <div class="w-full">
                    <div class="w-full mb-4">
                        <Input
                            type="text"
                            label="Judul Vidio"
                            name="title"
                            placeholder="Masukan judul vidio..."
                            @on-change="hnaldeInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type="text"
                            label="deskripsi"
                            name="description"
                            placeholder="Masukan Deskripsi..."
                            @on-change="hnaldeInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type="text"
                            label="URL Cover Vidio"
                            name="cover"
                            placeholder="Masukan url cover vidio..."
                            @on-change="hnaldeInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type='number'
                            label='Ratting'
                            name='ratting'
                            placeholder='Masukan ratting Vidio...'
                            @on-change="hnaldeInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type='text'
                            label='Level'
                            name='level'
                            placeholder='Masukan level vidio...'
                            @on-change="hnaldeInput"/>
                    </div>
                    <div class="w-full mb-10">
                        <Input
                            type='number'
                            label='Harga'
                            name='harga'
                            placeholder='Masukan harga vidio...'
                            @on-change="hnaldeInput"/>
                    </div>
                </div>
                <BtnPrimary title="Tambah Vidio"/>
            </form>
        </div>
    </div>
    <Footer/>
</template>
<script lang='ts'>
    import {defineComponent} from 'vue';
    import Input from '../components/atoms/Input.vue';
    import BtnPrimary from "../components/atoms/BtnPrimary.vue"
    import BtnGoogle from '../components/atoms/BtnGoogle.vue';
    import LogoFazz from '../components/atoms/LogoFazz.vue';
    import axios from "axios"
    import Navbar from '../components/organisms/Navbar.vue';
    import Footer from '../components/organisms/Footer.vue';

    const token = localStorage.getItem('token')


    interface Data {
        form: IForm
    }

    interface IForm {
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
                form: {
                    title: 'string',
                    description: 'string',
                    cover: 'string',
                    rating: 0,
                    level: 'string',
                    price: 0,
                }
            }
        },
        components: {
            Input,
            BtnPrimary,
            BtnGoogle,
            LogoFazz,
            Navbar,
            Footer
        },
        methods: {
            hnaldeInput(data : any) {

                if (data.name === 'title') {
                    this.form.title = data.value
                } else if (data.name === 'description'){
                    this.form.description = data.value
                }else if (data.name === 'cover'){
                    this.form.cover = data.value
                }else if (data.name === 'rating'){
                    this.form.rating = data.value
                }else if (data.name === 'level'){
                    this.form.level = data.value
                }
                else {
                    this.form.price = data.value
                }
                console.log(this.form);
                
            },
            handlePostVidio(){
               axios.post(`https://fazz-track-sample-api.vercel.app/video`, this.form, {
                headers:{
                    Authorization:token
                }
               })
               .then((_res)=>{
                console.log(_res);
                this.$router.push('/online-course')
               })
            
            }
        }
    })
</script>