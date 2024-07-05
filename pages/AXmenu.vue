<template>
  <main>
    <ContentDoc />
  </main>
  <div>
    <NuxtPage />
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const page = await import(`~/content/2.axmenu.md`)
      .then((m) => m.default)
      .catch(() => null);
    return { page };
  },
};
</script>