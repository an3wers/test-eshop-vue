<template>
  <form @submit.prevent="onSubmit">
    <div>
      <div class="input-group mb-6">
        <label class="mb-1 block" for="signInEmail">Почта</label>
        <input
          type="email"
          class="form-input w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-0"
          id="signInEmail"
          v-model="email"
          @blur="eBlur"
        />
        <small v-if="eError" class="text-rose-500">{{ eError }}</small>
      </div>
      <div class="input-group mb-6">
        <label class="mb-1 block" for="signInPass">Пароль</label>
        <input
          type="password"
          class="form-input w-full rounded-md border-slate-300 focus:border-slate-400 focus:ring-0"
          id="signInPass"
          v-model="password"
           @blur="pBlur"
        />
        <small v-if="pError" class="text-rose-500">{{ pError }}</small>
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
          type="submit"
        >
          Войти
        </button>
      </div>
      <div class="text-center">
        <a @click.prevent="$emit('change')" class="underline" href="#"
          >Зарегистрироваться</a
        >
      </div>
    </div>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
export default {
  emits: ['change'],
  setup() {
    const MIN_LENGTH = 8
    const { handleSubmit, isSubmitting, submitCount } = useForm()
    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField('email', yup.string().email('Введите корректный email').required('Введите email').trim())
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password', yup.string().min(MIN_LENGTH, `Минимальная длина пароля ${MIN_LENGTH} миволов`).required('Введите пароль').trim())

    const onSubmit = handleSubmit((values) => {
      console.log('Forms Auth: ', values)
    })

    return {
      email,
      password,
      eBlur,
      pBlur,
      eError,
      pError,
      isSubmitting,
      onSubmit,
    }
  }
}
</script>
