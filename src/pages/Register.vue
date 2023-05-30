<template lang="">
    <div class="w-full flex justify-center">
        <div class="container flex justify-center ">
            <form @submit.prevent="handleRegister" action="" class="w-full border-[1px] p-4 sm:p-12 md:p-20 rounded-md my-12 max-w-2xl">
                <div class="w-full flex flex-col items-center">
                    <LogoFazz class="mb-3" />
                    <p class="text-2xl font-semibold mb-2">Daftar dan Mulai Belajar</p>
                    <p class="text-normal mb-3">Sudah punya akun Fazzrack?
                        <span  @click="moveRegiter" class="text-[#ef6807] cursor-pointer">Masuk disini</span>
                    </p>
                </div>
                <div class="w-full">
                    <div class="w-full mb-4">
                        <Input
                            type="text"
                            label="Nama Lengkap"
                            name="fullname"
                            placeholder="Masukan nama lengkap..."
                            @on-change="handleInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            placeholder="Masukan Email..."
                            @on-change="handleInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type="text"
                            label="No. Handphone"
                            name="handphone"
                            placeholder="Masukan No. handphone..."
                            @on-change="handleInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type='password'
                            label='Kata Sandi'
                            name='password'
                            placeholder='Masukan Kata Sandi...'
                            @on-change="handleInput"/>
                    </div>
                    <div class="w-full mb-4">
                        <Input
                            type='password'
                            label='Kata Sandi'
                            name='passwordConfirm'
                            placeholder='Masukan ulang Kata Sandi...'
                            @on-change="handleInput"/>
                    </div>
                </div>
                <div class="w-full flex items-center my-6">
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input type="checkbox" checked="checked" class="checkbox-xs mr-5 w-3"/>
                            <span class="label-text">saya menyetujui</span>
                        </label>
                    </div>
                    <div>
                        <p class="text-[#2557a7] font-bold">Syarat dan Ketentuan</p>
                    </div>
                </div>
                <BtnPrimary title="Daftar Fazztrack"/>
            </form>
        </div>
    </div>
</template>
<script lang='ts'>
    import {defineComponent} from 'vue';
    import Input from '../components/atoms/Input.vue';
    import BtnPrimary from "../components/atoms/BtnPrimary.vue"
    import BtnGoogle from '../components/atoms/BtnGoogle.vue';
    import Swal from 'sweetalert2'
    import LogoFazz from '../components/atoms/LogoFazz.vue';
    import axios from "axios"

    interface Data {
        passwordConfirm : string
        form: IForm
    }

    interface IForm {
        email: string,
        password: String,
    }

    export default defineComponent({
        data(): Data {
            return {
                passwordConfirm: "",
                form: {
                    email: "",
                    password: "",
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
            handleInput(data : any) {
                if (data.name === "email") {
                    this.form.email = data.value
                } else if(data.name === "password") {
                    this.form.password = data.value
                } else{
                    this.passwordConfirm = data.value
                }
            },
            handleRegister(){
                if(this.form.email === '' || this.form.password === ''){
                    return Swal.fire('Please fill all the input', '', 'warning')
                }else if(this.passwordConfirm !== this.form.password){
                    return Swal.fire('Password Not Match', '', 'warning')
                }else{
                    axios.post(`https://fazz-track-sample-api.vercel.app/register`, this.form)
                    .then((_res)=>{
                        Swal.fire('Register is Success,', 'dimohon untuk login ulang', 'success')
                        setTimeout(() => {
                            return this.$router.push('/login')
                        }, 2000);
                    }).catch((_err) => {
                        Swal.fire('Internal Server Error', '', 'error')
                        setTimeout(() => {
                            return window.location.reload()
                        }, 2000);
                    })
                }
            },
            moveRegiter(){
                this.$router.push("/login")
            }
        }
    })
</script>