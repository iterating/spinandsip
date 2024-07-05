<template>
  <div>
    <div v-html="$content('axmenu').text"></div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const page = await import(`~/content/axmenu.md`)
      .then((m) => m.default)
      .catch(() => null);
    return { page };
  },
};
</script>