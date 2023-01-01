<template>
  <div class="container-fluid">

    <div class="component" @click="test">
      <img :src="props.item + '.jpg'" />
    </div>

    <div v-for="element in props.data" :key="element.id" class="p-3">
      <div class="row">
        <label>N°{{element.id}} - {{element.prompt}}</label>
      </div>
      <div v-if="props.item == 'subTheTitle'">
      StreamingAssets/Content/SubTheTitle/{{element.id}}/{{element.name}}
        <video controls width="500" height="500">
            <source :src="getVideoPath(element)" type="video/mp4">
        </video>

        <div class="row">
          <div class="col-md-3">
            <label>Timecode de début</label>
            <input v-model="element.start" min="0" />
          </div>
          <div class="col-md-3">
            <label>Timecode de fin</label>
            <input v-model="element.end" min="1" />
          </div>
          <div class="col-md-3">
            <label>Position ? wtf</label>
            <input v-model="element.position" />
          </div>
          <div class="col-md-3">
            <label>Nom de la vidéo (à voir si on peut renommer les vidéos existantes sinon nom fixe)</label>
            <input v-model="element.name" />
          </div>
        </div>
      </div>

      <div class="row">
        <label class="col-md-12">Liste des propositions</label>
        <div v-for="(text, index) in element.houseAnswers" :key="index" class="col-md-3 p-3">
          <input v-model="element.houseAnswers[index]" placeholder="edit me" class="form-control" />
        </div>
      </div>

      <div v-if="props.item == 'surveySays_FR'" class="row">
        <label class="col-md-12">Liste des propositions 2</label>
        <div v-for="(text, index) in element.houseAnswers2" :key="index" class="col-md-3 p-3">
          <input v-model="element.houseAnswers2[index]" placeholder="edit me" class="form-control" />
        </div>
        <label class="col-md-12">Liste des propositions 3</label>
        <div v-for="(text, index) in element.houseAnswers3" :key="index" class="col-md-3 p-3">
          <input v-model="element.houseAnswers3[index]" placeholder="edit me" class="form-control" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  //const fs = require('fs');

  const props = defineProps({
    // TODO: nouvelles vidéos = id supérieur ou égale à l'id 126 (avant, c'est les vidéos du jeu)
    data: Object,
    item: Object
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
</style>
