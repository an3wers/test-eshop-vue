<template>
  <form @submit.prevent="register">
    <div>
      <div class="input-group mb-6">
        <label class="mb-1 block" for="signUpFirstName">Имя</label>
        <input
          v-model="name"
          type="text"
          class="form-input w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-0"
          id="signUpFirstName"
          @blur="nBlur"
        />
        <small class="text-rose-500" v-if="nError">{{ nError }}</small>
      </div>
      <div class="input-group mb-6">
        <label class="mb-1 block" for="signUpPhone">Телефон</label>
        <input
          v-mask="'+7 (###) ###-##-##'"
          v-model="phone"
          type="tel"
          class="form-input w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-0"
          id="signUpPhone"
          @blur="phBlur"
          placeholder="+7 (999) 999-99-99"
          :masked="true"
         
        />
        <small class="text-rose-500" v-if="phError">{{ phError }}</small>
        {{ phone }}
      </div>
      <div class="input-group mb-6">
        <label class="mb-1 block" for="signUpEmail">Почта</label>
        <input
          v-model="email"
          type="email"
          class="form-input w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-0"
          id="signUpEmail"
          @blur="eBlur"
        />
        <small class="text-rose-500" v-if="eError">{{ eError }}</small>
      </div>
      <div class="input-group mb-6">
        <label class="mb-1 block" for="signUpPass">Пароль</label>
        <input
          v-model="password"
          type="password"
          class="form-input w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-0"
          id="signUpPass"
          @blur="pBlur"
        />
        <small class="text-rose-500" v-if="pError">{{ pError }}</small>
      </div>
      <div class="text-center mb-2">
        <button
          :class="[
            isSubmitting
              ? 'bg-slate-400 hover:bg-slate-400'
              : 'bg-slate-900 hover:bg-slate-800'
          ]"
          :disabled="isSubmitting"
          class="uppercase justify-center px-8 py-2 border border-transparent text-base rounded-md bg-slate-900 hover:bg-slate-800 text-white"
        >
          Зарегистрироваться
        </button>
      </div>
      <div class="text-center">
        Или
        <a @click.prevent="$emit('change')" class="underline" href="#"
          >войдите</a
        >
        если аккаунт уже есть.
      </div>
    </div>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import {mask} from 'vue-the-mask'


export default {
  emits: ['change'],
  directives: {
    mask
  },
  setup() {
    const store = useStore()
    

    const MIN_LENGTH = 8
    const { handleSubmit, isSubmitting } = useForm()

    const {value: name, errorMessage: nError, handleBlur: nBlur} = useField('name', yup.string().required('Введите ваше имя').trim())
    const {value: phone, errorMessage: phError, handleBlur: phBlur} = useField('phone', yup.string().required('Введите телефон'))
    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email', yup.string().email('Введите корректный email').required('Введите email').trim())  
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password', yup.string().min(MIN_LENGTH, `Минимальная длина пароля ${MIN_LENGTH} миволов`).required('Введите пароль').trim())

    const register = handleSubmit( (values) => {
        const {name, phone, email, password} = values
        const resPhone = phone.replace(/[^0-9]/g,"")
        const resObj = {name, phone: resPhone, email, password}
        console.log(resObj)

      // try {
      //   await store.dispatch('auth/register', values)
      // } catch (error) {
      //   console.log(error)
      // }
    })

    return {
      name,
      email,
      phone,
      password,
      nError,
      phError,
      eError,
      pError,
      nBlur,
      phBlur,
      eBlur,
      pBlur,
      register,
      isSubmitting
    }
  }
}
</script>
