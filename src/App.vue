<template>

  <app-header />

  <div class="container">
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/Header/AppHeader.vue'
export default {
  setup() {},

  components: {
    AppHeader
  }
}
</script>
