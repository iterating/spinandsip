
<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
interface Link {
  url: string;
  text: string;
}
interface TestimonialType {
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
}
const links: Link[] = page.value.links; // Assuming 'links' is an array of objects with 'url' and 'text' properties

</script>

<template>
  <div v-if="page">
      <div class="landing-hero">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
        <div class="absolute inset-0 landing-grid" :style="maskStyle"></div>
        <template v-if="headline">
          <div class="headline-badge">
            <a :href="headline.to" target="_blank" class="badge-link focus:outline-none" tabindex="-1">
              <span>{{ headline.label }}</span>
              <span v-if="headline.icon" class="headline-icon">{{ headline.icon }}</span>
            </a>
          </div>
        </template>
      </div>

<div class="landing-section">
  <h2>{{ title }}</h2>
  <p>{{ description }}</p>
  <div class="page-columns">
    <div v-for="(testimonial, TestimonialType, index) in testimonials" :key="index" class="testimonial-item break-inside-avoid">
      <div class="testimonial">
        <h3>{{ testimonial.title }}</h3>
        <p>{{ testimonial.content }}</p>
        <div class="testimonial-author">
          <img :src="testimonial.author.avatar" :alt="testimonial.author.name" />
          <span>{{ testimonial.author.name }}</span>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    description: String,
    links: Array,
    headline: Object,
    testimonials: Array,
  },
  computed: {
    maskStyle() {
      return {
        'z-index': '-1',
      };
    }
  }
};
</script>

<style scoped>
.landing-hero {
  position: relative;
}

.landing-hero ul {
  list-style: none;
  padding: 0;
}

.landing-hero ul li {
  margin-bottom: 10px;
}

.landing-hero .headline-badge {
  position: relative;
}

.landing-hero .headline-badge .badge-link {
  text-decoration: none;
  color: inherit;
}

.landing-hero .headline-badge .headline-icon {
  margin-left: 5px;
}
.landing-section h2 {
  margin-bottom: 10px;
}

.landing-section p {
  margin-bottom: 20px;
}

.page-columns {
  columns: 4;
  column-gap: 20px;
}

.testimonial-item {
  background-color: rgba(240, 240, 240, 0.5); /* Adjust to your preferred background color */
  padding: 20px;
  margin-bottom: 20px;
}
</style>

  - title: The speed of our service
    description: Cillum sint enim excepteur ut deserunt qui nisi in deserunt in. Deserunt aliquip quis aliquip eu quis ex velit velit nostrud sit.
    align: right
    features:
      - name: Fast
        description: Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod.
        icon: i-heroicons-rocket-launch
      - name: Affordable
        description: Reprehenderit fugiat elit in do ipsum ut pariatur.
        icon: i-heroicons-currency-dollar
      - name: Scalable
        description: Lorem deserunt et eiusmod. Ea in consectetur minim officia.
        icon: i-heroicons-chart-bar
    links:
      - label: Learn more
        to: /pro/guide/content
        color: gray
        icon: i-heroicons-arrow-right-20-solid
        trailing: true
        size: md
        class: ml-8