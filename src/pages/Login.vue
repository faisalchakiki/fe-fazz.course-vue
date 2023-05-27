<template lang="">
    <div class="w-full flex justify-center">
        <div class="container flex justify-center ">
            <form @submit.prevent="handleLogin" action="" class="w-full border-[1px] p-4 sm:p-12 md:p-20 rounded-md my-12 max-w-2xl">
                <div class="w-full flex flex-col items-center">
                    <LogoFazz class="mb-5"/>
                    <p class="text-2xl font-semibold mb-2">Selamat Datang</p>
                    <p class="text-normal mb-3">Belum punya akun Fazzrack?
                        <span @click="moveLogin" class="text-[#ef6807] font-bold cursor-pointer">Daptar disini</span>
                    </p>
                </div>
                <div class="w-full">
                    <div class="w-full mb-4">
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            placeholder="Masukan Email"
                            @on-change="hnaldeInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type='password'
                            label='password'
                            name='password'
                            placeholder='Masukan Kata Sandi'
                            @on-change="hnaldeInput"/>
                    </div>
                </div>
                <div class="w-full flex justify-between items-center">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input type="checkbox" checked="checked" class="checkbox-xs mr-5 w-3"/>
                            <span class="label-text">Ingat akun saya</span>
                        </label>
                    </div>
                    <div>
                        <p class="text-[#2557a7] font-bold">Lupa Password?</p>
                    </div>
                </div>
                <BtnPrimary size="btn-sm" title="masuk"/>
                <p  class="w-full text-center my-4">atau masuk menggunakan</p>
                <BtnGoogle title="google"/>
            </form>
        </div>
    </div>
</template>
<script lang='ts'>
    import {defineComponent} from 'vue';
    import Input from '../components/atom/Input.vue';
    import BtnPrimary from "../components/atom/BtnPrimary.vue"
    import BtnGoogle from '../components/atom/BtnGoogle.vue';
    import LogoFazz from '../components/atoms/LogoFazz.vue';
    import axios from 'axios';





    interface Data {
        form: IForm
    }

    interface IForm {
        email: string,
        password: String,
  
    }

    export default defineComponent({
        data(): Data {
            return {
                form: {
                    email: "",
                    password: ""
                }
            }
        },
        components: {
            Input,
            BtnPrimary,
            BtnGoogle,
            LogoFazz
        },
        methods: {
            hnaldeInput(data : any) {
                if (data.name === "email") {
                    this.form.email = data.value
                } else {
                    this.form.password = data.value
                }
                // console.log(import.meta.env.MODE)
            },
            handleLogin(){
                axios.post(`https://fazz-track-sample-api.vercel.app/login`, this.form)
               .then((_res)=>{
                localStorage.setItem('token', _res.data.data.token)
               })
            },
            moveLogin(){
                this.$router.push("/register")
            }
        }
    })
</script>