<template>
    <div>
        <div class="form-control w-full">
            <label class="label text-[#ef6807]">
                <p>*<span class="label-text">{{ label }}</span></p>
            </label>
            <textarea
                v-if="type === 'text-area'"
                v-model="onInput"
                :type="type"
                :placeholder="placeholder"
                :name="name"
                class="textarea textarea-bordered text-sm w-full px-4 max-h-[38px] rounded-[3px] focus:border-[#80bdff] focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,.25)] focus:outline-none"/>
            <input
                v-else
                v-model="onInput"
                :type="type"
                :placeholder="placeholder"
                :name="name"
                class="input input-bordered text-sm w-full px-4 max-h-[38px] rounded-[3px] focus:border-[#80bdff] focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,.25)] focus:outline-none"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent({
        data() {
            return {
                inputValue: this.defaultValue
            }
        },
        props: {
            label: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            defaultValue: {
                type: String,
                required: false,
                defult: ""
            }

        },
        watch:{
            defaultValue(newValue, _oldValue){
                this.inputValue = newValue
            }
        },
        computed:{
            onInput:{
                get(){
                    return this.inputValue
                },
                set(val: string){
                    this.inputValue = val
                    this.$emit('on-change', {
                        name : this.name,
                        value : this.inputValue
                    })
                }
            }
        }
    })
</script>