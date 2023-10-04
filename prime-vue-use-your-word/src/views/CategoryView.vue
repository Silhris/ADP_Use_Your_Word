<template>
  <div class="category">
    <div v-for="(element, i) in categoryData" :key="element.id" style="width: 100%">

      <div class="grid">
        <label class="col-md-12">Liste des propositions</label>
        <div v-for="(row, j) in element.houseAnswers" class="col" style="width: 100%">
          <InputText type="text" v-model="element.houseAnswers[j]" />
        </div>
      </div>

    </div>
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
  async mounted() {
    await this.getCategoryData()
    //this.forceUpdate();
  },
  updated() {
    this.getCategoryData()
  },

  methods: {
    async getCategoryData() {
      try {
        const categoryName = this.$route.params.name;
        const response = await axios.get('http://localhost:3000/categories/' + categoryName) ;
        this.categoryData = response.data;
        console.log(this.categoryData);
        //// Permet de recharger le DOM qui n'affiche pas le contenu lorsque la méthode est appelée depuis le hook mounted
        //this.$forceUpdate();
      } catch (error) {
        console.error(error);
      }
    },

    forceUpdate() {
      // Permet de recharger le DOM qui n'affiche pas le contenu lorsque la méthode est appelée depuis le hook mounted
      this.$forceUpdate();
    }
  }
}
</script>