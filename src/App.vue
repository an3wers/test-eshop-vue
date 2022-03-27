<template>
<!-- Header -->
  <app-header />
  <div class="wrapper">
    <router-view />
  </div>
<!-- Footer -->
<app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  setup() {},

  components: {
    AppHeader,
    AppFooter
  }
}
</script>
