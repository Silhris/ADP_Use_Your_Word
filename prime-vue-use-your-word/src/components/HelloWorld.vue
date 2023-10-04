<script lang="ts">
import axios from 'axios';

export default {
  props: {
    'categoryName': String
  },
  mounted() {
    this.getCategoryData()
    //this.forceUpdate();
  },
  updated() {
    this.getCategoryData()
  },

  methods: {
    async getCategoryData() {
      try {
        const response = await axios.get('http://localhost:3000/categories/' + this.categoryName) ;
        this.categoryData = response.data;
        console.log(this.categoryData);
        //// Permet de recharger le DOM qui n'affiche pas le contenu lorsque la méthode est appelée depuis le hook mounted
        //this.$forceUpdate();
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<template>
  <div v-for="(element, i) in categoryData" :key="element.id" style="width: 100%">
    <div class="grid">
      <label class="col-md-12">Liste des propositions</label>
      <div v-for="(row, j) in element.houseAnswers" class="col" style="width: 100%">
        <InputText type="text" v-model="element.houseAnswers[j]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
