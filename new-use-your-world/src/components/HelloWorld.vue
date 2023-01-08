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

    <button @click="saveJSON">Save JSON</button>
    <pre style="background-color: #001f3f"><code id="json-container"></code></pre>
    <div v-if="manifest != null">
      <UseYourWordCategory :data=manifest.packages[0][category] :item=category @clicked="onClickChild"/>
    </div>
  </div>
</template>

<script setup>
  // @ is an alias to /src
  import UseYourWordCategory from '@/components/UseYourWordCategory.vue';

  import { ref, onMounted, defineProps } from 'vue';

  import axios from 'axios';

  const categories = ['blank-o-matic', 'extraExtra', 'subTheTitle', 'surveySays'];

  const count = ref(0);
  const category = ref();
  let manifest = ref();

  const getData = async() => {
    try {
      const response = await axios.get('http://localhost:3000/manifest');
      manifest = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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

    getData();
  })

  function saveJSON() {
    console.log('manifest');
    console.log(manifest);
    axios.post('http://localhost:3000/manifest', manifest)
        .then(response => {
          console.log('response');
          console.log(response);
          // Do something with the response
        })
        .catch(error => {
          console.log('error');
          console.log(error);
          // Handle the error
        });
  }

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
