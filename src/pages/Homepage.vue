<template>
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
      <div class="container-class pt-10 mx-auto text-right">
        <button @click="handleModal" class="border-2 rounded-md p-2 bg-primary-orange text-white tracking-wide border-primary-orange">Add Minicamp</button>
      </div>
      <main class="container-class py-10 mx-auto grid grid-cols-3 gap-8 z-10">
      <div v-for="item in dataMinicamps" :key="item.id">
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

  import LogoText from '../components/atoms/LogoText.vue';
  import Contact from '../components/atoms/Contact.vue'
  import Footer from '../components/organisms/Footer.vue'
  import Navbar from '../components/organisms/Navbar.vue';
  import Modal from '../components/molecules/AddMinicamp.vue'
  import NavbarSection from '../components/molecules/NavbarSection.vue';
  import CardMinicamp from '../components/molecules/CardMinicamp.vue';
 
  const token = localStorage.getItem('token')
  const config = {
    headers: { Authorization: token }
  };

  interface Data {
    options : IOptions[]
    dataMinicamps : IDataMinicamp[]
    isModal : boolean
  }

  interface IOptions {
    id : number
    value : string
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
            value : 'Semua'},
            {id : 2,
            value : 'Disalurkan'},
            {id : 3,
            value : 'Tidak Disalurkan'},
        ],
        dataMinicamps : [] as IDataMinicamp[],
        isModal : false
      }
    },
    components:{
      Contact,
      Footer,
      Navbar,
      LogoText,
      NavbarSection,
      CardMinicamp,
      Modal
    },
    methods:{
      async fetchData() {
        const response = await axios.get('https://fazz-track-sample-api.vercel.app/minicamp', config)
        this.dataMinicamps = response.data.data
      },
      async insertData(data : any) {
        const response = await axios.post('https://fazz-track-sample-api.vercel.app/minicamp',data, config)
        if(response.status === 200){
          this.fetchData()
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