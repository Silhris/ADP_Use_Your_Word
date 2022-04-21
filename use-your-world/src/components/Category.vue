<template>
  <div class="container-fluid">

    <div class="component" @click="test">
      <img :src="item + '.jpg'" />
    </div>

    <p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>

    <div v-for="element in data" :key="element.id" class="p-3">
      <div class="row">
        <label>N°{{element.id}} - {{element.prompt}}</label>
      </div>

      <div class="row" v-if="item == 'subTheTitle'">
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
      </div>

      <div class="row">
        <label class="col-md-12">Liste des propositions</label>
        <div v-for="(text, index) in element.houseAnswers" :key="index" class="col-md-3 p-3">
          <input v-model="element.houseAnswers[index]" placeholder="edit me" class="form-control" />
        </div>
      </div>

      <div v-if="item == 'surveySays_FR'" class="row">
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

<script>
export default {
  name: 'Category',
  props: {
    data: Object,
    item: Object,
    key: Object,
    isCategorySelected: Object,
  },
  data() {
    return {
      message: 'oh',
      options: ["landscape", "portrait"],
      yolo: {}
    }
  },
  methods: {
    // empty
    test() {
      this.$emit('clicked', this.item);
    }
  },
  computed: {
    // empty
  }
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
</style>
