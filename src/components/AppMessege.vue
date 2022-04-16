<template>
  <div
    class="app-informer top-8 flex right-8 drop-shadow-xl rounded-xl fixed z-30 py-6 px-6 space-x-2"
    :class="messege.type"
  >
    <div class="w-6 h-6"><InformationCircleIcon class="w-6 h-6" /></div>
    <div class="grow">
      {{ messege.value }}
    </div>
    <div class="w-5 h-5"><XIcon @click="close" class="w-5 h-5 opacity-30" /></div>
  </div>
</template>

<script>
import { InformationCircleIcon, XIcon } from '@heroicons/vue/outline'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  components: {
    InformationCircleIcon,
    XIcon
  },
  setup() {

    const store = useStore()

    const messege = computed(() => {
      return store.getters['getMessege']
    })

    const close = () => {
      store.dispatch('clearMessege')
    }

    return {
      messege,
      close
    }
  }
}
</script>

<style>
.app-informer {
  width: 400px;
}
</style>
