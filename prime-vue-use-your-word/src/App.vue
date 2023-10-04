<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    this.getCategories()
  },

  methods: {
    async getCategories() {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        this.categories = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },

  data: () => ({
    fieldFromAppView: 'dataAppView',
    // Les catégories modifiables du jeu Use Your Word
    categories: []
  }),
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld categoryName="extraExtra" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <div class="card flex justify-content-center">
      <ul id="category" class="no-bullet-point">
        <li v-for="item in categories" class="inline">
          <RouterLink :to="'/category/' + item">
            <Image :src="item + '.jpg'" :alt="item" width="250"/>
          </RouterLink>
        </li>
      </ul>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>

  .no-bullet-point {
    list-style-type: none;
  }

  .inline {
    display: inline;
  }

  li {
    margin: 0.5rem;
  }

  /* Default CSS code */
  header {
    line-height: 1.5;
    max-height: 100vh;

    /* Ajout afin d'afficher l'en-tête sur toute la ligne */
    grid-column-end: span 3;
    grid-row: 1;
  }

  main {
    /* Ajout afin d'afficher le corps sur toute la ligne */
    grid-column-end: span 3;
    grid-row: 2;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>
