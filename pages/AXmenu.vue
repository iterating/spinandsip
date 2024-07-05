
<template>
  <div>
    <ContentDoc />
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const page = await import(`~/content/2.axmenu.md`)
      .then((m) => m.default)
      .catch(() => null);
    console.log(page)

    return { page };
  },
};
</script>