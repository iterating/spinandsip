<script setup>
const { data: page } = await useAsyncData('index', () => queryContent('/indexx').findOne())
</script> 

<template>
<main>
<ContentRenderer :value="data">
  <div v-if="page">
    <h1>{{ page.title }}</h1>
  </div>

 <div 
    class="flex flex-col items-center px-16 pt-10 pb-6 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full" v-if="page">
    <div class="flex flex-col max-w-full w-[918px]">
      <div class="self-center text-3xl leading-10 text-black max-md:max-w-full" v-if="page">
      {{ page.hero.title }} </div>
    <div class="mt-7 text-base font-bold leading-6 text-center text-neutral-800 max-md:max-w-full">
      <img src="/public/landing.jpeg">
      {{ page.hero.description }}
    </div>
    </div>
  </div>

    <div class="landing-" v-if="page">
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
          {{ page.hero.headline.label }}
          <span v-if="page.hero.headline.icon" class="ml-1 w-4 h-4"></span>
        </div>
      </template>
    </div>



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


   
          

  <div v-if="page">
    <h2>{{ page.testimonials.title }}</h2>
      <p>{{ page.testimonials.description }}</p>
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
