<template>
  <section class="hero">
    <div class="container">
      <h1>Professional Mobile DJ and Bartending Services</h1>
      <p>Serving Quality Drinks And SOundtrack for Every Occasion</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'heroSection'
}
</script>

<style scoped>

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .hero {
    background: url('/images/hero-image.png') no-repeat center center;
    background-size: cover;
    color: white;
    padding: 100px 0;
    text-align: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  section {
    padding: 50px 0;
  }

  h2 {
    margin-bottom: 20px;
  }

  .services-list {
    display: flex;
    gap: 20px;
  }

  .service {
    flex: 1;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
  }

  .form-group {
    margin-bottom: 20px;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
  }

  button {
    background-color: #333;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }


</style>
