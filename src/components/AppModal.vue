<template>

    <div @click="handleBackdrop($event)" class="outside-dialog fixed inset-0 z-30 overflow-y-auto block w-full h-full">
    <div class="app-modal__dialog rounded-xl relative shadow-2xl opacity-100 bg-white h-auto p-6">
        <div class="app-modal__title flex mb-6">
            <div class="grow uppercase text-xl">
                <slot name="title"></slot>
            </div>
            <div><a @click.prevent="close" href="#"><XIcon class="w-6 h-6 text-slate-500"/></a></div>
        </div>
        <div class="app-modal__body">
            <slot name="body"></slot>
        </div>
    </div>
    </div>

<div class="app-modal__backdrop fixed inset-0 z-20 backdrop-blur-sm"></div>

</template>

<script>
import {computed, ref, watch} from 'vue'
import { useStore} from 'vuex'
import { XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    XIcon
  },
  emits:['resetModal'],

  setup(_, {emit}) {
    const store = useStore()
 
    const close = () => {
      store.dispatch('closeModal')
      emit('resetModal')
      document.body.classList.remove('modal-open')
    }

    const handleBackdrop = function (event) {
      
      if (event.target.classList.contains('outside-dialog')) {
       close()
      } 
    }
  
    return {
     close,
     handleBackdrop
    }
  }
}
</script>

<style>
 .app-modal__dialog {
     width: 560px;
     top: 10%;
     left: 50%;
     margin-left: -280px;
 }

 .modal-open {
   overflow: hidden;
 }

 .app-modal__backdrop {
   background-color: rgba(0, 0, 0, 0.07);
 }

</style>
