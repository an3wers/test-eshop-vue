<template>
    <div class="breadcrumb-app text-sm my-8 flex space-x-4 text-slate-500">
        <router-link to="/">Home</router-link>
        
        <div v-for="(item, i) in items" :key="i" class="breadcrumb-app__item flex space-x-4">
            <span class="separator">/</span>
            <router-link to="/">{{ item.name }}</router-link>
        </div>
        
        

        <!-- Dropdown -->
        <!-- <a href="#">Shop</a> -->
        <!-- # Dropdown -->
        
      </div>
</template>

<script>
export default {

    props: {
        items: {
            type: Array,
            required: true
        }
    },

    setup() {
        
    },
}
</script>