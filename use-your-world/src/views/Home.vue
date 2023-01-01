<template>
  <div id="app">
    {{componentInstance}}
    <div class="twitchrow">
      <!--
      <component :is="componentInstance" :data=jsonManifest.packages[0][item] v-for="(item, key) in categories" :item=item :key="key" @clicked="onClickChild"/>
      -->
      <!--
      <Category :data=jsonManifest.packages[0][item] v-for="(item, key) in categories" :item=item :key="key" @clicked="onClickChild"/>
      -->
      <ul id="category">
        <li v-for="(item, key) in categories" :item=item :key="key" >
          <router-link :to="{name: '/category/' + item}">
            <img :src="item + '.jpg'" />
          </router-link>
        </li>
      </ul>
      <component :is="componentInstance" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue'
import Yolo from '@/components/Yolo.vue'

import _lodash from 'lodash'
import manifest from '@/assets/Manifest_Addon-resources.assets-290.json'
console.log('manifest');
console.log(_lodash.keys(manifest.packages[0]));

export default {
  name: 'Home',
  components: {
    Category,
    Yolo,
  },
  data(){
    return {
      lodash: _lodash,
      jsonManifest: manifest,
      categories: ['blank-o-matic', 'extraExtra', 'subTheTitle', 'surveySays'],
      isCategorySelected: false
    }
  },
  props: {
    // empty
  },
  computed: {
    componentInstance() {
      this.selectedCategory;
      console.log('HOME');
      console.log(this.selectedCategory);
      return this.lodash.isNil(this.selectedCategory) ? null : 'Yolo';
      //return () => import(`@/components/${name}`)
    },
    yoloData() {
      return this.isCategorySelected ? this.jsonManifest.packages[0][this.selectedCategory] : null;
    }
  },
  methods: {
    onClickChild(value) {
      console.log('value');
      console.log(value);
      //this.componentInstance = 'Yolo';
      this.selectedCategory = value;
      this.isCategorySelected = !this.isCategorySelected;
      this.$forceUpdate();
    }
  },
  mounted() {
    let bootstrap = document.createElement('script')
    bootstrap.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js')
    document.head.appendChild(bootstrap)
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#category {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  /* Passer en mode sass
  li img {
    width: 30px;
    height: 30px;
  }
  */
}

#category li img {
  width: 15rem;
  height: 15rem;
}

.twitchrow {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
