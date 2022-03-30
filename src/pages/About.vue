<template>
    <div id="about">
        <div class=" container">

            <app-breadcrumbs />

            {{ $route }}

        </div>
    </div>
</template>

<script>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'

export default {
    setup() {
        
    },
    components: {
        AppBreadcrumbs
    }
}
</script>