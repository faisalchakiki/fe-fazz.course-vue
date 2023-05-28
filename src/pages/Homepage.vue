<template>
  <ToastSuccess v-if="isAlert" title="Success Add Minicamp" />
  <Navbar />
  <main class="pb-20 z-10 border">
    <header class="container-class py-10 mx-auto">
      <h1 class="font-bold pb-10 text-4xl font-sora">Part-time bootcamp bersama expert terkemuka</h1>
      <div class="flex pb-8 items-center justify-between w-2/3">
         <LogoText :label="`Top Trainer dari Perusahaan`" type="top-trainer" />
         <LogoText :label="`Proyek Level Industri`" type="proyek-industri" />
         <LogoText :label="`Live Class`" type="live-class" />
      </div>
    </header>
    <NavbarSection :options="options" />
    <section>
      <Modal @on-confirm="handleConfirm" v-if="isModal" />
      <div v-if="isLogin === token" class="container-class pt-10 mx-auto text-right">
        <button @click="handleModal" class="border-2 rounded-md p-2 bg-primary-orange text-white tracking-wide border-primary-orange">Add Minicamp</button>
      </div>
      <main class="container-class py-10 mx-auto grid grid-cols-3 gap-8 z-10 items-stretch">
        <button v-if="isReadyData === false" type="button" class="bg-orange-500 text-white p-3 rounded-md col-start-2" disabled>
          Processing...
        </button>
        <div v-if="isReadyData === true" v-for="item in dataMinicamps" :key="item.id">
          <CardMinicamp :options="item" />
        </div>
    </main>
    </section>
  </main>
  <Footer />
  <Contact />
</template>
<script lang="ts">
  import axios from 'axios';

  import ToastSuccess from '../components/atoms/ToastSuccess.vue';
  import LogoText from '../components/atoms/LogoText.vue';
  import Contact from '../components/atoms/Contact.vue'
  import Footer from '../components/organisms/Footer.vue'
  import Navbar from '../components/organisms/Navbar.vue';
  import Modal from '../components/molecules/AddMinicamp.vue'
  import NavbarSection from '../components/molecules/NavbarSection.vue';
  import CardMinicamp from '../components/molecules/CardMinicamp.vue';
 
  const token = localStorage.getItem('token') 
  const tempToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImNyZWF0ZWRfYXQiOiIyMDIzLTA1LTI2VDA1OjU4OjI0LjI0ODI1KzAwOjAwIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGRaeXJuYUQyS0lrbm5zZ2p4RnRkb082a2p5SHYzSXo1ZmNFMjZKM3huNC9yOVJ5S1prTkRXIiwiaWF0IjoxNjg1MTA0MzY2fQ.s8cgoCIfngy75U-VzF-SIP52u04qZ33b7myhpcwyUHI'
  const config = {
    headers: { Authorization: token || tempToken }
  };

  interface Data {
    options : IOptions[]
    dataMinicamps : IDataMinicamp[]
    isModal : boolean
    isLogin : string
    token : string | boolean
    isReadyData: boolean
    isAlert: boolean
  }

  interface IOptions {
    id : number
    value : string
    active : boolean
  }

  interface IDataMinicamp {
    id: number
    created_at: string
    title: string
    description: string
    trainerName: string
    trainerTitle: string
    trainerPicture: string
    batch: number,
    location: string,
    startDate: string,
    endDate: string,
    isWork: boolean,
    price: number
  }

  export default {
    data() : Data {
        return{
          options:[
            {id : 1,
            value : 'Semua',
            active: true},
            {id : 2,
            value : 'Disalurkan',
            active: false},
            {id : 3,
            value : 'Tidak Disalurkan',
            active: false},
        ],
        dataMinicamps : [] as IDataMinicamp[],
        isModal : false,
        isLogin : token || tempToken,
        token : token || false,
        isReadyData: false,
        isAlert: false
      }
    },
    components:{
      Contact,
      Footer,
      Navbar,
      LogoText,
      NavbarSection,
      CardMinicamp,
      Modal,
      ToastSuccess
    },
    methods:{
      async fetchData() {
        this.isReadyData = false
        const response = await axios.get('https://fazz-track-sample-api.vercel.app/minicamp', config)
        this.dataMinicamps = response.data.data
        this.isReadyData = true
      },
      async insertData(data : any) {
        const response = await axios.post('https://fazz-track-sample-api.vercel.app/minicamp',data, config)
        if(response.status === 200){
          this.isAlert = true
          setTimeout(() => {
            this.fetchData()
          }, 2000);
        }else{
          alert('error insert')
        }
      },
      handleModal(){
        this.isModal = !this.isModal
      },
      handleConfirm(val : any){
        if(val === 'cancel'){
          this.handleModal()
        }else{
          this.handleModal()
          this.insertData(val)
        }
      },
    },
    mounted(){
      this.fetchData()
    }
  }
</script>
<style lang="">
  
</style>