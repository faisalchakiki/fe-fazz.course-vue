<template>
  <section class="bg-white z-[100] sticky top-0 right-0 left-0 h-20 flex justify-center items-center shadow-1">
    <!-- <div class="fixed z-60 inset-0 bg-[#494c51] opacity-50"></div> -->
    <nav class="container-class bg-white flex items-center">
          <a href="/" class="w-56">
            <Logo />
          </a>
          <main class="flex flex-1 justify-between items-center">
            <section class="flex justify-between items-center font-bold gap-5">
              <div @click="showNav1" class="relative flex justify-between items-center cursor-pointer">
                <p>Kelas</p>
                <ArrowDown v-if="isOpenNav1 === false" />
                <ArrowUp v-if="isOpenNav1 === true" /> 
                <nav v-if="isOpenNav1" class="absolute -left-[24px] top-6 z-10 mt-10 bg-white border-[1px] solid border-[#DADCE0] rounded-[8px] p-[24px] flex items-stretch">
                  <section class="flex">
                    <section>
                      <p class="text-[#b6bac0] font-medium mb-[16px] uppercase whitespace-nowrap">Bootcamp</p>
                      <section class="flex flex-col items-start gap-[6px]">
                        <a class="flex items-center font-bold whitespace-nowrap py-[4px]">Fullstack Mobile</a>
                        <a class="flex items-center font-bold whitespace-nowrap py-[4px]">Fullstack Website dan Golang</a>
                      </section>
                    </section>
                  </section>
                  <section class="flex">
                    <div class="w-[0.4px] bg-neutral-300 mx-[24px]"></div>
                    <section>
                      <p class="text-[#b6bac0] font-medium mb-[16px] uppercase whitespace-nowrap">Mini Bootcamp</p>
                      <section class="flex flex-col items-start gap-[6px]">
                        <a rel="noopener noreferrer" class="flex items-center font-bold whitespace-nowrap py-[4px]">Kelas Persiapan Bootcamp Fullstack Web </a>
                        <a rel="noopener noreferrer" class="flex items-center font-bold whitespace-nowrap py-[4px]">Quality Assurance Manual </a>
                        <a rel="noopener noreferrer" class="flex items-center font-bold whitespace-nowrap py-[4px]">UX Writer </a>
                        <a rel="noopener noreferrer" class="flex items-center font-bold whitespace-nowrap py-[4px]">Lihat Semua 
                          <svg data-v-cf1ec82f="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon ml-[8px]" width="16px" height="16px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"></path></svg>
                        </a>
                      </section>
                    </section>
                  </section>
                  <section class="flex">
                    <div class="w-[0.4px] bg-neutral-300 mx-[24px]">
                    </div>
                    <section>
                      <p class="text-[#b6bac0] font-medium mb-[16px] uppercase whitespace-nowrap">Online Course</p>
                      <section class="flex flex-col items-start gap-[6px]">
                        <p @click="moveRoute('/online-course')" rel="noopener noreferrer" class="flex items-center font-bold whitespace-nowrap py-[4px]">Lihat Semua <svg data-v-cf1ec82f="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon ml-[8px]" width="16px" height="16px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"></path></svg>
                        </p>
                      </section>
                    </section>
                  </section>
                </nav>
              </div>
              <div @click="showNav2" class="relative flex justify-between items-center cursor-pointer">
                <p>Dukungan</p>
                <ArrowDown v-if="isOpenNav2 === false" />
                <ArrowUp v-if="isOpenNav2 === true"/>
                <nav v-if="isOpenNav2" class="absolute -left-[24px] top-6 z-10 mt-10 bg-white border-[1px] solid border-[#DADCE0] rounded-[8px] p-[24px] flex items-stretch">
                  <section class="flex">
                    <section>
                      <section class="flex flex-col items-start gap-[6px]">
                        <a class="flex items-center font-bold whitespace-nowrap py-[4px]">Cicilan Setelah Kerja</a>
                        <a class="flex items-center font-bold whitespace-nowrap py-[4px]">Career Ready</a>
                        <a class="flex items-center font-bold whitespace-nowrap py-[4px]">FAQ</a>
                      </section>
                    </section>
                  </section>
                </nav>
              </div>
              <div @click="showNav3" class="relative flex justify-between items-center cursor-pointer">
                <p>Tentang</p>
                <ArrowDown v-if="isOpenNav3 === false" />
                <ArrowUp v-if="isOpenNav3 === true" />
                <nav v-if="isOpenNav3" class="absolute -left-[24px] top-6 z-10 mt-10 bg-white border-[1px] solid border-[#DADCE0] rounded-[8px] p-[24px] flex items-stretch">
                  <section class="flex">
                    <section>
                      <p class="text-[#b6bac0] font-medium mb-[16px] uppercase whitespace-nowrap">Alumni</p>
                      <section class="flex flex-col items-start gap-[6px]">
                        <a class="flex items-center font-bold whitespace-nowrap py-[4px]">Cerita Alumni</a>
                      </section>
                    </section>
                    <section class="flex">
                      <div class="w-[0.4px] bg-neutral-300 mx-[24px]"></div>
                      <section>
                        <p class="text-[#b6bac0] font-medium mb-[16px] uppercase whitespace-nowrap">Fazztrack</p>
                        <section class="flex flex-col items-start gap-[6px]">
                          <a rel="noopener noreferrer" class="flex items-center font-bold whitespace-nowrap py-[4px]">Sekilas Fazztrack</a>
                        </section>
                      </section>
                    </section>
                  </section>
                </nav>
              </div>        
              <div class="font-bold cursor-pointer">
                <p>Hire Our Graduate</p>
              </div>
            </section>
            <section class="flex items-center gap-7">
              <section class="cursor-pointer">
                <img class="w-6" src="../../assets/cart.svg" alt="cart" />
              </section>
              <section v-if="isLogin" @click="showDropdownProfile" class="dropdown-profile relative">
                  <section>
                    <div data-v-dd33f8c4="" data-v-282fc1c4="" class="flex items-center justify-center min-w-[44px] w-[44px] h-[44px] bg-slate-300 rounded-full cursor-pointer" >
                      <!-- <img alt="image-profile" src="" lazy="loaded"> -->
                    </div>
                  </section>
                  <nav v-if="isAvatarDropdown" class="absolute -left-[24px] top-6 mt-10 bg-white border-[1px] solid border-[#DADCE0] rounded-[8px] p-[24px] flex items-stretch">
                  <section class="flex flex-col">
                    <section class="flex">
                      <div class="profile-avatar">
                        <div data-v-dd33f8c4="" data-v-282fc1c4="" class="flex items-center justify-center min-w-[44px] w-[44px] h-[44px] bg-slate-300 rounded-full" >
                          <!-- <img alt="image-profile" src="" lazy="loaded"> -->
                        </div>
                      </div>
                      <section class="ml-3 w-36 overflow-hidden">
                        <h6>{{nameUser}}</h6>
                        <p class="truncate" aria-label="faisalchakiki012018@gmail.com">{{dataUser?.email}}</p>
                      </section>  
                    </section>
                    <div class="h-[0.4px] bg-neutral-300 my-[14px]"></div>
                    <p class="font-bold mb-[14px] cursor-pointer">Profile</p>
                    <p @click="handleLogout" class="font-bold cursor-pointer">Logout</p>
                  </section>
                </nav>
              </section>
              <section v-else class="flex gap-5">
                  <button
                  @click="moveRoute('/login')"
                      type="button"
                      class="rounded-[4px] py-[12px] px-[20px] text-p bg-white text-blue-600 border-[1px] border-blue-500 hover:bg-blue-100 focus:shadow-[0_0_0_4px_rgba(73,115,182,0.1)] font-bold text-center outline-none disabled:bg-neutral-300 disabled:text-neutral-600 disabled:border-[1px] disabled:border-neutral-500">Masuk</button>
                  <button
                  @click="moveRoute('/register')"
                      type="button"
                      class="rounded-[4px] py-[12px] px-[20px] text-p bg-blue-600 text-neutral-100 border-[1px] border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:shadow-[0_0_0_4px_rgba(73,115,182,0.1)] font-bold text-center outline-none disabled:bg-neutral-300 disabled:text-neutral-600 disabled:border-[1px] disabled:border-neutral-500">Daftar</button>
              </section>
            </section>
          </main>
    </nav>
  </section>
</template>

<script lang="ts">
  import axios from 'axios';
  import Logo from '../atoms/LogoFazz.vue';
  import ArrowUp from '../atoms/ArrowUp.vue';
  import ArrowDown from '../atoms/ArrowDown.vue';

  const token = localStorage.getItem('token')
  const config = {
    headers: { Authorization: token }
  };
  interface Data {
      isOpenNav1 : boolean
      isOpenNav2 : boolean
      isOpenNav3 : boolean
      isAvatarDropdown : boolean
      isLogin: string | boolean
      dataUser : IUser
      nameUser : string
  }

  interface IUser {
        id: number
        created_at: string
        email: string
        password: string
        iat: number
  }

  export default {
    components:{
        Logo,
        ArrowDown,
        ArrowUp
    },
    
    data() : Data{
        return {
          isOpenNav1 : false,
          isOpenNav2 : false,
          isOpenNav3 : false,
          isAvatarDropdown : false,
          isLogin: token || false,
          dataUser : {
            created_at: "",
            email: "",
            iat: 0,
            id: 0,
            password: "",
          },
          nameUser : ''
        }
      },
    computed:{
        setIslogin(){
          this.isLogin = !this.isLogin
        }
      },
    methods:{
        closeNav(){
          this.isOpenNav1 = false
          this.isOpenNav2 = false
          this.isOpenNav3 = false
          this.isAvatarDropdown = false
        },
        showNav1(){
          if(this.isOpenNav1 === false){
            this.closeNav()
          }
          this.isOpenNav1 = !this.isOpenNav1
        },
        showNav2(){
          if(this.isOpenNav2 === false){
            this.closeNav()
          }
          this.isOpenNav2 = !this.isOpenNav2
        },
        showNav3(){
          if(this.isOpenNav3 === false){
            this.closeNav()
          }
          this.isOpenNav3 = !this.isOpenNav3
        },
        showDropdownProfile(){
          if(this.isAvatarDropdown === false){
            this.closeNav()
          }
          this.isAvatarDropdown = !this.isAvatarDropdown
        },
        handleLogout(){
          localStorage.removeItem('token')
          window.location.reload()
          this.isLogin = false
        },
        moveRoute(path : string){
          this.$router.push(path)
        },
        async getDataUser(){
          const response = await axios.get('https://fazz-track-sample-api.vercel.app/profile',config)
          if(response.status === 200){
            this.dataUser = response.data.data
            this.nameUser = this.dataUser.email.split('@')[0]
          }else{
            console.log('error navbar')
          }
        }
      },
    mounted(){
      this.getDataUser()
    }
  }
</script>

<style lang="">
  
</style>