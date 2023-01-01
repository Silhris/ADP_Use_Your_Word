<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <h2>{{ name }}</h2>
    <button @click="increment">Button test count with increment function is: {{ count }}</button>
    <button @click="count++">Button test count is: {{ count }}</button>

    <ul id="category">
      <li v-for="(item, key) in categories" :item=item :key="key" >
        <button @click="category = item">
          <img :src="item + '.jpg'" />
        </button>
        HERE {{category}} HERE
      </li>
    </ul>

    <UseYourWordCategory :data=manifest.packages[0][category] :item=category @clicked="onClickChild"/>
  </div>
</template>

<script setup>
  // @ is an alias to /src
  import UseYourWordCategory from '@/components/UseYourWordCategory.vue'

  import manifest from '@/assets/Manifest_Addon-resources.assets-290.json'
  import { ref, onMounted, defineProps } from 'vue'

  const categories = ['blank-o-matic', 'extraExtra', 'subTheTitle', 'surveySays'];

  // reactive state
  const count = ref(0);

  const category = ref();

  const props = defineProps({
    msg: String
  })

  const name = 'HelloWorld';

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  function increment() {
    count.value++;
  }

  onMounted(() => {
    console.log('Hellow World Component mounted');
  })

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }


  /* ------------------------------------------------------ */
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
</style>
