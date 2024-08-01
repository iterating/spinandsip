<template>
  <section class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p>For inquiries or bookings, please fill out the form below or call us at (555) 123-4567.</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      alert('Form submitted!')
    }
  }
}
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
