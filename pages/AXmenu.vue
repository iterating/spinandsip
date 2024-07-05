<script setup>
const { data: page } = await useAsyncData('index', () => queryContent('/AXmenu').findOne())
</script> 


<template>
  <div>
    <div v-html="markdownContent"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const markdownContent = await $content('AXmenu').fetch()
    return { markdownContent }
  },
}
</script>

<style>
/* Add your component-specific styles here if needed */
</style>