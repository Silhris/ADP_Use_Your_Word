<template>
  <div class="category">
    <h1>Category WIP</h1>
    {{$data}}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .category {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import axios from 'axios';
export default {
  mounted() {
    this.getCategories()
  },

  methods: {
    async getCategories() {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        this.categories = response.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  },

  data: () => ({
      testField: 'awesomeData'
  })
}
</script>