<script setup>
const { data: page } = await useAsyncData('index', () => queryContent('/AXmenu').findOne())
</script> 


<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script lang="ts" setup>

</script>

<style>

</style>