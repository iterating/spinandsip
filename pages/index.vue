<script setup>
  //extract the `data` into variable `page`
const { data: page } = await useAsyncData('page-data', async () => {
    return await queryContent('/indexx').findOne();
});
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})


function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');

    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    content.classList.toggle('drawer-open');
    }

</script> 

<template>

<!-- Navigation bar and login -->
    <header>
        <span class="menu-icon" @click="toggleDrawer()">&#9776;</span>
        
    </header>

    <div class="drawer" id="drawer">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
    </div>
    <div class="overlay" id="overlay" @click="toggleDrawer()"></div>

<!-- Content  -->
<main id="content">    

    <!-- Hero -->
     <div class="landing-hero">
      <h1 class="landing-hero">{{ page.hero.title }}</h1>
      <p>{{ page.hero.description }}</p>
      <ul>
        <li v-for="(link, index) in page.hero.links" :key="index">
          <a :href="link.url">{{ link.text }}</a>
        </li>
      </ul>
      
      <template v-if="page.hero.headline">
        <div class="headline-badge relative rounded-full font-semibold" v-if="page">
          <a :href="page.hero.headline.to" target="_blank" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
          </a>
          <span v-if="page.hero.headline.icon" class="ml-1 w-4 h-4"></span>

        </div>
      </template>
      <img src="/public/landing.png">
      <img src="/public/bar.spinandsiplogo.png">
    </div>

    <!-- Features -->
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
     
    <!-- Testimonials -->
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


</main>


</template>

<style>
.landing-hero {
  position: relative;
}

.landing-hero ul {
  list-style: none;
  padding: 0;
}
.landing-hero h1 {
  font-size: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 20px white; /* Optional shadow for readability */
}

.image-container {
  position: relative;
  width: 100%;
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
body {
    display: grid;
    font-family: 'Georgia', serif;
    margin: 0;
}


header {

    border-radius: 8px; /* rounded corners */
    box-shadow: 0 0 8px black;
    height: 2em;
    overflow: hidden;
    display: flex;
}

header > .menu-icon {
    text-align: left;
    cursor: pointer;
    font-size: 25px;
    margin: 0px 25px 0px 5px ;
}

/* Opens drawer */
.drawer {
    height: 100%;
    width: 200px;
    position: fixed;
    top: 0;
    left: -200px; /* Keeps drawer hidden */
    background-color: #ffffff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    transition: left 0.3s ease;
    padding-top: 20px;
    z-index: 1000;
}
.drawer.open {
    left: 0;
}

.drawer a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 15px 25px;
    transition: background-color 0.3s ease;
}

/* Highlights selection in drawer when clicked */
.drawer a:hover {
    background-color: #eeeeee;
} 

/* Invisible part that hides drawer when clicked, usually hidden */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.overlay.open {
    opacity: 1;
    visibility: visible;
}
/* Moves content aside when drawer opens */
.drawer-open  {
    margin-left: 200px;
}
main {
    padding: 20px;
    transition: margin-left 0.3s ease;
}

</style>
