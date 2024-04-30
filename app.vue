<script setup>
const { data } = await useAsyncData('indexx', () => queryContent('/indexx').findOne())
</script>
 

<template>
  <main>
    <ContentRenderer :value="data">
      <div v-if="data">
      <h1>{{ data.title }}</h1>
      </div>

 <div 
    class="flex flex-col items-center px-16 pt-10 pb-6 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full" v-if="data">

  >
    <div class="flex flex-col max-w-full w-[918px]">
      <div class="self-center text-3xl leading-10 text-black max-md:max-w-full" v-if="data">
{{ data.hero.title }}      </div>
      <div
        class="mt-7 text-base font-bold leading-6 text-center text-neutral-800 max-md:max-w-full"
      >
      <img src="/content/jinnandremedy.jpg">
{{ data.hero.description }}

      </div>
    </div>
  </div>


      <div>
        <hero />
      </div>


    <div class="landing-" v-if="data">
      <h1>{{ data.hero.title }}</h1>
      <p>{{ data.hero.description }}</p>
      <ul>
        <li v-for="(link, index) in data.hero.links" :key="index">
          <a :href="link.url">{{ link.text }}</a>
        </li>
      </ul>
      <template v-if="data.hero.headline">
        <div class="headline-badge relative rounded-full font-semibold" v-if="data">
          <a :href="data.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true"></span>
          </a>
          {{ data.hero.headline.label }}
          <span v-if="data.hero.headline.icon" class="ml-1 w-4 h-4"></span>
        </div>
      </template>
    </div>



    <div v-for="(section, index) in data.sections" :key="index" class="landing-section" v-if="data">
      <h2>{{ section.title }}</h2>
      <p>{{ section.description }}</p>
      <div v-for="(feature, index) in section.features" :key="index">
        <placeholder />
      </div>
    </div>

    <div v-if="data">
      <h2>{{ data.features.title }}</h2>
      <p>{{ data.features.description }}</p>
      <div class="u-data-grid">
        <div v-for="(item, index) in data.features.items" :key="index" class="u-landing-card">
          <placeholder />
        </div>
      </div>
    </div>

  <div class="flex flex-col justify-center w-full max-md:max-w-full">
    <div class="flex flex-col justify-center w-full max-md:max-w-full">
      <div
        class="flex flex-col items-center px-16 pt-9 pb-14 mt-1.5 w-full bg-stone-400 max-md:px-5 max-md:max-w-full"
      >
        <div class="flex flex-col max-w-full w-[993px]">
          <div class="max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <div class="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
                <div
                  class="flex flex-col mt-14 text-xl leading-10 text-center text-black max-md:mt-10"
                >
                 
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


   
          

  <div v-if="data">
    <h2>{{ data.testimonials.title }}</h2>
      <p>{{ data.testimonials.description }}</p>
      <div class="u-data-columns" v-if="data">
        <div v-for="(testimonial, index) in data.testimonials.items" :key="index" class="break-inside-avoid">
          <div class="bg-gray-100/50 dark:bg-gray-800/50" v-if="data">
            <h3>{{ testimonial.title }}</h3>
            <p>{{ testimonial.content }}</p>
            <div class="testimonial-author" v-if="data">
              <img :src="testimonial.author.avatar" :alt="testimonial.author.name" />
              <span>{{ testimonial.author.name }}</span>
            </div>
          </div>
        </div>
      </div>

    <div class="landing-section">
      <u-landing-cta v-bind="data.cta" class="bg-gray-100/50 dark:bg-gray-800/50"></u-landing-cta>
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
</style>

<script>
import hero from '~/pages/hero.vue';

export default {
  components: {
    hero,
  },
};
</script>