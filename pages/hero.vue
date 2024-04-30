<!-- components/CollectionPage.vue -->
<template>
  <div>
    <Content :model="'collection-hero'" :content="hero" :apiKey="'2000a97331604857b5498a65b105b09e'" />
    <!-- Put the rest of your page here. -->
  </div>
</template>

<script>
  import { Content, fetchOneEntry } from '@builder.io/sdk-vue';


export default {
  components: {

    Content,
  },
  async asyncData({ params }) {
    // Ensure this matches how your routing is set up
    const urlPath = params.path;
    try {
      const hero = await fetchOneEntry({
        model: 'collection-hero',
        apiKey: '2000a97331604857b5498a65b105b09e', // Replace with your API key
        query: {
          'data.urlPath': urlPath,
        },
      });
      return { hero };
    } catch (err) {
      console.error(`Oops: ${err}`);
      return { hero: null };
    }
  },
};
</script>