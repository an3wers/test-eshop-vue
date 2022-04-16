<template>
  <a @click.prevent="handlerProfile" href="#">
    <img src="@/assets/icons/user.svg" class="w-6" alt="profile" />
  </a>

  <Teleport to="body">
    
    <app-modal @resetModal="resetModal" v-if="getModal">
      <template #title>
        <span v-if="isSignIn">Войти в профиль</span>
        <span v-else>Зарегистрироваться</span>
      </template>
      <template #body>
        <sign-in-form @change="handlerChangeSignUpOrSignIn" v-if="isSignIn" />
        <sign-up-form @change="handlerChangeSignUpOrSignIn" v-else />
      </template>
    </app-modal>
    
  </Teleport>
</template>

<script>
import signInForm from '@/components/auth/signInForm.vue'
import signUpForm from '@/components/auth/signUpForm.vue'
import AppModal from '@/components/AppModal.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    signInForm,
    signUpForm,
    AppModal
  },
  setup() {
    const store = useStore()
    const isSignIn = ref(true)

    const getAuthToken = computed(() => {
      return store.getters['auth/getAuthToken']
    })

    const getModal = computed(() => {
      return store.getters['getModal']
    })

    const handlerProfile = () => {
      if (getAuthToken.value) {
        console.log('Авторизован')
      } else {
        store.dispatch('openModal')
        document.body.classList.add('modal-open')
      }
    }


    const handlerChangeSignUpOrSignIn = () => {
      isSignIn.value = !isSignIn.value
    }

    const resetModal = () => {
      isSignIn.value = true
    }

    return {
      isSignIn,
      handlerProfile,
      handlerChangeSignUpOrSignIn,
      getModal,
      resetModal
    }
  }
}
</script>
