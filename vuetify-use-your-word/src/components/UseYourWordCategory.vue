<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab
        v-for="item in tabs"
        :key="item"
      >
        {{item}}
      </v-tab>
    </v-tabs>

    <v-tabs v-model="tab">
      <v-tab-item v-for="tab in tabs" :key="tab">
        <v-expansion-panels v-if="tab =='Édition'">
          <div v-for="element in props.data" :key="element.id" class="p-3" style="width: 100%">
            <v-row class="text-center">
              <v-col cols="12">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <label style="cursor: pointer">N°{{element.id}} - {{element.prompt}}</label>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-if="props.item == 'subTheTitle'">
                      StreamingAssets/Content/SubTheTitle/{{element.id}}/{{element.name}}
                      <video controls width="500" height="500">
                          <source :src="getVideoPath(element)" type="video/mp4">
                      </video>

                      <v-row>
                        <v-col cols="12" md="3">
                          <v-text-field v-model="element.start" min="0" label="Timecode de début" />
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-text-field v-model="element.end" min="1" label="Timecode de fin" />
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-text-field v-model="element.position" label="Position ? wtf" />
                        </v-col>
                        <v-col cols="12" md="3">
                          <v-text-field v-model="element.name" label="Nom de la vidéo (à voir si on peut renommer les vidéos existantes sinon nom fixe)" />
                        </v-col>
                      </v-row>
                    </div>

                    <v-row>
                      <label class="col-md-12">Liste des propositions</label>
                      <div v-for="(text, index) in element.houseAnswers" :key="index" class="col-md-4 p-4">
                        <v-text-field v-model="element.houseAnswers[index]" placeholder="edit me" class="form-control" />
                      </div>
                    </v-row>

                    <v-row v-if="props.item == 'surveySays_FR'">
                      <label class="col-md-12">Liste des propositions 2</label>
                      <div v-for="(text, index) in element.houseAnswers2" :key="index" class="col-md-4 p-4">
                        <v-text-field v-model="element.houseAnswers2[index]" placeholder="edit me" class="form-control" />
                      </div>
                      <label class="col-md-12">Liste des propositions 3</label>
                      <div v-for="(text, index) in element.houseAnswers3" :key="index" class="col-md-4 p-4">
                        <v-text-field v-model="element.houseAnswers3[index]" placeholder="edit me" class="form-control" />
                      </div>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panels>
        
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script setup>
  import { defineProps, ref } from 'vue';

  const tab = ref(null);
  const tabs = ref(['Création', 'Édition']);
  
  const props = defineProps({
    // TODO: nouvelles vidéos = id supérieur ou égale à l'id 126 (avant, c'est les vidéos du jeu)
    data: Array,
    item: String
  });

  function getVideoPath(element) {
    return 'StreamingAssets/Content/SubTheTitle/' + element.id + '/' + element.name;
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  iframe {
  }

  .component {
    width: 20%;
    padding: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .twitchrow {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }

  .v-expansion-panel-header--active {
    background-color: blue !important;
  }
</style>
