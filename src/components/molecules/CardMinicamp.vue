<template lang="">
  <section class="card border rounded-md overflow-hidden w-full">
        <div class="relative w-full h-[200px]" >
          <img :src="options.trainerPicture" alt="Fazztrack image" draggable="false" class="w-full cover h-[100%]" />
          <div v-if="options.isWork === true" class='absolute top-2 left-2 border-2 rounded-md p-1 bg-[#fef3ec] border-primary-orange'>
            <p class="text-sm text-primary-orange">Disalurkan Kerja</p>
          </div>
          <div v-if="isLogin" class="absolute top-2 right-2 flex items-center gap-2">
            <button @click="handleModal(options.id)" class="bg-green-500 w-8 h-8 rounded-full flex justify-center items-center"><i class="fa-regular fa-pen-to-square fa-md"></i></button>
            <button @click="showAlertDelete(options.id)" class="bg-red-400 w-8 h-8 rounded-full flex justify-center items-center"><i class="fa-solid fa-trash fa-md"></i></button>
          </div>
        </div>    
        <div class="p-4 flex flex-col">
          <h1 class="title text-xl font-bold">{{options.title}}</h1>
          <section class="flex flex-1 items-center gap-2 my-2">
            <img class="w-5" alt="calendar-logo" src="../../assets/icon/calendar.svg" />
            <p>{{options.startDate}} - {{options.endDate}}</p>
          </section>
          <section>
            <p class="mentor line-clamp-1">{{options.trainerName}}</p>
            <span class="line-clamp-2 text-second-gray">{{options.description}}</span>
          </section>
          <div class="bg-[#dee1e5] h-[0.1px] my-4"></div>
          <div class="flex items-center justify-between">
            <p>Harga:</p>
            <p class="font-semibold text-[17px]">Rp {{price}}</p>
          </div>
          <div class="bg-[#dee1e5] h-[0.1px] my-4"></div>
          <div class="flex justify-center items-center gap-2 cursor-pointer">
            <p class="text-blue-dongker font-semibold">Daftar Sekarang</p>
            <img class="w-5 mt-1" alt="right-arrow" src="../../assets/icon/right-arrow.svg" />
          </div>
        </div>
        <Modal :id="id" @on-confirm="handleConfirm" v-if="isModal === true" />
  </section>
</template>
<script lang="ts">
  import axios from 'axios'
  import Modal from '../../components/molecules/EditMinicamp.vue'
  import Swal from 'sweetalert2'
  
  const token = localStorage.getItem('token')
  const config = {
    headers: { Authorization: token }
  };

  export default {
    components:{
      Modal
    },
    data(){
      return {
        id: 0,
        isModal : false,
        price : this.options.price,
        isLogin : token || false
      }
    },
    props:{
      options :{
        type: Object,
        required: true
      },
    },
    methods: {
      async deleteCourse(id : number){
          const response = await axios.delete(`https://fazz-track-sample-api.vercel.app/minicamp/${id}`, config)
          if(response.status === 200){
            window.location.reload()
          }else{
            alert('failed internal server error')
          }
      },
      handleModal(id : number){
        this.id = id
        this.isModal = !this.isModal
      },
      async editCourse(data : any) {
        const response = await axios.put(`https://fazz-track-sample-api.vercel.app/minicamp/${data.id}`,data, config)
        if(response.status === 200){
          Swal.fire('Edit Success!', '', 'success')
          setTimeout(() => {
            window.location.reload()
          }, 1500);
        }
      },
      handleConfirm(val : any){
        if(val === 'cancel'){
          this.handleModal(0)
        }else{
          this.handleModal(0)
          this.editCourse(val)
        }
      },
      showAlertDelete(id : number){
        Swal.fire({
          title: 'Are you sure?',
          text: "Minicamp will be removed, are you sure?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.deleteCourse(id)
            Swal.fire('Delete Success!', '', 'success')
          } else {
            Swal.fire('Delete Failed', '', 'info')
          }
        })
      }
    },
  }
</script>
<style lang="">
  
</style>