<template lang="">
    <div
        class="relative z-20"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div
                class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 mt-20 ">
                <div
                    class="relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 " >
                        <div class="w-full">
                            <div class="my-5">
                                <p class="text-center font-semibold text-xl">Edit Vidio {{idVidio}}</p>
                            </div>
                            <div class="w-full mb-4">
                                <Input
                                    :defaultValue="vidio.title"
                                    type="text"
                                    label="Judul Vidio"
                                    name="title"
                                    placeholder="Masukan judul vidio..."
                                    @on-change="handldeInput"/>
                            </div>
                            <div class="w-full mb-4">
                                <Input
                                    :defaultValue="vidio.description"
                                    type="text"
                                    label="deskripsi"
                                    name="description"
                                    placeholder="Masukan Deskripsi..."
                                    @on-change="handldeInput"/>
                            </div>
                            <div class="w-full mb-4">
                                <Input
                                :defaultValue="vidio.cover"
                                    type="text"
                                    label="URL Cover Vidio"
                                    name="cover"
                                    placeholder="Masukan url cover vidio..."
                                    @on-change="handldeInput"/>
                            </div>
                            <div class="w-full mb-4">
                                <Input
                                :defaultValue="vidio.rating"
                                    type='number'
                                    label='Rating'
                                    name='ratting'
                                    placeholder='Masukan ratting Vidio...'
                                    @on-change="handldeInput"/>
                            </div>
                            <div class="w-full mb-4">
                                <Input
                                :defaultValue="vidio.level"
                                    type='text'
                                    label='Level'
                                    name='level'
                                    placeholder='Masukan level vidio...'
                                    @on-change="handldeInput"/>
                            </div>
                            <div class="w-full mb-10">
                                <Input
                                :defaultValue="vidio.price"
                                    type='number'
                                    label='Harga'
                                    name='price'
                                    placeholder='Masukan harga vidio...'
                                    @on-change="handldeInput"/>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            @click="handleEdit"
                            type="button"
                            class="inline-flex w-full justify-center rounded-md bg-success px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-succes/70 sm:ml-3 sm:w-auto">Save Edit</button>
                            <button
                            @click="showModal"
                            type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue';
    import Input from '../atoms/Input.vue';
    import LogoFazz from '../atoms/LogoFazz.vue';
    import axios from 'axios';

    interface Data {
        vidio: ICard,
        idVidio: number
    }

    interface ICard {
        title: string;
        description: string;
        cover: string;
        rating: number;
        level: string;
        price: number;
    }

    const token = localStorage.getItem('token')

    export default defineComponent({
        data(): Data {
            return {
                vidio: {
                    title: '',
                    description: '',
                    cover: '',
                    rating: 0,
                    level: '',
                    price: 0
                },
                idVidio: this.id
            }
        },
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        components: {
            Input,
            LogoFazz
        },
        methods: {
            showModal() {
                this.$emit('on-click', "")
            },
            handldeInput(data : any) {
                if (data.name === 'title') {
                    this.vidio.title = data.value
                } else if (data.name === 'description') {
                    this.vidio.description = data.value
                } else if (data.name === 'cover') {
                    this.vidio.cover = data.value
                } else if (data.name === 'rating') {
                    this.vidio.rating = data.value
                } else if (data.name === 'level') {
                    this.vidio.level = data.value
                } else {
                    this.vidio.price = data.value
                }
                console.log(this.vidio);

            },
            handleGetById() {
                axios
                    .get(`https://fazz-track-sample-api.vercel.app/video/${this.id}`, {
                        headers: {
                            Authorization: token
                        }
                    })
                    .then((res) => {
                        console.log(res.data.data);
                        this.vidio = res.data.data
                    })
            },
            handleEdit() {
                axios
                    .put(
                        `https://fazz-track-sample-api.vercel.app/video/${this.id}`,
                        this.vidio,
                        {
                            headers: {
                                Authorization: token
                            }
                        }
                    )
                    .then((res) => {
                        console.log(res.data.data);
                        this.$emit('on-edit', '')
                        this.$emit('on-click', "")
                    })
            }
        },
        mounted() {
            this.handleGetById()
        }
    })
</script>
<style lang=""></style>