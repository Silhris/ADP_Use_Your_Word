<template>
  <v-container>
    <ul id="category">
      <li v-for="(item, key) in categories" :item=item :key="key" >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class="mx-auto"
          >
            <v-card-text>
              <img :src="item + '.jpg'" @click="category = item"/>
            </v-card-text>
          </v-card>
        </v-hover>
      </li>
    </ul>

    <v-btn @click="saveJSON">Save JSON</v-btn>
    <div v-if="manifest != null">
      <v-hover>
        <UseYourWordCategory :data=manifest.packages[0][category] :item=category />
      </v-hover>
    </div>
  </v-container>
</template>

<script>
  import UseYourWordCategory from '@/components/UseYourWordCategory.vue';
  import axios from 'axios';

  export default {
    name: 'HelloWorld',
    components: {
      UseYourWordCategory
    },

    mounted() {
      this.getJSON()
    },

    methods: {
      async getJSON() {
        try {
          const response = await axios.get('http://localhost:3000/manifest');
          this.manifest = response.data;
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },

      saveJSON() {
        console.log('saveJSON');
        axios.post('http://localhost:3000/manifest', this.manifest)
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
    },

    data: () => ({
      manifest: null,
      categories: ['blank-o-matic', 'blank-o-matic_FR', 'extraExtra', 'extraExtra_FR', 'subTheTitle', 'subTheTitle_FR', 'surveySays', 'surveySays_FR'],
      category: null,
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>


<style>
  #category {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }

  #category li img {
    width: 15rem;
    height: 15rem;
  }
</style>
