<script setup>
  //extract the `data` into variable `page`
const { data: page } = await useAsyncData('page-data', () => queryContent('/indexx').findOne())
</script> 

<template>
<main>
<ContentRenderer :value="data">
  <div v-if="page">
    <h1>{{ page.title }}</h1>
  </div>

<!-- Hero -->
  <div class="landing text-center" v-if="page">
    <h1>{{ page.hero.title }}</h1>
    <p>{{ page.hero.description }}</p>
    <ul>
      <li v-for="(link, index) in page.hero.links" :key="index">
        <a :href="link.url">{{ link.text }}</a>
      </li>
    </ul>
    <template v-if="page.hero.headline">
      <div class="headline-badge relative rounded-full font-semibold" v-if="page">
        <a :href="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
          <span class="absolute inset-0" aria-hidden="true"></span>
        </a>
        <span v-if="page.hero.headline.icon" class="ml-1 w-4 h-4"></span>

      </div>
    </template>
  </div> 

    <img src="/public/landing.png">
    <img src="/public/bar.spinandsiplogo.png">

  <div v-for="(section, index) in page.sections" :key="index" class="landing-section" v-if="page">
    <h2>{{ section.title }}</h2>
    <p>{{ section.description }}</p>
    <div v-for="(feature, index) in section.features" :key="index">

    </div>
  </div>

  <div v-if="page">
    <h2>{{ page.features.title }}</h2>
    <p>{{ page.features.description }}</p>
    <div class="u-data-grid">
      <div v-for="(item, index) in page.features.items" :key="index" class="u-landing-card">

      </div>
    </div>
  </div>
   
    <div class="text-center" v-if="page">
      <h2>{{ page.testimonials.title }}</h2>
        <p>{{ page.testimonials.description }}</p>
    </div>
        <div class="u-data-columns" v-if="page">
          <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
            <div class="bg-gray-100/50 dark:bg-gray-800/50" v-if="page">
              <h3>{{ testimonial.title }}</h3>
              <p>{{ testimonial.quote }}</p>
              <div class="testimonial-author" v-if="page">
                <img :src="testimonial.author.avatar" :alt="testimonial.author.name" />
                <span>{{ testimonial.author.name }}</span>
              </div>
            </div>
          </div>
        </div>

</ContentRenderer>
</main>
</template>

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

.u-data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.u-landing-card {
  background-color: rgba(240, 240, 240, 0.5);
  padding: 20px;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.testimonial-author img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.u-data-columns {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;  padding: 20px;
  margin-bottom: 20px;
}
</style>
