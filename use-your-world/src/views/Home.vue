<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <div id="app">
  {{componentInstance}}
    <div class="twitchrow">
      <!--
      <component :is="componentInstance" :data=jsonManifest.packages[0][item] v-for="(item, key) in categories" :item=item :key="key" @clicked="onClickChild"/>
      -->
      <Category :data=jsonManifest.packages[0][item] v-for="(item, key) in categories" :item=item :key="key" @clicked="onClickChild"/>

      <component :is="componentInstance" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Category from '@/components/Category.vue'
import Yolo from '@/components/Yolo.vue'

import _lodash from 'lodash'
import manifest from '@/assets/Manifest_Addon-resources.assets-290.json'
console.log('manifest');
console.log(_lodash.keys(manifest.packages[0]));

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Category,
    Yolo,
  },
  data(){
    return {
      lodash: _lodash,
      jsonManifest: manifest,
      categories: ['blank-o-matic_FR', 'extraExtra_FR', 'subTheTitle_FR', 'surveySays_FR'],
      isCategorySelected: false
    }
  },
  props: {
    // empty
  },
  computed: {
    componentInstance() {
      this.selectedCategory;
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
  }
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

.twitchrow {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
